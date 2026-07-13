(function () {
  "use strict";
  // Resolve index path relative to this script (works from / and /articles/)
  var script = document.currentScript;
  var base = script.src.replace(/assets\/search\.js.*$/, "");
  var INDEX = [];
  var ready = fetch(base + "assets/search-index.json")
    .then(function (r) { return r.json(); })
    .then(function (data) { INDEX = data; })
    .catch(function () { INDEX = []; });

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function search(q) {
    var nq = norm(q).trim();
    if (nq.length < 2) return [];
    var terms = nq.split(/\s+/);
    return INDEX.map(function (item) {
      var hay = norm(item.t + " " + item.s + " " + item.body);
      var score = 0, ok = true;
      terms.forEach(function (t) {
        var inTitle = norm(item.t).indexOf(t) !== -1;
        var inBody = hay.indexOf(t) !== -1;
        if (!inBody) ok = false;
        if (inTitle) score += 10;
        if (inBody) score += 1;
      });
      return ok ? { item: item, score: score } : null;
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 8);
  }

  function wire(input, box) {
    if (!input || !box) return;
    var active = -1, current = [];

    function render(results) {
      current = results; active = -1;
      if (!input.value.trim() || input.value.trim().length < 2) { box.hidden = true; return; }
      if (!results.length) {
        box.innerHTML = '<div class="sr-empty">Aucun article trouvé. Essayez un autre mot-clé.</div>';
        box.hidden = false; return;
      }
      box.innerHTML = results.map(function (r, i) {
        var it = r.item;
        return '<a href="' + base + it.u + '" data-i="' + i + '">' +
          '<span class="sr-title">' + it.t + '</span>' +
          '<span class="sr-cat">' + it.c + '</span>' +
          (it.s ? '<div class="sr-sub">' + it.s + '</div>' : '') + '</a>';
      }).join("");
      box.hidden = false;
    }
    function highlight() {
      var links = box.querySelectorAll("a");
      links.forEach(function (l, i) { l.classList.toggle("active", i === active); });
    }
    input.addEventListener("input", function () {
      ready.then(function () { render(search(input.value)); });
    });
    input.addEventListener("keydown", function (e) {
      var links = box.querySelectorAll("a");
      if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(active + 1, links.length - 1); highlight(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(active - 1, 0); highlight(); }
      else if (e.key === "Enter") {
        if (active >= 0 && links[active]) { window.location.href = links[active].getAttribute("href"); }
        else if (current.length) { window.location.href = base + current[0].item.u; }
      } else if (e.key === "Escape") { box.hidden = true; }
    });
    document.addEventListener("click", function (e) {
      if (!box.contains(e.target) && e.target !== input) box.hidden = true;
    });
    input.addEventListener("focus", function () {
      if (current.length) box.hidden = false;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wire(document.getElementById("search"), document.getElementById("search-results"));
    wire(document.getElementById("hero-search-input"), document.getElementById("hero-search-results"));
  });
})();
