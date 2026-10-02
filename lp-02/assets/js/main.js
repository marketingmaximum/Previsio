/* ===========================================================
   Previsio — LP-02 Checklist de Risco Iminente NR-12
   Um arquivo para as duas páginas (body[data-page] = index | obrigado).
   - Nenhuma tag de fornecedor aqui: só dataLayer. O GTM (se configurado) faz o resto.
   - Nome, telefone e e-mail nunca entram crus no dataLayer (só SHA-256).
   - A conversão (inscricao_confirmada) só dispara no obrigado, com o servidor
     tendo confirmado o recebimento, uma vez por event_id.
   =========================================================== */
(function () {
  "use strict";

  var CFG = window.PREVISIO_CFG || {};
  var PAGE = document.body.getAttribute("data-page");
  var HOST = location.hostname;
  var APROVACAO = location.protocol === "file:" || (CFG.HOSTS_APROVACAO || []).indexOf(HOST) !== -1 ||
                  /(^|\.)agenciamaximum\.com$/.test(HOST);

  /* ---------- armazenamento (falha silenciosa: modo privado, cookies bloqueados) ---------- */
  function sGet(store, k) { try { var v = window[store].getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function sSet(store, k, v) { try { window[store].setItem(k, JSON.stringify(v)); } catch (e) {} }
  function sDel(store, k) { try { window[store].removeItem(k); } catch (e) {} }

  /* ---------- dataLayer ---------- */
  window.dataLayer = window.dataLayer || [];
  function track(ev, params) {
    var o = { event: ev, pagina: PAGE, origem: CFG.ORIGEM, oferta: CFG.OFERTA, variacao: CFG.VARIACAO };
    if (params) for (var k in params) if (Object.prototype.hasOwnProperty.call(params, k)) o[k] = params[k];
    window.dataLayer.push(o);
  }

  /* ---------- GTM: só fora da versão de aprovação e com ID confirmado ---------- */
  if (CFG.GTM_ID && !APROVACAO) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(CFG.GTM_ID);
    document.head.appendChild(g);
  }

  /* ---------- origem do clique: guardada por 90 dias ---------- */
  var ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "fbclid"];
  var ATTR_TTL = 90 * 24 * 3600 * 1000;
  function captureAttribution() {
    var p = new URLSearchParams(location.search), found = {}, any = false;
    ATTR_KEYS.forEach(function (k) { var v = p.get(k); if (v) { found[k] = v.slice(0, 300); any = true; } });
    if (any) {
      found._ts = Date.now();
      found.landing = location.href.split("#")[0].slice(0, 500);
      found.referrer = (document.referrer || "").slice(0, 300);
      sSet("localStorage", "pv_attr", found);
    }
  }
  function getAttribution() {
    var a = sGet("localStorage", "pv_attr");
    if (!a || !a._ts || Date.now() - a._ts > ATTR_TTL) return {};
    return a;
  }
  function cookie(name) {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  }
  function metaIds() {
    var fbc = cookie("_fbc"), a = getAttribution();
    if (!fbc && a.fbclid) fbc = "fb.1." + (a._ts || Date.now()) + "." + a.fbclid;
    return { fbp: cookie("_fbp"), fbc: fbc };
  }

  /* ---------- utilidades ---------- */
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0; return (c === "x" ? r : (r & 3 | 8)).toString(16);
    });
  }
  function sha256(str) {
    if (!str || !window.crypto || !crypto.subtle || !window.TextEncoder) return Promise.resolve("");
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(str)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
    }).catch(function () { return ""; });
  }
  function digits(s) { return String(s || "").replace(/\D/g, ""); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function firstName(n) { return String(n || "").trim().split(/\s+/)[0] || ""; }

  /* ---------- as 8 perguntas (texto literal da cliente) ----------
     "atua": como a Previsio atua no ponto (lista de serviços da apresentação da cliente).
     Plano B do plano: se a cliente não aprovar essas linhas, deixe ATUA_ON = false. */
  var ATUA_ON = true;
  var QUESTIONS = [
    { k: "paineis", topic: "Painéis elétricos",
      q: "Os painéis elétricos das máquinas estão trancados, sinalizados e sem nenhuma “parte viva” (fios descascados/contatos) exposta?",
      atua: ["Reforma de painéis e instalações elétricas"] },
    { k: "inventario", topic: "Inventário",
      q: "Você possui o Inventário de Máquinas e Equipamentos 100% atualizado?",
      atua: ["Inventário de máquinas com priorizações de risco por HRN"] },
    { k: "documentacao", topic: "Documentação",
      q: "Todas as máquinas da sua operação possuem uma Apreciação/Análise de Risco válida, documentada e assinada por profissional legalmente habilitado?",
      atua: ["Análise de risco indicando a solução técnica"] },
    { k: "protecoes", topic: "Proteções e interfaces",
      q: "As zonas de perigo das máquinas possuem proteções (fixas ou móveis) com sistema de intertravamento corretamente ligado a uma interface de segurança?",
      atua: ["Projetos elétricos, mecânicos e de software", "Montagem e instalação de sistemas de segurança"] },
    { k: "emergencia", topic: "Emergência e rearme",
      q: "As máquinas possuem botões de parada de emergência de fácil acesso e contam com sistema de rearme manual de segurança após paradas?",
      atua: ["Montagem e instalação de sistemas de segurança"] },
    { k: "manuais", topic: "Manuais",
      q: "Existem manuais de operação e manutenção, rigorosamente em português, disponíveis e de fácil acesso para todos os operadores?",
      atua: ["Reconstituição de projetos e manuais"] },
    { k: "capacitacao", topic: "Capacitação",
      q: "Seus operadores e equipe de manutenção possuem treinamento específico, periódico e documentado sobre os riscos da NR-12?",
      atua: ["Treinamentos de todas as NR's"] },
    { k: "procedimentos", topic: "Procedimentos",
      q: "Existe um procedimento formal e prático de bloqueio e etiquetagem (LOTO) para a manutenção segura das máquinas?",
      atua: ["Plano de bloqueio de energias perigosas (LOTO)", "Criação de procedimentos de operação e manutenção"] }
  ];
  var N = QUESTIONS.length;
  var LABEL = { sim: "Sim", nao: "Não", nao_sei: "Não sei" };

  function countOpen(ans) { var n = 0; for (var i = 0; i < N; i++) if (ans[i] !== "sim") n++; return n; }

  /* Pontuação provisória para o CRM: a faixa de máquinas pesa mais (21–50 e +50 sobem de prioridade). */
  var FAIXA_SCORE = { "1 a 5": 10, "6 a 20": 20, "21 a 50": 30, "Mais de 50": 40, "Não sei": 10 };
  function leadScore(faixa, abertos) { return (FAIXA_SCORE[faixa] || 0) + abertos; }

  function waLink(lead) {
    var critico = lead.resultado === "critico";
    var head = critico
      ? "Olá! Fiz o Checklist de NR12 no site de vocês e percebi que minha operação possui pontos de risco. Gostaria de falar com a equipe técnica para entender como regularizar minha fábrica."
      : "Olá! Fiz o Checklist de NR12 no site de vocês. Gostaria de falar com a equipe técnica sobre a manutenção da conformidade das minhas máquinas.";
    var lines = [head, "",
      lead.nome ? "Nome: " + lead.nome : "",
      lead.empresa ? "Empresa: " + lead.empresa : "",
      lead.maquinas ? "Máquinas: " + lead.maquinas : "",
      "Pontos em aberto ou a verificar: " + lead.pontos_em_aberto + " de " + N];
    if (lead.status === "falhou") {
      lines.push(lead.telefone ? "WhatsApp: " + lead.telefone : "", lead.email ? "E-mail: " + lead.email : "");
    }
    return "https://wa.me/" + CFG.WHATSAPP + "?text=" + encodeURIComponent(lines.filter(function (l, i) { return l || i === 1; }).join("\n"));
  }

  /* ---------- cliques de contato (rodapé e FAQ) ---------- */
  function bindContactClicks() {
    document.querySelectorAll(".js-tel").forEach(function (a) { a.addEventListener("click", function () { track("click_telefone"); }); });
    document.querySelectorAll(".js-mail").forEach(function (a) { a.addEventListener("click", function () { track("click_email"); }); });
  }

  captureAttribution();
  bindContactClicks();
  track("pagina_pronta", { aprovacao: APROVACAO });

  if (PAGE === "index") initIndex();
  if (PAGE === "obrigado") initObrigado();

  /* ===========================================================
     INDEX: checklist + cadastro
     =========================================================== */
  function initIndex() {
    var card = document.getElementById("checklist");
    var quiz = document.getElementById("ck-quiz");
    var form = document.getElementById("lead-form");
    var elCount = document.getElementById("ck-count");
    var elBar = document.getElementById("ck-bar");
    var elNote = document.getElementById("ck-note");
    var elTopic = document.getElementById("ck-topic");
    var elQ = document.getElementById("ck-q");
    var elHint = document.getElementById("ck-hint");
    var elBack = document.getElementById("ck-back");
    var opts = quiz.querySelectorAll(".ck__opt");
    var sticky = document.getElementById("sticky");
    var stickyBtn = document.getElementById("sticky-btn");

    var saved = sGet("sessionStorage", "pv_ck") || {};
    var state = { step: 0, answers: Array.isArray(saved.answers) ? saved.answers.slice(0, N) : [] };
    var flags = { iniciado: !!saved.iniciado, concluido: !!saved.concluido, formAberto: false };
    var pushed = 0;

    // retoma de onde parou (recarregou a página, voltou do WhatsApp etc.)
    var firstEmpty = 0;
    while (firstEmpty < N && state.answers[firstEmpty]) firstEmpty++;
    state.step = firstEmpty;

    function save() { sSet("sessionStorage", "pv_ck", { answers: state.answers, iniciado: flags.iniciado, concluido: flags.concluido }); }

    function render(focus) {
      var s = state.step;
      var onForm = s >= N;
      quiz.hidden = onForm;
      form.hidden = !onForm;
      elBar.style.width = Math.round(Math.min(s, N) / N * 100) + "%";
      elNote.hidden = s > 0;

      if (!onForm) {
        var q = QUESTIONS[s];
        elCount.textContent = "Pergunta " + (s + 1) + " de " + N;
        elTopic.textContent = q.topic;
        elQ.textContent = q.q;
        elHint.hidden = s !== 0;
        elBack.hidden = s === 0;
        opts.forEach(function (b) { b.setAttribute("aria-pressed", String(state.answers[s] === b.getAttribute("data-a"))); });
        if (focus) elQ.focus({ preventScroll: true });
      } else {
        var open = countOpen(state.answers);
        elCount.textContent = N + " de " + N + " respondidas";
        document.getElementById("lead-sum").textContent = open === 0
          ? N + " de " + N + " respondidas. Você marcou Sim nos " + N + " pontos."
          : N + " de " + N + " respondidas. Você marcou Não ou Não sei em " + open + (open === 1 ? " ponto." : " pontos.");
        if (!flags.formAberto) { flags.formAberto = true; track("abriu_formulario"); }
        if (focus) document.getElementById("lead-sum").focus({ preventScroll: true });
      }
      updateSticky();
    }

    function keepCardInView() {
      var r = card.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.5) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function goTo(step, mode) {
      state.step = Math.max(0, Math.min(N, step));
      if (mode === "push") { history.pushState({ ck: state.step }, ""); pushed++; }
      else if (mode === "replace") { history.replaceState({ ck: state.step }, ""); }
      render(true);
      keepCardInView();
    }

    // o botão voltar do Android volta uma pergunta, não fecha a página
    history.replaceState({ ck: state.step }, "");
    window.addEventListener("popstate", function (e) {
      if (e.state && typeof e.state.ck === "number") {
        pushed = Math.max(0, pushed - 1);
        state.step = e.state.ck;
        render(true);
        keepCardInView();
      }
    });
    function back() {
      if (pushed > 0) history.back();
      else goTo(state.step - 1, "replace");
    }
    elBack.addEventListener("click", back);
    document.getElementById("lead-back").addEventListener("click", back);

    opts.forEach(function (b) {
      b.addEventListener("click", function () {
        var s = state.step;
        if (s >= N) return;
        state.answers[s] = b.getAttribute("data-a");
        if (!flags.iniciado) { flags.iniciado = true; track("checklist_iniciado"); }
        track("checklist_etapa", { pergunta: s + 1 });
        if (s === N - 1 && !flags.concluido) { flags.concluido = true; track("checklist_concluido", { pontos_em_aberto: countOpen(state.answers) }); }
        save();
        // próxima sem resposta (se voltou e trocou uma resposta, segue em frente normalmente)
        goTo(s + 1, "push");
      });
    });

    /* ---- CTAs "Fazer o checklist NR-12" e barra fixa ---- */
    document.querySelectorAll(".js-go").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        card.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(function () { (state.step >= N ? document.getElementById("lead-sum") : elQ).focus({ preventScroll: true }); }, 350);
      });
    });
    var cardVisible = true;
    function updateSticky() {
      if (!sticky) return;
      if (state.step >= N) stickyBtn.textContent = "Continuar: ver meu resultado";
      else if (flags.iniciado) stickyBtn.textContent = "Continuar: pergunta " + (state.step + 1) + " de " + N;
      else stickyBtn.textContent = "Fazer o checklist NR-12";
      var on = !cardVisible;
      sticky.classList.toggle("is-on", on);
      sticky.setAttribute("aria-hidden", String(!on));
      stickyBtn.tabIndex = on ? 0 : -1;
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { cardVisible = en[0].isIntersecting; updateSticky(); }, { threshold: 0.15 }).observe(card);
    }

    /* ---- rolagem ---- */
    var marks = [50, 75, 90], hit = {};
    window.addEventListener("scroll", function () {
      var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      var pct = (h.scrollTop || document.body.scrollTop) / max * 100;
      marks.forEach(function (m) { if (pct >= m && !hit[m]) { hit[m] = true; track("scroll_" + m); } });
    }, { passive: true });

    /* ---- máscara do WhatsApp ---- */
    var tel = document.getElementById("f-tel");
    tel.addEventListener("input", function () {
      var d = digits(tel.value);
      if (d.length > 11 && d.indexOf("55") === 0) d = d.slice(2);
      d = d.slice(0, 11);
      var out = d;
      if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
      if (d.length > 6) out = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length === 11 ? 7 : 6) + "-" + d.slice(d.length === 11 ? 7 : 6);
      tel.value = out;
    });

    /* ---- validação ---- */
    var RULES = {
      maquinas: function () { return !!form.querySelector("input[name=maquinas]:checked"); },
      nome: function () { return form.nome.value.trim().length >= 2; },
      empresa: function () { return form.empresa.value.trim().length >= 2; },
      telefone: function () { var d = digits(form.telefone.value); return (d.length === 10 || d.length === 11) && +d.slice(0, 2) >= 11; },
      email: function () { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.value.trim()); }
    };
    function check(name) {
      var ok = RULES[name]();
      var box = form.querySelector('[data-fld="' + name + '"]');
      box.classList.toggle("is-bad", !ok);
      var input = box.querySelector("input");
      if (input && input.type !== "radio") input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }
    ["nome", "empresa", "telefone", "email"].forEach(function (n) {
      form[n].addEventListener("blur", function () { if (form[n].value) check(n); });
      form[n].addEventListener("input", function () { if (form.querySelector('[data-fld="' + n + '"]').classList.contains("is-bad")) check(n); });
    });
    form.querySelectorAll("input[name=maquinas]").forEach(function (r) { r.addEventListener("change", function () { check("maquinas"); }); });

    /* ---- envio ---- */
    var failures = 0, sending = false;
    var btn = document.getElementById("lead-btn");
    var failBox = document.getElementById("lead-fail");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      var bad = Object.keys(RULES).filter(function (n) { return !check(n); });
      if (bad.length) {
        track("form_error", { campos: bad.join(",") });
        var el = form.querySelector('[data-fld="' + bad[0] + '"] input');
        if (el) el.focus();
        return;
      }

      var answers = state.answers.slice(0, N);
      var abertos = countOpen(answers);
      var faixa = form.querySelector("input[name=maquinas]:checked").value;
      var lead = {
        event_id: uuid(),
        nome: form.nome.value.trim(),
        empresa: form.empresa.value.trim(),
        telefone: form.telefone.value.trim(),
        email: form.email.value.trim().toLowerCase(),
        maquinas: faixa,
        respostas: answers,
        pontos_em_aberto: abertos,
        resultado: abertos > 0 ? "critico" : "ok",
        lead_score: leadScore(faixa, abertos)
      };

      // campo-isca preenchido: descarta sem enviar e sem conversão
      if (form.site.value) { lead.status = "descartado"; finish(lead); return; }

      if (APROVACAO || !CFG.FORM_ENDPOINT) { lead.status = "previa"; finish(lead); return; }

      sending = true;
      btn.disabled = true;
      btn.textContent = "Enviando…";
      failBox.classList.remove("is-on");

      var attr = getAttribution(), ids = metaIds();
      var payload = {
        nome: lead.nome, empresa: lead.empresa, telefone: lead.telefone, email: lead.email,
        maquinas: lead.maquinas, origem: CFG.ORIGEM, oferta: CFG.OFERTA, variacao: CFG.VARIACAO,
        event_id: lead.event_id, lead_score: lead.lead_score,
        pontos_em_aberto: abertos, resultado: lead.resultado,
        checklist: QUESTIONS.reduce(function (o, q, i) { o[q.k] = answers[i]; return o; }, {}),
        fbp: ids.fbp, fbc: ids.fbc,
        pagina: location.href.split("#")[0], referrer: document.referrer || "",
        enviado_em: new Date().toISOString()
      };
      ATTR_KEYS.forEach(function (k) { payload[k] = attr[k] || ""; });

      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 15000);
      fetch(CFG.FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined
      }).then(function (r) {
        clearTimeout(timer);
        if (!r.ok) throw new Error("HTTP " + r.status);
        lead.status = "enviado";
        track("gerou_lead", { event_id: lead.event_id, maquinas: lead.maquinas, pontos_em_aberto: abertos, resultado: lead.resultado, lead_score: lead.lead_score });
        finish(lead);
      }).catch(function (err) {
        clearTimeout(timer);
        failures++;
        track("form_submit_error", { tentativa: failures, erro: String(err && err.message || err).slice(0, 80) });
        if (failures >= 2) { lead.status = "falhou"; finish(lead); return; }
        sending = false;
        btn.disabled = false;
        btn.textContent = "Ver meu resultado";
        failBox.classList.add("is-on");
        failBox.focus && failBox.setAttribute("tabindex", "-1");
        failBox.focus();
      });
    });

    function finish(lead) {
      sSet("sessionStorage", "pv_lead", lead);
      sDel("sessionStorage", "pv_ck");
      location.href = "obrigado.html";
    }

    render(false);
  }

  /* ===========================================================
     OBRIGADO: resultado ponto a ponto + conversão
     =========================================================== */
  function initObrigado() {
    var root = document.getElementById("res");
    var lead = sGet("sessionStorage", "pv_lead");

    if (!lead || !Array.isArray(lead.respostas) || lead.respostas.length !== N || lead.status === "descartado") {
      root.innerHTML = '<div class="res__empty"><h1>Resultado não encontrado</h1>' +
        '<p>Para ver o resultado, responda as 8 perguntas e faça o cadastro.</p>' +
        '<a class="btn btn--green" href="./#checklist">Fazer o checklist NR-12</a></div>';
      return;
    }

    var critico = lead.resultado === "critico";
    var html = "";
    html += '<p class="res__hi">Cadastro recebido, ' + esc(firstName(lead.nome)) + '. Este é o resultado do seu Checklist de Risco Iminente NR-12.</p>';
    if (lead.status === "falhou") {
      html = '<p class="res__alert" role="alert">Não conseguimos registrar o seu cadastro. O resultado está abaixo. Para falar com a Previsio, use o botão do WhatsApp: a mensagem já leva os seus dados.</p>';
    }
    if (lead.status === "previa") {
      html = '<p class="res__alert no-print">Versão de aprovação: nenhum dado foi enviado e nenhuma conversão foi registrada.</p>' + html;
    }

    html += '<section class="verdict' + (critico ? "" : " verdict--ok") + '" aria-labelledby="v-title">';
    if (critico) {
      html += '<span class="verdict__badge">Risco crítico</span>' +
        '<h1 id="v-title">Sua empresa está em Risco Crítico.</h1>' +
        '<p>Você respondeu Não ou Não sei em ' + lead.pontos_em_aberto + ' de ' + N + ' pontos. Uma fiscalização do Ministério do Trabalho hoje poderia resultar em multas pesadas ou na interdição das suas máquinas, parando a produção. O próximo passo é um diagnóstico técnico formal.</p>' +
        '<a class="btn btn--green btn--block verdict__cta" id="wa-btn" target="_blank" rel="noopener" href="' + esc(waLink(lead)) + '">Quero falar com um Engenheiro da Previsio para regularizar minha situação</a>';
    } else {
      html += '<span class="verdict__badge">Bons indícios</span>' +
        '<h1 id="v-title">Parabéns: bons indícios de conformidade.</h1>' +
        '<p>Você respondeu Sim a todas as perguntas. Lembre-se: a segurança é contínua. Alterou o layout, trocou componentes ou comprou máquina nova? A adequação precisa ser revista.</p>' +
        '<a class="btn btn--green btn--block verdict__cta" id="wa-btn" target="_blank" rel="noopener" href="' + esc(waLink(lead)) + '">Falar com a equipe técnica da Previsio</a>';
    }
    html += '<p class="verdict__aside">Nosso foco é minimizar o impacto: paradas programadas, alinhadas ao seu cronograma.</p></section>';

    html += '<h2>Os 8 pontos</h2><ol class="points">';
    QUESTIONS.forEach(function (q, i) {
      var a = lead.respostas[i];
      var cls = a === "sim" ? "" : (a === "nao" ? " pt--open" : " pt--check");
      var stateTxt = a === "sim" ? "Em ordem, segundo a sua resposta" : (a === "nao" ? "Em aberto" : "A verificar");
      html += '<li class="pt' + cls + '"><div class="pt__top"><span class="pt__name">' + (i + 1) + '. ' + esc(q.topic) + '</span>' +
        '<span class="pt__state">' + stateTxt + '</span></div>' +
        '<p class="pt__q">' + esc(q.q) + '</p>' +
        '<p class="pt__a">Sua resposta: <strong>' + LABEL[a] + '</strong></p>';
      if (a === "nao_sei") html += '<p class="pt__extra">Leve esta pergunta a quem responde tecnicamente pela planta: SESMT, técnico de segurança ou gerente de manutenção.</p>';
      if (a !== "sim" && ATUA_ON) html += '<p class="pt__extra"><strong>Como a Previsio atua neste ponto:</strong> ' + q.atua.map(esc).join(" · ") + '</p>';
      html += '</li>';
    });
    html += '</ol>';

    html += '<div class="res__notes">' +
      '<p>Não há ordem de prioridade entre os pontos: priorizar é trabalho da apreciação de risco.</p>' +
      '<p>O checklist aponta indícios. O diagnóstico de cada máquina é a apreciação de risco, um serviço contratado.</p>' +
      '<p><button type="button" class="res__print" id="print-btn">Imprimir ou salvar este resultado</button></p></div>';

    root.innerHTML = html;

    document.getElementById("wa-btn").addEventListener("click", function () {
      track("whatsapp_click", { event_id: lead.event_id, resultado: lead.resultado });
    });
    document.getElementById("print-btn").addEventListener("click", function () {
      track("resultado_impresso");
      window.print();
    });

    /* ---- conversão principal: só com o servidor tendo confirmado, uma vez por event_id ---- */
    if (lead.status === "enviado") {
      var done = sGet("localStorage", "pv_conv") || [];
      if (done.indexOf(lead.event_id) === -1) {
        var phone = digits(lead.telefone);
        if (phone.length <= 11) phone = "55" + phone;
        Promise.all([sha256(lead.email), sha256(phone)]).then(function (h) {
          track("inscricao_confirmada", {
            event_id: lead.event_id,
            maquinas: lead.maquinas,
            pontos_em_aberto: lead.pontos_em_aberto,
            resultado: lead.resultado,
            lead_score: lead.lead_score,
            user_data: { em: h[0], ph: h[1] }
          });
          done.push(lead.event_id);
          sSet("localStorage", "pv_conv", done.slice(-20));
        });
      }
    }
  }
})();
