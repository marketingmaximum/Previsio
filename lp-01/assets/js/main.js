/* Previsio LP-01 — interações (ano, máscara, validação, captura/lead gate, checklist, eventos) */
(function () {
  "use strict";

  var CFG = window.PREVISIO_CFG || {};
  var WA = (CFG.WHATSAPP || "555134669601").replace(/\D/g, "");
  var ENDPOINT = CFG.FORM_ENDPOINT || "";

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- rastreamento (dataLayer; GTM cuida de GA4/Meta/Ads) ---- */
  function track(ev, d) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: ev }, d || {}));
      if (typeof window.gtag === "function") window.gtag("event", ev, d || {});
    } catch (e) {}
  }
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener("click", function () { track("click_telefone"); });
  });

  /* ============ ATRIBUIÇÃO (first/last touch, cookies first-party) ============ */
  var MX = (function () {
    var DAY = 864e5;
    var AI = /(chatgpt|openai|perplexity|claude|gemini|bard|copilot|you\.com|phind|poe)/i;
    var SOCIAL = /(facebook|fb\.com|instagram|linkedin|tiktok|youtube|twitter|x\.com|pinterest|reddit|whatsapp|t\.me|telegram)/i;
    var SEARCH = /(google|bing|duckduckgo|yahoo|yandex|baidu|ecosia|brave)/i;
    var PAID_MED = /(cpc|ppc|paid|ads|cpm|display|paid_social)/i;

    function cookie(name, val, days) {
      if (val === undefined) {
        var m = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
        return m ? decodeURIComponent(m[1]) : "";
      }
      var exp = new Date(Date.now() + days * DAY).toUTCString();
      document.cookie = name + "=" + encodeURIComponent(val) + ";expires=" + exp + ";path=/;SameSite=Lax";
    }
    function uuid() {
      try { if (crypto && crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0; return (c === "x" ? r : (r & 3 | 8)).toString(16);
      });
    }
    function param(p, k) { try { return p.get(k) || ""; } catch (e) { return ""; } }

    function classify(src, medium, ref, gclid, fbclid, msclkid) {
      if (gclid || fbclid || msclkid || PAID_MED.test(medium)) return "pago";
      if (AI.test(src) || AI.test(ref)) return "ia";
      if (SOCIAL.test(src) || SOCIAL.test(ref)) return "social";
      if (SEARCH.test(ref) || medium === "organic") return "organico";
      if (src || (ref && ref.indexOf(location.hostname) === -1)) return "referral";
      return "direto";
    }

    var p; try { p = new URLSearchParams(location.search); } catch (e) { p = { get: function () { return ""; } }; }
    var gclid = param(p, "gclid"), fbclid = param(p, "fbclid"), msclkid = param(p, "msclkid");
    var utm_source = param(p, "utm_source"), utm_medium = param(p, "utm_medium"),
        utm_campaign = param(p, "utm_campaign"), utm_term = param(p, "utm_term"), utm_content = param(p, "utm_content");
    var ref = ""; try { ref = document.referrer || ""; } catch (e) {}
    var refHost = ""; try { refHost = ref ? new URL(ref).hostname : ""; } catch (e) {}

    var source = utm_source || refHost || "(direct)";
    var medium = utm_medium || (gclid ? "cpc" : (refHost ? "referral" : "(none)"));
    var type = classify(source, medium, ref, gclid, fbclid, msclkid);

    var vid = cookie("mx_visitor_id"); if (!vid) { vid = uuid(); cookie("mx_visitor_id", vid, 730); }

    var touch = { ts: Date.now(), type: type, source: source, medium: medium, campaign: utm_campaign, ref: refHost };
    // first-touch (write-once, 180d)
    var first = cookie("mx_first_touch");
    if (!first) { first = JSON.stringify(Object.assign({ landing: location.pathname + location.search }, touch)); cookie("mx_first_touch", first, 180); }
    // last-touch (30d) — atualiza sempre que houver sinal (utm/ref/clickid)
    if (utm_source || refHost || gclid || fbclid) cookie("mx_last_touch", JSON.stringify(touch), 30);
    var last = cookie("mx_last_touch") || cookie("mx_first_touch");

    function parse(s) { try { return JSON.parse(s); } catch (e) { return {}; } }
    var f = parse(first), l = parse(last);

    // prioridade: pago > ia > social > referral > organico > direto (first ganha, salvo first=direto)
    var PRI = { pago: 6, ia: 5, social: 4, referral: 3, organico: 2, direto: 1 };
    var originType = (f.type && f.type !== "direto") ? f.type : (l.type || f.type || "direto");

    var device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? (/iPad|Tablet/i.test(navigator.userAgent) ? "tablet" : "mobile") : "desktop";

    var data = {
      mx_visitor_id: vid,
      mx_origin_type: originType,
      mx_first_source: f.source || "", mx_first_medium: f.medium || "", mx_first_type: f.type || "",
      mx_first_campaign: f.campaign || "", mx_first_landing: f.landing || "", mx_first_ts: f.ts || "",
      mx_last_source: l.source || "", mx_last_medium: l.medium || "", mx_last_type: l.type || "",
      mx_last_campaign: l.campaign || "", mx_last_referrer: l.ref || "",
      utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign,
      utm_term: utm_term, utm_content: utm_content,
      mx_gclid: gclid, mx_fbclid: fbclid, mx_msclkid: msclkid,
      mx_device: device, mx_page_url: location.href
    };
    // expõe p/ debug e dispara no dataLayer
    window.mxLeadTracking = data;
    track("mx_attribution_ready", { mx_origin_type: data.mx_origin_type, mx_first_source: data.mx_first_source, mx_last_source: data.mx_last_source, mx_visitor_id: vid });
    return data;
  })();

  function attribution() { return MX; }

  /* ---- máscara de telefone BR ---- */
  function maskPhone(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (v.length <= 10) return v.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, function (_, a, b, c) {
      var o = ""; if (a) o = "(" + a + (a.length === 2 ? ") " : ""); if (b) o += b + (c ? "-" : ""); if (c) o += c; return o;
    });
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
  document.addEventListener("input", function (e) {
    if (e.target && e.target.matches('input[type="tel"]')) e.target.value = maskPhone(e.target.value);
  });

  /* ---- validação ---- */
  function validate(form) {
    var ok = true;
    form.querySelectorAll("[required]").forEach(function (f) {
      var v = (f.value || "").trim(), bad = !v;
      if (f.type === "tel") bad = v.replace(/\D/g, "").length < 10;
      if (f.type === "email") bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
      f.classList.toggle("invalid", bad);
      if (bad && ok) { f.focus(); ok = false; }
    });
    return ok;
  }

  /* ---- mensagem do WhatsApp por contexto, já com os dados do lead ---- */
  function waURL(d, ctx) {
    d = d || {};
    var head;
    if (ctx === "checklist_critico")
      head = "Olá! Fiz o Checklist de NR-12 no site de vocês e percebi que minha operação possui pontos de risco. Gostaria de falar com a equipe técnica para entender como regularizar minha fábrica.";
    else if (ctx === "checklist_ok")
      head = "Olá! Fiz o Checklist de NR-12 no site de vocês. Gostaria de falar com a equipe técnica sobre a manutenção da conformidade das minhas máquinas.";
    else
      head = "Olá! Quero falar com um engenheiro sobre a adequação NR-12 das minhas máquinas.";
    var l = [head,
      d.nome ? "Nome: " + d.nome : "", d.empresa ? "Empresa: " + d.empresa : "",
      d.telefone ? "WhatsApp: " + d.telefone : "", d.email ? "E-mail: " + d.email : "",
      d.cargo ? "Cargo: " + d.cargo : "", d.maquinas ? "Nº de máquinas: " + d.maquinas : ""
    ].filter(Boolean);
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(l.join("\n"));
  }

  /* ---- envio do lead ao CRM (POST). Resolve sempre (não bloqueia o usuário). ---- */
  function submitLead(data, meta) {
    var payload = Object.assign({}, data, attribution(), {
      origem: "lp-01-nr12",
      canal: (meta && meta.canal) || "form",
      pagina: location.href,
      enviado_em: new Date().toISOString()
    });
    if (meta && meta.extra) payload = Object.assign(payload, meta.extra);
    // evento de conversão padronizado p/ GTM → GA4 / Meta / Google Ads
    track("generate_lead", {
      canal: payload.canal,
      form_id: (meta && meta.formId) || "lead-form",
      mx_origin_type: MX.mx_origin_type,
      mx_first_source: MX.mx_first_source,
      mx_last_source: MX.mx_last_source,
      mx_visitor_id: MX.mx_visitor_id,
      lead_value: 1
    });
    track("gerar_lead", { canal: payload.canal }); // legado (compat)
    if (!ENDPOINT) {
      // TODO(cliente): defina FORM_ENDPOINT em window.PREVISIO_CFG para enviar ao CRM/FunnelsFlow.
      return Promise.resolve(false);
    }
    var ctrl;
    try { ctrl = new AbortController(); setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, 9000); } catch (e) {}
    return fetch(ENDPOINT, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload), signal: ctrl ? ctrl.signal : undefined
    }).then(function () { return true; }).catch(function () { return false; });
  }

  /* ---- helpers de modal ---- */
  function show(el) { if (el) el.hidden = false; }
  function hide(el) { if (el) el.hidden = true; }

  /* modal de sucesso do formulário principal */
  var modal = document.getElementById("modal"),
      modalWa = document.getElementById("modal-wa"),
      modalX = document.getElementById("modal-x");
  function openSuccess(u) { if (modalWa && u) modalWa.href = u; show(modal); }
  if (modalX) modalX.addEventListener("click", function () { hide(modal); });
  if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) hide(modal); });

  /* ============ LEAD GATE: capturar contato antes de abrir o WhatsApp ============ */
  var gate = document.getElementById("gate-modal"),
      gateForm = document.getElementById("gate-form"),
      gateX = document.getElementById("gate-x"),
      gateSub = document.getElementById("gate-sub"),
      gateBtn = document.getElementById("gate-btn");
  var gateCtx = "orcamento", gateCanal = "whatsapp", gateExtra = null;

  function openGate(opts) {
    opts = opts || {};
    gateCtx = opts.ctx || "orcamento";
    gateCanal = opts.canal || "whatsapp";
    gateExtra = opts.extra || null;
    if (gateSub) gateSub.textContent = opts.sub ||
      "Deixe seu contato e um engenheiro retorna pelo WhatsApp. Sem compromisso.";
    show(gate);
    var first = document.getElementById("g-nome"); if (first) setTimeout(function () { first.focus(); }, 60);
  }
  function closeGate() { hide(gate); if (gateBtn) { gateBtn.disabled = false; gateBtn.removeAttribute("aria-busy"); } }
  if (gateX) gateX.addEventListener("click", closeGate);
  if (gate) gate.addEventListener("click", function (e) { if (e.target === gate) closeGate(); });

  if (gateForm) gateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate(gateForm)) return;
    var d = {};
    new FormData(gateForm).forEach(function (v, k) { d[k] = typeof v === "string" ? v.trim() : v; });
    var url = waURL(d, gateCtx);
    if (gateBtn) { gateBtn.disabled = true; gateBtn.setAttribute("aria-busy", "true"); }
    var win = null;
    try { win = window.open("about:blank", "_blank"); } catch (e) {} // abre já, para não cair no bloqueador de popup
    submitLead(d, { canal: gateCanal, extra: gateExtra }).then(function () {
      if (win) { win.location = url; } else { window.location.href = url; }
      gateForm.reset(); closeGate();
    });
  });

  /* Intercepta TODOS os gatilhos de WhatsApp (hero, float, mbar, cta final, checklist)
     e exige a captura antes de seguir. */
  function bindWhats(el, opts) {
    if (!el) return;
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openGate(opts);
    });
  }
  // por seletor/eventos já existentes
  bindWhats(document.querySelector('[data-evt="whatsapp_hero"]'),      { canal: "whatsapp_hero" });
  bindWhats(document.querySelector('[data-evt="whatsapp_float"]'),     { canal: "whatsapp_float" });
  bindWhats(document.querySelector('[data-evt="whatsapp_cta_final"]'), { canal: "whatsapp_cta_final" });
  // rodapé "WhatsApp comercial"
  document.querySelectorAll('.ft a[href*="wa.me"]').forEach(function (a) {
    bindWhats(a, { canal: "whatsapp_rodape" });
  });

  /* ---- formulário principal de orçamento ---- */
  var form = document.getElementById("lead-form");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate(form)) return;
    var d = {};
    new FormData(form).forEach(function (v, k) { d[k] = typeof v === "string" ? v.trim() : v; });
    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.setAttribute("aria-busy", "true"); }
    submitLead(d, { canal: "form_orcamento" }).then(function () {
      openSuccess(waURL(d, "orcamento"));
      form.reset();
      if (btn) { btn.disabled = false; btn.removeAttribute("aria-busy"); }
    });
  });

  /* ============ Checklist de Risco Iminente NR-12 ============ */
  (function () {
    var ckModal = document.getElementById("ck-modal");
    if (!ckModal) return;
    var quiz = document.getElementById("ck-quiz"),
        result = document.getElementById("ck-result"),
        bar = document.getElementById("ck-bar"),
        TOTAL = 8, lastCtx = "checklist_critico";

    function openCk() { show(ckModal); hide(result); quiz.hidden = false; track("abrir_checklist"); }
    function closeCk() { hide(ckModal); }
    document.querySelectorAll("#abrir-checklist").forEach(function (b) { b.addEventListener("click", openCk); });
    var ckX = document.getElementById("ck-x");
    if (ckX) ckX.addEventListener("click", closeCk);
    ckModal.addEventListener("click", function (e) { if (e.target === ckModal) closeCk(); });

    function answered() {
      var n = 0;
      for (var i = 1; i <= TOTAL; i++) if (quiz.querySelector('input[name="q' + i + '"]:checked')) n++;
      return n;
    }
    quiz.addEventListener("change", function (e) {
      if (bar) bar.style.width = Math.round((answered() / TOTAL) * 100) + "%";
      // marca a pergunta como respondida (visual) e remove o estado de erro
      if (e.target && e.target.name) {
        var q = e.target.closest(".ck__q");
        if (q) { q.classList.add("is-done"); q.classList.remove("ck__q--miss"); }
      }
    });

    quiz.addEventListener("submit", function (e) {
      e.preventDefault();
      var miss = 0;
      for (var i = 1; i <= TOTAL; i++) {
        var q = quiz.querySelectorAll(".ck__q")[i - 1];
        var ok = quiz.querySelector('input[name="q' + i + '"]:checked');
        q.classList.toggle("ck__q--miss", !ok);
        if (!ok) { if (!miss) q.scrollIntoView({ behavior: "smooth", block: "center" }); miss++; }
      }
      if (miss) return;

      var riscos = 0, resp = {};
      for (var j = 1; j <= TOTAL; j++) {
        var v = quiz.querySelector('input[name="q' + j + '"]:checked').value;
        resp["q" + j] = v; if (v !== "sim") riscos++;
      }
      var critico = riscos >= 1;
      lastCtx = critico ? "checklist_critico" : "checklist_ok";

      var badge = document.getElementById("ck-badge"),
          rtitle = document.getElementById("ck-rtitle"),
          rtext = document.getElementById("ck-rtext"),
          rico = document.getElementById("ck-rico"),
          ricoUse = rico ? rico.querySelector("use") : null;
      if (critico) {
        if (rico) rico.className = "ck__rico ck__rico--crit";
        if (ricoUse) ricoUse.setAttribute("href", "#ic-risco");
        badge.className = "ck__badge ck__badge--crit"; badge.textContent = "Risco crítico";
        rtitle.textContent = "Sua empresa está em Risco Crítico";
        rtext.innerHTML = "Você respondeu <strong>“Não” ou “Não sei”</strong> em " + riscos + " de 8 pontos. Uma fiscalização do Ministério do Trabalho hoje poderia resultar em multas pesadas ou na <strong>interdição</strong> das suas máquinas, parando a produção. O próximo passo é um diagnóstico técnico formal.";
      } else {
        if (rico) rico.className = "ck__rico ck__rico--ok";
        if (ricoUse) ricoUse.setAttribute("href", "#ic-escudo");
        badge.className = "ck__badge ck__badge--ok"; badge.textContent = "Boa conformidade";
        rtitle.textContent = "Parabéns — bons indícios de conformidade";
        rtext.innerHTML = "Você respondeu <strong>“Sim”</strong> a todas as perguntas. Lembre-se: a segurança é <strong>contínua</strong>. Alterou o layout, trocou componentes ou comprou máquina nova? A adequação precisa ser revista.";
      }
      // guarda o resultado para anexar ao lead
      ckResult = { risco: critico ? "critico" : "ok", pontos_de_risco: riscos, respostas: resp };
      track("checklist_resultado", { risco: ckResult.risco, pontos_de_risco: riscos });
      quiz.hidden = true; show(result); result.scrollTop = 0;
    });

    var ckResult = null;
    // "Falar com a equipe técnica" -> exige captura, anexando o resultado do checklist
    var ckWa = document.getElementById("ck-wa");
    if (ckWa) ckWa.addEventListener("click", function (e) {
      e.preventDefault();
      closeCk();
      openGate({
        ctx: lastCtx,
        canal: "checklist_" + (ckResult ? ckResult.risco : "na"),
        sub: "Recebemos o seu resultado. Deixe seu contato e um engenheiro retorna pelo WhatsApp.",
        extra: { checklist: ckResult }
      });
    });

    var again = document.getElementById("ck-again");
    if (again) again.addEventListener("click", function () {
      quiz.reset(); if (bar) bar.style.width = "0";
      quiz.querySelectorAll(".ck__q").forEach(function (q) { q.classList.remove("ck__q--miss", "is-done"); });
      hide(result); quiz.hidden = false;
    });
  })();

  /* ESC fecha qualquer modal aberto */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    [modal, gate, document.getElementById("ck-modal")].forEach(function (m) {
      if (m && !m.hidden) m.hidden = true;
    });
  });
})();
