/* Previsio LP-01 — interações (ano, máscara, validação, modal, envio, WhatsApp, eventos) */
(function () {
  "use strict";

  var CFG = window.PREVISIO_CFG || {};
  var WA = (CFG.WHATSAPP || "555134669601").replace(/\D/g, "");
  var ENDPOINT = CFG.FORM_ENDPOINT || "";

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- rastreamento (dataLayer + gtag, se houver) ---- */
  function track(ev, d) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: ev }, d || {}));
      if (typeof window.gtag === "function") window.gtag("event", ev, d || {});
    } catch (e) {}
  }
  document.querySelectorAll("[data-evt]").forEach(function (el) {
    el.addEventListener("click", function () { track(el.getAttribute("data-evt")); });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener("click", function () { track("click_telefone"); });
  });

  /* ---- preenche os links estáticos de WhatsApp com a mensagem padrão (fonte única) ---- */
  var WA_MSG = CFG.WHATSAPP_MSG || "Olá! Quero um orçamento de adequação NR-12 para as minhas máquinas.";
  var WA_HREF = "https://wa.me/" + WA + "?text=" + encodeURIComponent(WA_MSG);
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
    if (a.id === "modal-wa") return; /* o do modal é preenchido com os dados do lead */
    a.href = WA_HREF;
  });

  /* ---- atribuição: captura UTMs / gclid / fbclid da URL ---- */
  function attribution() {
    var out = {}, p;
    try { p = new URLSearchParams(window.location.search); } catch (e) { return out; }
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]
      .forEach(function (k) { var v = p.get(k); if (v) out[k] = v; });
    return out;
  }

  /* ---- máscara de telefone BR ---- */
  function maskPhone(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (v.length <= 10) return v.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, function (_, a, b, c) {
      var o = ""; if (a) o = "(" + a + (a.length === 2 ? ") " : ""); if (b) o += b + (c ? "-" : ""); if (c) o += c; return o;
    });
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
  document.querySelectorAll('input[type="tel"]').forEach(function (inp) {
    inp.addEventListener("input", function () { inp.value = maskPhone(inp.value); });
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

  /* ---- mensagem do WhatsApp (pré-preenchida) ---- */
  function waURL(d) {
    d = d || {};
    var l = ["Olá! Quero um orçamento de adequação NR-12 para as minhas máquinas.",
      d.nome ? "Nome: " + d.nome : "", d.empresa ? "Empresa: " + d.empresa : "",
      d.telefone ? "WhatsApp: " + d.telefone : "", d.email ? "E-mail: " + d.email : "",
      d.cargo ? "Cargo: " + d.cargo : "", d.maquinas ? "Nº de máquinas: " + d.maquinas : "",
      d.cidade ? "Cidade: " + d.cidade : ""
    ].filter(Boolean);
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(l.join("\n"));
  }

  /* ---- modal ---- */
  var modal = document.getElementById("modal"),
      modalWa = document.getElementById("modal-wa"),
      modalX = document.getElementById("modal-x"),
      modalX2 = document.getElementById("modal-x2");
  function openModal(u) { if (modalWa && u) modalWa.href = u; if (modal) modal.hidden = false; }
  function closeModal() { if (modal) modal.hidden = true; }
  if (modalX) modalX.addEventListener("click", closeModal);
  if (modalX2) modalX2.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---- envio do formulário ---- */
  var form = document.getElementById("lead-form");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate(form)) return;

    var d = {};
    new FormData(form).forEach(function (v, k) { d[k] = typeof v === "string" ? v.trim() : v; });
    var payload = Object.assign({}, d, attribution(), {
      origem: "lp-01-nr12",
      pagina: location.href,
      enviado_em: new Date().toISOString()
    });

    track("gerar_lead", { form_id: "lead-form" });

    var btn = form.querySelector('button[type="submit"]');
    var done = false;
    function finish() { if (done) return; done = true; openModal(waURL(d)); form.reset(); if (btn) { btn.disabled = false; btn.removeAttribute("aria-busy"); } }

    if (ENDPOINT) {
      if (btn) { btn.disabled = true; btn.setAttribute("aria-busy", "true"); }
      var ctrl;
      try { ctrl = new AbortController(); setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, 9000); } catch (e) {}
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined
      }).then(function () { finish(); })
        .catch(function () { finish(); }); // em falha de rede, ainda oferece o WhatsApp
    } else {
      // TODO(cliente): defina FORM_ENDPOINT em window.PREVISIO_CFG para enviar ao CRM/FunnelsFlow.
      finish();
    }
  });
})();
