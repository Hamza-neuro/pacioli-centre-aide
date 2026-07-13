# Pacioli — Centre d'aide

Site statique du centre d'aide client de Pacioli, hébergé gratuitement sur GitHub Pages.

**URL publique :** https://hamza-neuro.github.io/pacioli-centre-aide/

## Contenu

8 articles répartis en 4 catégories (Prise en main, Traitement des pièces, Comptabilité, Administration),
avec une recherche client instantanée côté navigateur.

## Modifier le contenu

Tout le texte des articles vit dans un seul fichier : [`articles-data.js`](articles-data.js).
Après modification, régénère les pages HTML :

```bash
node build.js
```

Puis commit + push : GitHub Pages se met à jour automatiquement en ~1 minute.

## Structure

- `articles-data.js` — source unique des 8 articles (texte)
- `build.js` — génère `index.html` + `articles/*.html` + l'index de recherche
- `assets/style.css` — thème Pacioli
- `assets/search.js` — recherche côté client
- `.nojekyll` — sert les fichiers tels quels (pas de traitement Jekyll)
