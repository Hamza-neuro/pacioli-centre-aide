# Pacioli Compta — Centre d'aide

Site statique du centre d'aide de **Pacioli Compta** (dossiers clients, dépôt de pièces,
journal comptable, lettrage, export des écritures), hébergé sur GitHub Pages.

**URL publique :** https://hamza-neuro.github.io/pacioli-centre-aide/

## Contenu

11 articles illustrés par des captures réelles de l'application :
prise en main, consommation du contrat, dossiers clients, dépôt de pièces,
saisie d'écriture, journal, plan comptable, lettrage & justificatifs, export,
paramètres du dossier et du cabinet.

Page unique (`index.html`) avec navigation latérale, captures dans `img/`.

Même gabarit que le centre d'aide Pacioli Entreprise.

## Mettre à jour

Le contenu est écrit directement dans `index.html` : un `<article>` par sujet,
avec son entrée correspondante dans la barre latérale.

Les captures se prennent sur l'application à 1440 px de large, puis sont réduites
et converties en palette indexée — une capture d'interface compte peu de teintes,
ce qui divise le poids par trois sans perte visible.
