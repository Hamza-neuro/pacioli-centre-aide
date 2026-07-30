# Pacioli Compta — Centre d'aide

Site statique du centre d'aide client, hébergé sur GitHub Pages.

**URL publique :** https://hamza-neuro.github.io/pacioli-centre-aide/

## Contenu

11 articles répartis en 5 catégories (Prise en main, Dossiers clients, Traitement des
pièces, Comptabilité, Administration), chacun illustré par une capture de l'application,
avec une recherche instantanée côté navigateur.

La mise en forme reprend celle du centre d'aide Pacioli Entreprise : introduction courte,
capture de l'écran concerné, sections en listes d'actions, puis une astuce ou un point de
vigilance.

Seules les fonctions vécues par l'utilisateur sont documentées. Les outils internes
(console d'intégration, files de traitement) en sont exclus.

## Modifier le contenu

Tout le texte vit dans un seul fichier : [`articles-data.js`](articles-data.js).

```bash
node build.js
```

Puis commit + push : GitHub Pages se met à jour automatiquement en ~1 minute.

## Mettre à jour les captures

Les captures sont dans `assets/img`, nommées d'après la clé `shot` de chaque article.
Elles sont prises à 1440 px de large sur l'application, puis réduites à 1760 px et
converties en palette indexée — une capture d'interface compte peu de teintes, ce qui
divise le poids par trois sans perte visible.

## Structure

- `articles-data.js` — source unique des articles
- `build.js` — génère `index.html`, `articles/*.html` et l'index de recherche
- `assets/img/` — captures d'écran
- `assets/style.css` — thème Pacioli
- `assets/search.js` — recherche côté client
- `.nojekyll` — sert les fichiers tels quels
