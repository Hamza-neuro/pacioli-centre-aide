const fs = require("fs");
const path = require("path");
const articles = require("./articles-data.js");

const OUT = __dirname;
const ART_DIR = path.join(OUT, "articles");
fs.mkdirSync(ART_DIR, { recursive: true });
// On repart d'un dossier vide : un article renommé laisserait sinon son ancienne
// page en ligne, orpheline et introuvable depuis le sommaire.
for (const f of fs.readdirSync(ART_DIR)) {
  if (f.endsWith(".html")) fs.unlinkSync(path.join(ART_DIR, f));
}

// ---------- helpers ----------
const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

function slugify(title) {
  // "2. Déposer des pièces" -> "02-deposer-des-pieces"
  const m = title.match(/^(\d+)\.\s*(.*)$/);
  const num = m ? m[1].padStart(2, "0") : "00";
  const rest = (m ? m[2] : title)
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return `${num}-${rest}`;
}
function cleanTitle(title) {
  return title.replace(/^\d+\.\s*/, "");
}

// category assignment
const CATEGORIES = [
  { id: "prise-en-main", name: "Prise en main", icon: "🚀", desc: "Découvrir Pacioli, les profils et le suivi du contrat.", titles: ["1.", "2."] },
  { id: "dossiers", name: "Dossiers clients", icon: "📁", desc: "Créer et retrouver vos dossiers.", titles: ["3."] },
  { id: "pieces", name: "Traitement des pièces", icon: "📄", desc: "Déposer les documents et saisir les écritures.", titles: ["4.", "5."] },
  { id: "comptabilite", name: "Comptabilité", icon: "📊", desc: "Journal, comptes, lettrage et export.", titles: ["6.", "7.", "8.", "9."] },
  { id: "administration", name: "Administration", icon: "⚙️", desc: "Paramétrer un dossier et le cabinet.", titles: ["10.", "11."] },
];
function categoryOf(article) {
  return CATEGORIES.find((c) => c.titles.some((t) => article.title.startsWith(t)));
}

// enrich articles
const items = articles.map((a) => ({
  ...a,
  slug: slugify(a.title),
  clean: cleanTitle(a.title),
  num: a.title.match(/^(\d+)/)[1],
  cat: categoryOf(a),
}));

// ---------- content renderers ----------
function ul(arr) {
  return `<ul>${arr.map((t) => `<li>${inline(t)}</li>`).join("")}</ul>`;
}
function ol(arr) {
  return `<ol>${arr.map((t) => `<li>${inline(t)}</li>`).join("")}</ol>`;
}
// bold the "Label :" prefix in field/rule strings
function inline(t) {
  const s = esc(t);
  const m = s.match(/^([^:]{2,40}) : (.*)$/);
  if (m) return `<strong>${m[1]}</strong> : ${m[2]}`;
  return s;
}
function buttonsTable(rows) {
  return `<div class="table-wrap"><table><thead><tr><th>Bouton / Icône</th><th>Action</th></tr></thead><tbody>${
    rows.map((r) => `<tr><td class="btn-cell">${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("")
  }</tbody></table></div>`;
}
const CALLOUT = {
  conseil: { cls: "c-tip", label: "Astuce" },
  info: { cls: "c-info", label: "Bon à savoir" },
  attn: { cls: "c-warn", label: "Attention" },
  alerte: { cls: "c-alert", label: "Alerte" },
};
function callout(kind, text) {
  const c = CALLOUT[kind];
  return `<div class="callout ${c.cls}"><span class="callout-label">${c.label}</span><p>${esc(text)}</p></div>`;
}
function faqBlock(faq) {
  return faq.map(([q, a]) =>
    `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`
  ).join("");
}

/** Capture d'écran légendée. Le nom renvoie à un fichier de assets/img. */
function figure(shot, rel) {
  const [nom, legende] = shot;
  return `<figure class="shot">
    <img src="${rel}assets/img/${nom}.png" alt="${esc(legende)}" loading="lazy">
    <figcaption>${esc(legende)}</figcaption>
  </figure>`;
}

function section(sec, rel) {
  let h = `<h2>${esc(sec.h2)}</h2>`;
  if (sec.text) h += `<p>${esc(sec.text)}</p>`;
  if (sec.shot) h += figure(sec.shot, rel);
  if (sec.bullets) h += ul(sec.bullets);
  return h;
}

function articleBody(a, rel = "../") {
  let h = "";
  if (a.tagline) h += `<p class="tagline">${esc(a.tagline)}</p>`;
  h += (a.intro || []).map((t) => `<p>${esc(t)}</p>`).join("");
  if (a.shot) h += figure(a.shot, rel);
  h += (a.sections || []).map((sec) => section(sec, rel)).join("");
  if (a.callouts) h += a.callouts.map((c) => callout(c[0], c[1])).join("");
  return h;
}

// plain text for search index
function searchText(a) {
  const parts = [a.clean, a.tagline, ...(a.intro || [])];
  for (const sec of a.sections || []) {
    parts.push(sec.h2);
    if (sec.text) parts.push(sec.text);
    if (sec.bullets) parts.push(...sec.bullets);
  }
  if (a.callouts) a.callouts.forEach((c) => parts.push(c[1]));
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

// ---------- page shell ----------
function shell({ title, description, body, rel, active }) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%232E6B5E'/><text x='50' y='70' font-size='60' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold'>P</text></svg>">
<link rel="stylesheet" href="${rel}assets/style.css">
</head>
<body>
<header class="site-header">
  <a class="brand" href="${rel}index.html">
    <span class="brand-mark">P</span>
    <span class="brand-text">Pacioli<small>Centre d'aide</small></span>
  </a>
  <div class="header-search">
    <input type="search" id="search" placeholder="Rechercher un article…" autocomplete="off" aria-label="Rechercher">
    <div id="search-results" class="search-results" hidden></div>
  </div>
</header>
<main>${body}</main>
<footer class="site-footer">
  <p>Pacioli — Centre d'aide · Automatisation de la saisie comptable</p>
  <p class="muted">Besoin d'aide supplémentaire ? Contactez votre interlocuteur Pacioli.</p>
</footer>
<script src="${rel}assets/search.js"></script>
</body>
</html>`;
}

// ---------- home ----------
function homePage() {
  const cats = CATEGORIES.map((c) => {
    const arts = items.filter((i) => i.cat && i.cat.id === c.id);
    return `<section class="cat-block">
      <div class="cat-head"><span class="cat-icon">${c.icon}</span><div><h2>${esc(c.name)}</h2><p class="muted">${esc(c.desc)}</p></div></div>
      <ul class="art-list">${
        arts.map((a) => `<li><a href="articles/${a.slug}.html"><span class="art-title">${esc(a.clean)}</span><span class="art-sub">${esc(a.tagline || "")}</span></a></li>`).join("")
      }</ul>
    </section>`;
  }).join("");

  const body = `
  <section class="hero">
    <h1>Comment pouvons-nous vous aider ?</h1>
    <p>Guides pratiques pour tirer le meilleur de Pacioli — dépôt de pièces, écritures comptables et export.</p>
    <div class="hero-search">
      <input type="search" id="hero-search-input" placeholder="Rechercher : dépôt, journal, export, TVA…" autocomplete="off" aria-label="Rechercher">
      <div id="hero-search-results" class="search-results" hidden></div>
    </div>
    <div class="hero-tags">
      ${items.map((a) => `<a class="tag" href="articles/${a.slug}.html">${esc(a.clean)}</a>`).join("")}
    </div>
  </section>
  <div class="cat-grid">${cats}</div>`;

  return shell({
    title: "Pacioli — Centre d'aide",
    description: "Centre d'aide Pacioli : guides pratiques pour la saisie comptable automatisée.",
    body, rel: "", active: "home",
  });
}

// ---------- article page ----------
function articlePage(a, prev, next) {
  const crumbs = `<nav class="crumbs"><a href="../index.html">Centre d'aide</a> <span>/</span> <a href="../index.html#${a.cat.id}">${esc(a.cat.name)}</a></nav>`;
  const nav = `<nav class="art-nav">
    ${prev ? `<a class="prev" href="${prev.slug}.html"><small>Précédent</small>${esc(prev.clean)}</a>` : "<span></span>"}
    ${next ? `<a class="next" href="${next.slug}.html"><small>Suivant</small>${esc(next.clean)}</a>` : "<span></span>"}
  </nav>`;
  const body = `<article class="article">
    ${crumbs}
    <span class="cat-badge">${a.cat.icon} ${esc(a.cat.name)}</span>
    <h1>${esc(a.clean)}</h1>
    ${articleBody(a, "../")}
    ${nav}
  </article>`;
  return shell({
    title: `${a.clean} — Pacioli Centre d'aide`,
    description: a.tagline || a.brief[0].slice(0, 150),
    body, rel: "../", active: a.slug,
  });
}

// ---------- write files ----------
fs.writeFileSync(path.join(OUT, "index.html"), homePage());

items.forEach((a, i) => {
  const prev = i > 0 ? items[i - 1] : null;
  const next = i < items.length - 1 ? items[i + 1] : null;
  fs.writeFileSync(path.join(ART_DIR, `${a.slug}.html`), articlePage(a, prev, next));
});

// search index
const index = items.map((a) => ({
  t: a.clean, s: a.tagline || "", u: `articles/${a.slug}.html`,
  c: a.cat.name, body: searchText(a).toLowerCase(),
}));
const assetsDir = path.join(OUT, "assets");
fs.mkdirSync(assetsDir, { recursive: true });
fs.writeFileSync(path.join(assetsDir, "search-index.json"), JSON.stringify(index));

// .nojekyll so GitHub Pages serves as-is
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");

console.log("Site built:", items.length + 1, "pages +", index.length, "search entries");
