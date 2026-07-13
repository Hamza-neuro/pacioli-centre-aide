module.exports = [
  {
    title: "1. Bien démarrer avec Pacioli",
    tagline: "Comprendre la plateforme, les profils et la navigation.",
    brief: [
      "Pacioli est une solution SaaS qui automatise la saisie comptable. Grâce à la reconnaissance optique et à l'intelligence artificielle, la plateforme extrait automatiquement les données des factures d'achat, factures de vente, notes de frais et relevés bancaires, détecte les doublons et génère des écritures conformes prêtes à l'export.",
      "L'objectif : supprimer la saisie manuelle fastidieuse et fiabiliser la production comptable.",
    ],
    fields: [
      "Profil Administrateur (cabinet) : contrôle le paramétrage global, crée et affecte les collaborateurs, gère les droits d'accès, configure les contrats et attribue les quotas de chaque dossier.",
      "Profil Collaborateur / Client : utilise la plateforme au quotidien — dépôt de pièces, vérification des écritures générées par l'IA, correction des écritures déséquilibrées et export des journaux.",
    ],
    steps: [
      "Sur la page d'accueil du cabinet, la barre latérale affiche les options d'administration : Tableau de bord, Gestion du cabinet, Configuration de pièce, Support et Journal d'audit.",
      "Ouvrez un dossier d'entreprise cliente : la barre latérale bascule sur les fonctions du dossier — Dépôt de pièces, Journal comptable, Liste des comptes, Export et Paramètres du dossier.",
      "Utilisez le bouton de retour en haut de la barre latérale pour fermer le dossier et revenir à la vue globale du cabinet à tout moment.",
    ],
    stepsTitle: "Naviguer dans l'interface",
    callouts: [
      ["conseil", "La barre latérale s'adapte au contexte : ses options changent selon que vous êtes au niveau du cabinet ou dans un dossier client. Si une option ne s'affiche pas, vérifiez d'abord dans quel espace vous vous trouvez."],
    ],
  },
  {
    title: "2. Déposer des pièces",
    tagline: "Numériser factures, notes de frais et relevés pour analyse par l'IA.",
    brief: [
      "L'écran de dépôt de pièces centralise la collecte des documents comptables. Vous téléversez vos documents selon quatre catégories (Factures d'achat, Factures de vente, Notes de frais, Relevés bancaires) ; l'IA extrait les montants, détecte les doublons et pré-génère les écritures.",
      "L'interface se compose de trois zones : le titre avec un badge du nombre total de documents ; les quatre zones de téléversement ; et le tableau des documents déposés avec leur statut de traitement.",
    ],
    access: ["Ouvrez un dossier client depuis la liste des dossiers du cabinet, puis cliquez sur « Dépôt de pièces » dans le menu latéral."],
    buttons: [
      ["Zone de téléversement (nuage)", "Cliquez sur l'une des quatre zones colorées pour importer un fichier de ce type."],
      ["Renvoyer (flèche circulaire)", "Renvoie à l'IA un fichier dont l'analyse a échoué ou a été rejetée."],
      ["Voir les détails (œil)", "Ouvre une fenêtre détaillant les données extraites et les écritures générées."],
      ["Comparer les fichiers (deux feuilles)", "En cas de doublon, compare côte à côte la pièce dupliquée et l'originale."],
      ["Supprimer la sélection (corbeille)", "Barre flottante : supprime les fichiers cochés."],
      ["Télécharger les originaux", "Barre flottante : télécharge les fichiers d'origine sur votre ordinateur."],
    ],
    fields: [
      "Champ de recherche : filtre les documents par nom de fichier.",
      "Statut : filtre par état (Téléchargé, En traitement, Traité, Rejeté, Dupliqué).",
      "Type : filtre par catégorie (Factures d'achat, Factures de vente, Notes de frais, Relevés bancaires).",
      "Filtre Doublons : affiche ou masque spécifiquement les fichiers détectés comme doublons.",
    ],
    steps: [
      "Identifiez la catégorie du document à importer (ex. Factures d'achat).",
      "Glissez-déposez le fichier sur la case correspondante, ou cliquez pour le sélectionner sur votre ordinateur.",
      "Le fichier apparaît dans le tableau au statut « En cours » ; l'IA procède à la lecture automatique.",
      "Une fois l'analyse terminée, le statut passe à « Traité ». Cliquez sur l'icône œil pour vérifier les montants et les écritures pré-générées.",
      "Si le document est détecté comme doublon, comparez-le à l'original et utilisez « Forcer le traitement » seulement si vous êtes certain qu'il s'agit d'une facture distincte.",
    ],
    cases: [
      "Téléversement mensuel des factures d'achat reçues par email.",
      "Dépôt de relevés bancaires papier préalablement scannés.",
      "Traitement d'une facture rejetée par erreur comme doublon (même montant et même fournisseur qu'une autre).",
    ],
    rules: [
      "Formats acceptés : PDF, PNG, JPG, JPEG uniquement.",
      "Taille maximale : 5 Mo par document.",
      "Quotas : les relevés bancaires consomment le « Quota Relevés » ; les factures et notes de frais consomment le « Quota Pièces ».",
    ],
    callouts: [
      ["alerte", "Format non pris en charge : seuls .pdf, .png, .jpg et .jpeg sont acceptés. Convertissez votre fichier en image ou PDF standard."],
      ["attn", "Enveloppe de quota épuisée : vous avez consommé toutes les pièces autorisées par votre contrat ; le dépôt est désactivé. Contactez le support commercial pour augmenter votre pack."],
      ["info", "Doublon détecté : les doublons sont automatiquement rejetés et leurs écritures ne sont pas traitées. Cliquez sur « Comparer les fichiers » pour forcer le traitement d'un document légitime."],
      ["conseil", "Pour un taux d'extraction proche de 100 %, veillez à des documents bien cadrés, sans ombres, au texte parfaitement lisible. Évitez les PDF regroupant plusieurs factures."],
    ],
    faq: [
      ["Pourquoi mon fichier est-il marqué « Doublon » ?", "Pacioli analyse le contenu textuel et visuel. Si un document présente des caractéristiques identiques (même émetteur, mêmes montants, même date) à un fichier déjà traité, il est bloqué par sécurité pour éviter de dupliquer la dépense."],
      ["Que se passe-t-il si je supprime un document traité ?", "La suppression entraîne aussi la suppression automatique de toutes les écritures comptables associées dans le Journal comptable."],
    ],
  },
  {
    title: "3. Consulter et corriger le journal comptable",
    tagline: "Contrôler, corriger et équilibrer les écritures avant l'export.",
    brief: [
      "Le journal comptable affiche toutes les écritures générées par l'IA ou saisies manuellement, sous forme de lignes de débit et de crédit. C'est l'outil de contrôle et de validation du collaborateur comptable.",
      "En haut : des indicateurs clés (nombre d'écritures et de lignes, total débit/crédit) et un sélecteur d'exercice. En dessous : un panneau de filtres, le tableau des écritures, et une barre d'actions flottante en bas à droite.",
    ],
    access: ["Ouvrez le dossier de l'entreprise cliente, puis cliquez sur « Journal comptable » dans la barre latérale gauche."],
    buttons: [
      ["Sélecteur d'exercice", "Choisit l'exercice comptable à afficher et charge les dates correspondantes."],
      ["Modifier (crayon)", "Modifie la date, le libellé, le débit ou le crédit de l'écriture sélectionnée."],
      ["Changer d'imputation (flèches circulaires)", "Réaffecte la ligne sélectionnée à un autre compte comptable."],
      ["Supprimer (corbeille)", "Supprime définitivement les écritures sélectionnées après confirmation."],
    ],
    fields: [
      "Date début / Date fin : filtre sur une plage temporelle au sein de l'exercice.",
      "Journal : filtre par journal (Achats, Ventes, Caisse, etc.).",
      "Compte : filtre les lignes d'un numéro de compte donné.",
      "Libellé : recherche textuelle dans la description des écritures.",
      "Débit / Crédit : filtre sur des montants spécifiques.",
    ],
    steps: [
      "Sélectionnez l'exercice comptable concerné en haut de l'écran.",
      "Recherchez l'écriture à l'aide des filtres (ex. le numéro de compte actuel).",
      "Cochez la case de la ligne à modifier.",
      "Cliquez sur le bouton de réimputation (flèches circulaires) dans le panneau flottant en bas à droite.",
      "Recherchez le nouveau compte, sélectionnez-le et cliquez sur « Enregistrer ». La modification est appliquée instantanément.",
    ],
    stepsTitle: "Corriger une imputation erronée",
    cases: [
      "Correction des comptes d'attente (compte 471) vers les bons comptes de charges ou fournisseurs.",
      "Suppression d'écritures générées par erreur à la suite d'un mauvais dépôt.",
    ],
    rules: [
      "Toute écriture doit respecter la partie double : la somme des débits doit égaler la somme des crédits.",
      "Les écritures déséquilibrées restent visibles pour vous permettre de travailler, mais corrigez-les au plus vite pour éviter des écarts à l'export.",
    ],
    callouts: [
      ["alerte", "Déséquilibre détecté : alerte rouge en haut de l'écran si les débits n'égalent pas les crédits sur une même pièce. Éditez l'écriture pour l'équilibrer ou ajoutez une ligne de contrepartie."],
      ["attn", "Vous ne pouvez modifier qu'une seule écriture à la fois : ce message apparaît si plusieurs lignes distinctes sont cochées au moment de cliquer sur Modifier."],
      ["conseil", "Filtrez régulièrement par journal (« Achats » ou « Ventes ») pour valider vos écritures par blocs cohérents et faciliter la révision de fin de mois."],
    ],
    faq: [
      ["Comment savoir quel document a généré une écriture ?", "Le nom ou le numéro du fichier d'origine figure généralement dans la colonne « N° Pièce ». Vous pouvez retrouver la pièce dans l'écran de dépôt pour comparer les données."],
    ],
  },
  {
    title: "4. Gérer la liste des comptes",
    tagline: "Administrer le plan comptable du dossier client.",
    brief: [
      "Cet écran permet d'administrer le plan comptable propre au dossier sélectionné : créer des comptes, modifier leur libellé ou les supprimer. Il évite l'utilisation de comptes inexistants en encadrant les propositions lors de la saisie.",
      "L'écran affiche une barre de recherche en haut à gauche, un bouton « Nouveau compte » en haut à droite, et le tableau des comptes avec des actions rapides sur chaque ligne.",
    ],
    access: ["Dans le menu latéral du dossier ouvert, cliquez sur « Liste des comptes »."],
    buttons: [
      ["Nouveau compte (+)", "Crée un compte en renseignant son numéro et son libellé."],
      ["Modifier (crayon)", "Modifie le libellé du compte de la ligne concernée."],
      ["Supprimer (poubelle)", "Supprime un ou plusieurs comptes sélectionnés."],
    ],
    fields: [
      "Rechercher un compte : filtre instantanément le tableau par numéro ou libellé.",
      "Champ Compte (modale) : code numérique du compte (ex. 611100).",
      "Champ Libellé (modale) : désignation du compte (ex. Achats de marchandises).",
    ],
    steps: [
      "Cliquez sur « Nouveau compte » en haut à droite.",
      "Saisissez le numéro de compte (ex. 441100).",
      "Saisissez le libellé correspondant (ex. Fournisseurs).",
      "Cliquez sur « Créer ». Le compte est immédiatement disponible pour vos écritures.",
    ],
    stepsTitle: "Ajouter un compte",
    cases: [
      "Création d'un compte de tiers pour un nouveau fournisseur important.",
      "Modification de l'intitulé d'un compte de charge pour le rendre plus explicite.",
    ],
    rules: [
      "Un compte utilisé dans au moins une écriture (équilibrée ou non) ne peut pas être supprimé : réimputez ou supprimez d'abord ces écritures.",
    ],
    callouts: [
      ["attn", "Veuillez remplir tous les champs obligatoires : apparaît si vous tentez d'enregistrer un compte sans numéro ou sans libellé."],
      ["alerte", "Suppression impossible : un ou plusieurs comptes contiennent des écritures. Le système bloque la suppression pour préserver l'intégrité comptable."],
      ["conseil", "Utilisez des numéros de compte standardisés conformes à votre plan comptable national : l'IA apprend des structures déjà enregistrées dans ce tableau."],
    ],
    faq: [
      ["Puis-je modifier le numéro d'un compte existant ?", "Non, le numéro est un identifiant unique. En cas d'erreur, supprimez le compte et recréez-le avec le bon numéro."],
    ],
  },
  {
    title: "5. Paramétrer le cabinet et les collaborateurs",
    tagline: "Identité du cabinet, utilisateurs, rôles et suivi des contrats.",
    brief: [
      "Ce panneau d'administration permet de mettre à jour le nom du cabinet, d'inviter des collaborateurs avec des rôles précis, de suivre la consommation des pièces et de gérer les packs contractuels.",
      "L'écran se compose de trois sections : en haut le nom du cabinet ; au centre la liste et la création des collaborateurs ; en bas le récapitulatif du contrat actif avec le suivi de consommation (pièces et pages de relevés).",
    ],
    access: ["Vous devez disposer du rôle Administrateur. Cliquez sur « Gestion de cabinet » ou « Paramètres du cabinet » dans la barre latérale d'administration (aucun dossier client ouvert)."],
    buttons: [
      ["Enregistrer le nom du cabinet", "Sauvegarde le nom modifié du cabinet."],
      ["Inviter un membre / Ajouter", "Ajoute un nouveau collaborateur au cabinet."],
      ["Modifier (crayon)", "Modifie les informations ou le rôle d'un membre."],
      ["Mot de passe (cadenas)", "Réinitialise le mot de passe d'accès d'un collaborateur."],
      ["Désactiver (verrou)", "Suspend temporairement l'accès sans supprimer les données."],
      ["Supprimer (poubelle)", "Supprime définitivement le compte d'un collaborateur."],
    ],
    fields: [
      "Nom du cabinet : appellation officielle visible par les clients.",
      "Formulaire collaborateur : Nom, Email, Mot de passe requis pour créer un compte.",
      "Rôle : niveau d'autorisation (Administrateur ou Utilisateur).",
    ],
    steps: [
      "Accédez à la section « Gérer les collaborateurs ».",
      "Saisissez le nom complet du collaborateur.",
      "Sélectionnez son rôle (ex. Utilisateur) dans la liste déroulante.",
      "Cliquez sur « Ajouter ». Le collaborateur reçoit ses accès et apparaît dans le tableau.",
    ],
    stepsTitle: "Ajouter un collaborateur",
    cases: [
      "Mise à jour des coordonnées et de la désignation commerciale du cabinet.",
      "Intégration d'un comptable stagiaire avec un profil Utilisateur.",
      "Révocation immédiate des accès d'un collaborateur ayant quitté le cabinet.",
    ],
    rules: [
      "Seuls les Administrateurs peuvent modifier le nom du cabinet, inviter des membres ou changer les droits d'accès.",
      "Un profil Utilisateur dispose d'une vue en lecture seule sur cette page.",
    ],
    callouts: [
      ["attn", "Format d'email invalide : l'adresse saisie ne respecte pas la structure standard (ex. nom@domaine.com)."],
      ["alerte", "Le nom / mot de passe est obligatoire : la validation du formulaire est bloquée si l'un de ces champs est vide."],
      ["conseil", "Par sécurité, attribuez le rôle « Utilisateur » par défaut aux collaborateurs opérationnels et réservez « Administrateur » aux associés ou responsables."],
    ],
    faq: [
      ["Que faire si un collaborateur a oublié son mot de passe ?", "En tant qu'administrateur, réinitialisez-le en cliquant sur l'icône cadenas sur sa ligne dans le tableau des collaborateurs."],
    ],
  },
  {
    title: "6. Paramétrer un dossier client",
    tagline: "Informations légales, exercices, journaux et import d'historique.",
    brief: [
      "Cette page regroupe la configuration structurelle et comptable d'une entreprise cliente : informations légales (dont le numéro ICE), devise et décimales, exercices fiscaux, journaux comptables, et import des fichiers d'historique (balance ou FEC) pour paramétrer l'IA.",
    ],
    access: ["Ouvrez le dossier de l'entreprise, puis cliquez sur « Paramètres du dossier » dans le menu latéral gauche."],
    fields: [
      "1. Téléchargement d'historique : zone de dépôt pour importer les fichiers de balance ou FEC.",
      "2. Informations principales : nom, ICE, activité, adresse, ville, téléphone et précision décimale.",
      "3. Gestion des exercices comptables : tableau des exercices ouverts et formulaire d'ajout.",
      "4. Gestion des journaux : tableau des journaux actifs (Achats, Ventes, Caisse, Banques…) avec édition.",
    ],
    buttons: [
      ["Soumettre à l'IA (historique)", "Déclenche l'analyse du fichier d'historique importé."],
      ["Ajouter un exercice (+)", "Ajoute une nouvelle période d'exercice comptable."],
      ["Ajouter un journal (+)", "Ajoute un nouveau journal au dossier."],
      ["Modifier (crayon)", "Édite les dates d'un exercice ou le nom d'un journal."],
      ["Supprimer (poubelle)", "Supprime un exercice ou un journal non utilisé."],
    ],
    steps: [
      "Accédez à la section « Informations principales ».",
      "Modifiez le champ souhaité (ex. l'adresse email ou le téléphone).",
      "Cliquez en dehors du champ : le système enregistre automatiquement et affiche un message de succès vert.",
    ],
    stepsTitle: "Modifier les informations d'une entreprise",
    cases: [
      "Ouverture d'un nouvel exercice comptable pour l'année à venir.",
      "Création d'un journal de banque pour un nouveau compte bancaire.",
      "Import d'un FEC de l'année précédente pour pré-entraîner l'IA aux habitudes d'imputation.",
    ],
    rules: [
      "Téléphone et email doivent respecter des formats valides.",
      "La précision décimale est un entier compris entre 0 et 10.",
      "Import d'historique : CSV ou XLSX uniquement, 5 Mo maximum.",
    ],
    callouts: [
      ["alerte", "La date de début doit être antérieure à la date de fin d'un exercice."],
      ["alerte", "Conflit de dates : les dates d'un nouvel exercice chevauchent une période déjà enregistrée."],
      ["attn", "Il existe déjà un journal portant ce nom : deux journaux identiques sont interdits dans le dossier."],
      ["attn", "La taille du fichier dépasse 5 Mo (import d'historique)."],
      ["conseil", "Renseignez soigneusement l'ICE : l'IA identifie ainsi automatiquement si le dossier est l'émetteur (facture de vente) ou le destinataire (facture d'achat)."],
    ],
    faq: [
      ["Où est le bouton d'enregistrement du formulaire société ?", "Il n'y en a pas : le formulaire s'enregistre automatiquement dès que vous cliquez en dehors d'un champ modifié."],
    ],
  },
  {
    title: "7. Exporter les écritures",
    tagline: "Extraire les écritures validées vers votre logiciel de production.",
    brief: [
      "L'écran d'exportation est l'étape finale du traitement. Il filtre les écritures (par date, journal ou exercice) et télécharge un fichier Excel (.xlsx) standardisé, prêt à intégrer dans votre logiciel de comptabilité.",
      "En haut : les filtres et un grand bouton vert d'export. Au centre : le tableau de prévisualisation. En bas à droite : un badge flottant vert affichant le nombre de lignes correspondant aux filtres actifs.",
    ],
    access: ["Depuis le dossier ouvert, cliquez sur « Exporter les écritures » dans le menu latéral gauche."],
    buttons: [
      ["Exporter vers Excel", "Télécharge immédiatement le fichier Excel des écritures prévisualisées."],
      ["Réinitialiser les filtres", "Efface tous les filtres et réaffiche l'intégralité des écritures."],
    ],
    fields: [
      "Date début / Date fin : restreint l'export aux écritures comptabilisées entre ces deux dates.",
      "Journal : exporte uniquement un journal particulier (ex. Achats).",
      "Exercice : cible un exercice comptable spécifique.",
    ],
    steps: [
      "Saisissez la date de début (ex. 01/06/2026) et la date de fin (ex. 30/06/2026).",
      "(Optionnel) Sélectionnez le journal à exporter (ex. Achats).",
      "Vérifiez le nombre de lignes affiché dans le badge flottant en bas à droite.",
      "Cliquez sur « Exporter vers Excel ». Le téléchargement démarre immédiatement.",
    ],
    stepsTitle: "Exporter les écritures d'un mois",
    cases: [
      "Export hebdomadaire du journal de banque pour le rapprochement.",
      "Génération du fichier annuel pour l'expert-comptable ou le commissaire aux comptes.",
    ],
    rules: [
      "Le fichier généré est au format Excel (.xlsx) standardisé.",
      "Les colonnes disposent de filtres automatiques ; les lignes de titre (nom du dossier, date d'export) sont figées pour faciliter la lecture.",
    ],
    callouts: [
      ["attn", "Aucune donnée à exporter : vos filtres ne correspondent à aucune écriture validée. Modifiez les dates ou vérifiez l'exercice sélectionné."],
      ["conseil", "Avant l'export final, vérifiez dans le Journal comptable qu'aucune alerte de déséquilibre n'est présente : des écritures déséquilibrées compliquent l'intégration."],
    ],
    faq: [
      ["Puis-je personnaliser le format des colonnes ?", "Le format est conçu pour être universellement compatible. Pour un import spécifique, réorganisez les colonnes dans le fichier Excel généré avec votre tableur habituel."],
    ],
  },
  {
    title: "8. Saisir ou corriger une écriture manuellement",
    tagline: "Saisie directe et correction chirurgicale, pièce sous les yeux.",
    brief: [
      "L'écran de saisie manuelle réunit la pièce justificative originale et le formulaire d'écriture sur un même écran. Il sert à saisir une écriture de A à Z ou à corriger précisément les données extraites par l'IA (comptes, montants, ventilation de TVA).",
      "L'écran est divisé en deux : à gauche le panneau de saisie (date, journal, conversion de devises, grille des lignes et totaux) ; à droite le visualiseur du document original avec zoom, déplacement et téléchargement. Le bouton d'enregistrement se situe en bas du visualiseur.",
    ],
    access: [
      "Depuis la liste des pièces, double-cliquez sur un document à corriger et cliquez sur le bouton de saisie ;",
      "ou ouvrez une écriture depuis le journal comptable pour modification.",
    ],
    buttons: [
      ["Enregistrer", "Enregistre toutes les modifications et ferme l'écran."],
      ["Ajouter une ligne", "Crée une ligne vide au bas de la grille d'écriture."],
      ["Supprimer (corbeille sur la ligne)", "Supprime la ligne d'écriture correspondante."],
      ["Zoom + / -", "Agrandit ou réduit l'aperçu de la facture."],
      ["Ajuster à l'écran", "Réinitialise le zoom pour afficher tout le document."],
      ["Plein écran (aperçu)", "Masque le panneau de gauche pour afficher la facture en entier."],
    ],
    fields: [
      "Date : date comptable de l'écriture.",
      "Journal : journal récepteur de l'écriture.",
      "Taux de change / Devise : pour les factures en devises étrangères.",
      "Grille (Compte, Libellé, Débit, Crédit) : champs de saisie par ligne, avec auto-complétion des comptes existants.",
    ],
    steps: [
      "Vérifiez la date et le journal sélectionnés dans le premier bloc à gauche.",
      "Repérez les montants HT, TVA et TTC sur le document à droite.",
      "Renseignez la première ligne (ex. compte de charge 611100, montant HT au débit).",
      "Cliquez sur « Ajouter une ligne » pour la TVA (ex. compte 345500, montant TVA au débit).",
      "Ajoutez une ligne pour le fournisseur (ex. compte 441100, montant TTC au crédit).",
      "Vérifiez qu'aucun bandeau orange de déséquilibre ne s'affiche, puis cliquez sur « Enregistrer ».",
    ],
    stepsTitle: "Équilibrer et enregistrer une écriture",
    cases: [
      "Saisie d'une facture comportant plusieurs taux de TVA.",
      "Correction d'une écriture après changement de taux de change sur une transaction en devises.",
    ],
    rules: [
      "Chaque ligne comporte soit un débit, soit un crédit — jamais les deux.",
      "L'écriture doit être parfaitement équilibrée (Débit = Crédit) pour que l'enregistrement soit possible.",
    ],
    callouts: [
      ["alerte", "Déséquilibre comptable détecté : bandeau orange sous le titre indiquant l'écart précis entre débit et crédit. L'enregistrement reste bloqué tant que la différence n'est pas nulle."],
      ["attn", "Entrez un débit ou un crédit, mais pas les deux sur la même ligne."],
      ["attn", "La date / le journal est obligatoire : ces informations d'en-tête sont manquantes."],
      ["info", "Montants modifiés manuellement : le taux de change n'a plus d'influence (message informatif si vous forcez des valeurs converties)."],
      ["conseil", "Utilisez la touche Tabulation pour passer d'un champ à l'autre. À la saisie du compte, tapez les premiers chiffres pour laisser l'auto-complétion faire le reste."],
    ],
    faq: [
      ["Pourquoi la facture ne s'affiche-t-elle pas à droite ?", "Si le message « Fichier non trouvé » apparaît, la pièce a peut-être été déplacée ou supprimée du stockage. Vous pouvez tout de même saisir l'écriture manuellement, sans aperçu."],
    ],
  },
];
