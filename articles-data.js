/**
 * Source unique du centre d'aide Pacioli Compta.
 *
 * Mise en forme reprise du centre d'aide Pacioli Entreprise : une introduction
 * courte, une capture de l'écran concerné, puis des sections en listes d'actions,
 * closes par une astuce ou un point de vigilance.
 *
 * Ne documenter que ce que l'utilisateur voit et fait dans l'application.
 */

module.exports = [
  {
    title: "1. Bien démarrer avec Pacioli",
    tagline: "Profils, accès aux dossiers et navigation.",
    intro: [
      "Pacioli automatise la saisie comptable : vous déposez vos factures et vos relevés, l'analyse en extrait les montants et prépare les écritures. Vous vérifiez, corrigez si besoin, puis exportez.",
      "L'application s'organise sur deux niveaux. Le niveau cabinet donne la vue d'ensemble et la liste de vos dossiers. Une fois un dossier ouvert, le menu de gauche bascule sur les fonctions comptables de ce dossier.",
    ],
    shot: ["dossiers-clients", "La liste des dossiers clients, point de départ du travail quotidien."],
    sections: [
      {
        h2: "Deux profils",
        bullets: [
          "Administrateur : voit tous les dossiers du cabinet, gère les collaborateurs et le contrat. À la connexion, il arrive sur le tableau de bord.",
          "Utilisateur : ne voit que les dossiers auxquels il est assigné. À la connexion, il arrive directement sur ses dossiers clients.",
        ],
      },
      {
        h2: "Accès aux dossiers",
        text: "Un collaborateur ne voit un dossier, et ne peut y travailler, que s'il y est assigné. L'assignation est faite par un administrateur depuis les paramètres du dossier.",
        bullets: [
          "Le collaborateur qui crée un dossier y est assigné automatiquement.",
          "Un administrateur accède à tous les dossiers sans avoir besoin d'y être assigné.",
          "Les noms des collaborateurs assignés apparaissent en pied de chaque carte de dossier.",
        ],
      },
      {
        h2: "Se déplacer dans l'application",
        bullets: [
          "Ouvrez un dossier depuis la liste : le menu affiche Dépôt de pièces, Journal comptable, Liste des comptes, Lettrage & justificatifs, Export et Paramètres du dossier.",
          "Le lien en haut du menu, portant le nom de votre cabinet, referme le dossier et vous ramène à la vue d'ensemble.",
          "Le pied du menu rappelle en permanence qui est connecté et quel dossier est ouvert.",
        ],
      },
    ],
    callouts: [
      ["conseil", "Si une entrée de menu ne s'affiche pas, vérifiez d'abord votre niveau : certaines fonctions n'existent qu'au niveau cabinet, d'autres seulement dans un dossier ouvert."],
    ],
  },

  {
    title: "2. Suivre votre consommation",
    tagline: "Enveloppes du contrat, rythme de dépôt et répartition par dossier.",
    intro: [
      "Le tableau de bord est le premier écran de l'administrateur. Il répond à une question : votre contrat tiendra-t-il jusqu'à l'échéance au rythme actuel ?",
      "Deux enveloppes sont suivies séparément : le traitement des pièces et les pages de relevés bancaires. Les doublons écartés ne sont jamais décomptés.",
    ],
    shot: ["tableau-de-bord", "Enveloppes du contrat, activité mensuelle et répartition par dossier."],
    sections: [
      {
        h2: "Lire une enveloppe",
        text: "Chaque carte affiche le consommé, le restant et le rythme quotidien. Le trait vertical sur la jauge marque le repère de rythme : c'est là que votre consommation devrait se situer aujourd'hui, compte tenu du chemin déjà parcouru dans le contrat.",
        bullets: [
          "La jauge en deçà du repère : vous consommez moins vite que la durée ne s'écoule.",
          "La jauge au-delà du repère : vous consommez plus vite, sans que l'enveloppe soit nécessairement menacée.",
          "La barre en haut de page rappelle les jours écoulés et restants de la période contractuelle.",
        ],
      },
      {
        h2: "Alertes de seuil",
        bullets: [
          "À 80 % de consommation, un message ambre invite à anticiper le renouvellement.",
          "À 90 %, le message passe au rouge : le dépôt se bloquera pour tous les dossiers une fois l'enveloppe vide.",
          "Les deux messages portent l'adresse du service commercial.",
        ],
      },
      {
        h2: "Activité et répartition",
        bullets: [
          "Le graphique d'activité mensuelle montre le volume déposé mois par mois sur la période contractuelle ; survolez une colonne pour le détail.",
          "Le tableau « Consommation par dossier » indique qui consomme l'enveloppe du cabinet — utile pour refacturer ou arbitrer.",
        ],
      },
    ],
    callouts: [
      ["info", "Cet écran est réservé aux administrateurs : il porte sur le contrat du cabinet, pas sur un dossier. Un profil Utilisateur arrive directement sur ses dossiers clients."],
    ],
  },

  {
    title: "3. Gérer vos dossiers clients",
    tagline: "Créer un dossier, retrouver le bon, repérer ce qui demande une action.",
    intro: [
      "L'écran Dossiers clients rassemble les dossiers auxquels vous avez accès. Un bandeau « À traiter » remonte en tête ce qui bloque : pièces en traitement, doublons à arbitrer, pièces rejetées, écritures déséquilibrées et dossiers sans activité depuis trente jours.",
      "Chaque compteur du bandeau est cliquable et filtre la liste sur les dossiers concernés.",
    ],
    shot: ["dossiers-clients", "Le bandeau « À traiter », la recherche et les cartes de dossiers."],
    sections: [
      {
        h2: "Retrouver un dossier",
        bullets: [
          "La recherche porte sur le nom, la ville et l'activité.",
          "Le filtre Collaborateur ne propose que les personnes réellement assignées ; l'option « Non assignés » révèle les dossiers que personne ne suit.",
          "Le tri s'effectue par nom, par activité la plus récente ou par volume de pièces.",
        ],
      },
      {
        h2: "Lire une carte",
        bullets: [
          "Les badges colorés ouvrent directement l'écran déjà filtré : doublons, pièces rejetées, écritures déséquilibrées.",
          "Le pied de carte affiche la date de dernière activité, puis les collaborateurs assignés.",
        ],
      },
      {
        h2: "Créer un dossier",
        text: "Le bouton « Nouveau dossier » ouvre le formulaire de création. Le nom, l'ICE, l'activité et le pays sont obligatoires ; l'e-mail est facultatif.",
        shot: ["nouveau-dossier", "Le formulaire de création d'un dossier client."],
        bullets: [
          "La devise est proposée automatiquement d'après le pays choisi.",
          "Le pays détermine aussi le plan comptable du dossier et son plan de comptes de départ.",
          "Vous êtes assigné automatiquement au dossier que vous créez.",
        ],
      },
    ],
    callouts: [
      ["attn", "L'activité, le pays et la devise ne sont plus modifiables après la création : ils structurent le dossier. Vérifiez-les avant de valider."],
    ],
  },

  {
    title: "4. Déposer des pièces",
    tagline: "Transmettre factures et relevés pour analyse automatique.",
    intro: [
      "Le dépôt de pièces est le point d'entrée de la production comptable. Vous déposez vos documents par catégorie ; l'analyse en extrait les données et prépare les écritures.",
      "Les doublons sont détectés sur le contenu du fichier, et non sur son nom : le même document redéposé sous un autre nom est reconnu.",
    ],
    shot: ["depot-de-pieces", "Les zones de dépôt et le tableau des pièces déjà transmises."],
    sections: [
      {
        h2: "Déposer un document",
        bullets: [
          "Cliquez sur la zone correspondant au type : facture d'achat, facture de vente ou relevé bancaire.",
          "Choisissez un ou plusieurs fichiers. Formats acceptés : PDF, PNG, JPG. Taille maximale : 5 Mo par fichier.",
          "La pièce apparaît aussitôt dans le tableau, avec son statut de traitement.",
        ],
      },
      {
        h2: "Suivre le traitement",
        bullets: [
          "Téléchargé : la pièce est reçue, l'analyse n'a pas commencé.",
          "En traitement : l'analyse est en cours.",
          "Traité : les écritures sont disponibles dans le journal.",
          "Rejeté : l'analyse n'a pas abouti ; le motif est affiché en clair.",
          "Dupliqué : une pièce identique existe déjà dans le dossier.",
        ],
      },
      {
        h2: "Arbitrer un doublon",
        text: "Une pièce détectée comme doublon n'est pas décomptée de votre enveloppe et ne produit pas d'écriture. Le bouton de comparaison affiche les deux fichiers côte à côte, au format A4, pour trancher.",
        bullets: [
          "Si les deux documents sont bien identiques, supprimez le doublon.",
          "S'il s'agit de deux pièces différentes, forcez le traitement depuis l'écran de comparaison.",
        ],
      },
      {
        h2: "Agir sur plusieurs pièces",
        text: "Cochez des lignes : une barre d'actions apparaît en bas de l'écran.",
        bullets: [
          "Télécharger les fichiers d'origine sur votre poste.",
          "Supprimer les pièces sélectionnées, après confirmation.",
        ],
      },
    ],
    callouts: [
      ["attn", "Supprimer une pièce supprime aussi les écritures qui en découlent. Si certaines sont validées, une confirmation supplémentaire vous est demandée."],
      ["conseil", "La recherche et les filtres Statut, Type et Doublons se combinent : utilisez-les pour isoler rapidement les pièces à reprendre."],
    ],
  },

  {
    title: "5. Saisir ou corriger une écriture",
    tagline: "Compléter une écriture, l'équilibrer et la valider.",
    intro: [
      "La saisie manuelle sert à créer l'écriture d'une pièce que l'analyse n'a pas traitée, ou à corriger une écriture pré-générée. L'aperçu de la pièce reste affiché à côté du formulaire : vous saisissez en regardant le document.",
      "Cet écran s'ouvre depuis le dépôt de pièces, par le bouton « Saisir », ou depuis le journal en cliquant sur le numéro d'une écriture. Il n'occupe pas d'entrée de menu.",
    ],
    shot: ["saisie-manuelle", "Le formulaire de saisie, avec l'aperçu de la pièce justificative."],
    sections: [
      {
        h2: "Renseigner l'écriture",
        bullets: [
          "En-tête : date, journal, référence de la pièce et libellé.",
          "Lignes : un compte, un libellé, puis un débit ou un crédit — jamais les deux sur la même ligne.",
          "Le champ Compte se recherche au clavier, par numéro ou par intitulé.",
          "Si le compte n'existe pas encore, créez-le directement depuis la liste déroulante, sans quitter l'écran.",
        ],
      },
      {
        h2: "Équilibrer",
        text: "Le total du débit et celui du crédit s'affichent en permanence en bas du formulaire. L'enregistrement est refusé tant que les deux ne sont pas égaux.",
      },
      {
        h2: "Enregistrer ou valider",
        bullets: [
          "Enregistrer conserve l'écriture en l'état ; elle reste modifiable.",
          "Valider enregistre puis fige l'écriture, et ouvre directement la pièce suivante.",
          "Les flèches « Pièce n / total » permettent d'enchaîner les pièces sans repasser par le journal.",
        ],
      },
    ],
    callouts: [
      ["attn", "Une écriture validée est figée : elle n'est plus modifiable tant que vous ne l'avez pas dévalidée. C'est ce qui garantit la fiabilité de l'export."],
      ["conseil", "Une écriture est toujours rattachée à une pièce justificative. Pour saisir une opération diverse, déposez d'abord le document correspondant."],
    ],
  },

  {
    title: "6. Consulter le journal comptable",
    tagline: "Retrouver, vérifier et valider les écritures du dossier.",
    intro: [
      "Le journal rassemble toutes les écritures du dossier, quelle que soit leur origine. C'est l'écran de contrôle avant l'export.",
      "Les écritures déséquilibrées y sont signalées mais restent visibles : elles doivent être corrigées, pas dissimulées.",
    ],
    shot: ["journal-comptable", "Le journal, ses filtres et le détail des lignes."],
    sections: [
      {
        h2: "Filtrer",
        bullets: [
          "Par exercice, par période, par journal, par compte ou par libellé.",
          "Par montant, au débit ou au crédit.",
          "Par état de validation, pour isoler ce qui reste à valider.",
        ],
      },
      {
        h2: "Ouvrir une écriture",
        text: "Cliquez sur le numéro d'une écriture pour l'ouvrir en saisie. Vos filtres sont conservés : en revenant au journal, vous retrouvez exactement la liste que vous aviez.",
      },
      {
        h2: "Valider",
        bullets: [
          "La validation se fait écriture par écriture, ou sur une sélection.",
          "Une écriture déséquilibrée ne peut pas être validée.",
          "La date de validation alimente le champ correspondant du fichier FEC.",
          "Dévalider une écriture demande une confirmation, pour éviter le geste réflexe.",
        ],
      },
    ],
    callouts: [
      ["conseil", "Depuis l'écran des dossiers, le badge « écritures déséquilibrées » ouvre le journal déjà filtré sur les écritures concernées."],
    ],
  },

  {
    title: "7. Gérer la liste des comptes",
    tagline: "Le plan comptable du dossier.",
    intro: [
      "Chaque dossier dispose de son propre plan de comptes. Il est créé à l'ouverture du dossier avec une amorce adaptée au pays choisi, puis complété au fil de la production.",
      "Les comptes utilisés par l'analyse sont ajoutés automatiquement : la liste s'enrichit sans intervention.",
    ],
    shot: ["liste-des-comptes", "Le plan comptable du dossier."],
    sections: [
      {
        h2: "Ce que vous pouvez faire",
        bullets: [
          "Rechercher un compte par numéro ou par intitulé.",
          "Créer un compte, ou modifier l'intitulé d'un compte existant.",
          "Supprimer un compte qui n'est mouvementé par aucune écriture.",
        ],
      },
      {
        h2: "Une amorce selon le pays",
        text: "Un dossier marocain démarre sur le plan CGNC, un dossier français sur le PCG, un dossier de la zone OHADA sur le SYSCOHADA. Ces amorces couvrent l'essentiel — tiers, TVA, banque, caisse, achats, ventes — et sont faites pour être complétées.",
      },
    ],
    callouts: [
      ["conseil", "Vous pouvez aussi créer un compte sans quitter la saisie d'écriture, directement depuis la liste déroulante du champ Compte."],
    ],
  },

  {
    title: "8. Lettrer et justifier",
    tagline: "Rapprocher factures et règlements, réclamer les pièces manquantes.",
    intro: [
      "Le lettrage consiste à faire s'annuler les lignes d'un compte de tiers : une facture avec son règlement. L'écran vous propose les rapprochements, avec leur motif en clair — un rapprochement qu'on ne sait pas expliquer n'a pas sa place dans un dossier.",
      "Le second onglet liste les mouvements bancaires sans justificatif. Vous pouvez y déposer la pièce manquante en un clic.",
    ],
    shot: ["lettrage", "Les comptes de tiers et les rapprochements proposés, avec leur score et leur motif."],
    sections: [
      {
        h2: "Lire une proposition",
        text: "Chaque proposition porte un score et la règle qui l'a produite. Plus le score est élevé, plus le rapprochement est sûr.",
        bullets: [
          "Référence citée : le numéro de la facture apparaît dans le libellé du règlement. C'est la preuve la plus directe.",
          "Montant et date : montant identique, dates rapprochées.",
          "Montant et tiers : montant identique, et libellés désignant visiblement le même tiers.",
          "Règlement groupé : un versement solde plusieurs factures à la fois.",
        ],
      },
      {
        h2: "Appliquer les rapprochements",
        bullets: [
          "« Appliquer » valide une proposition et lui attribue une lettre.",
          "« Lettrage automatique » applique d'un coup tous les rapprochements sûrs, sur le compte ouvert ou sur tous les comptes. Les moins certains restent proposés, à valider à la main.",
          "Pour lettrer vous-même, cochez des lignes : l'écart s'affiche en direct et le bouton ne s'active que si le groupe s'annule.",
          "La lettre affichée sur une ligne est cliquable : elle défait le lettrage, après confirmation.",
        ],
      },
      {
        h2: "Pièces à justifier",
        text: "L'onglet liste les mouvements des journaux de banque qui posent problème. Deux signaux, qui se cumulent souvent et appellent deux actions distinctes.",
        shot: ["pieces-a-justifier", "Les mouvements bancaires sans justificatif ou restés à imputer."],
        bullets: [
          "Sans pièce : aucun justificatif n'est rattaché. Il est à réclamer au client.",
          "À imputer : le mouvement dort sur un compte d'attente, son affectation reste à trancher.",
          "Le bouton « Déposer la pièce » transmet le justificatif directement depuis la ligne concernée.",
        ],
      },
      {
        h2: "Après le dépôt d'un justificatif",
        bullets: [
          "Le mouvement quitte immédiatement la liste des pièces manquantes.",
          "Dès que l'analyse produit l'écriture de la pièce, celle-ci est lettrée automatiquement avec le mouvement bancaire.",
          "Si les montants ne s'annulent pas — règlement partiel, écart de change — rien n'est forcé : le lettrage reste à faire à la main.",
        ],
      },
    ],
    callouts: [
      ["info", "Les comptes lettrables dépendent du plan comptable du dossier, donc de son pays. Le plan appliqué est rappelé en haut de chaque onglet."],
      ["conseil", "Un lettrage doit toujours être de solde nul. Si le groupe ne s'annule pas, c'est qu'il reste quelque chose à régler : ne forcez pas, cherchez la ligne manquante."],
    ],
  },

  {
    title: "9. Exporter les écritures",
    tagline: "Produire le fichier destiné à votre logiciel comptable.",
    intro: [
      "L'export produit le fichier des écritures du dossier, dans le format attendu par votre logiciel de production.",
      "Par défaut, seules les écritures validées sont exportées : c'est ce qu'attend un fichier des écritures comptables.",
    ],
    shot: ["export-ecritures", "La prévisualisation avant export, et les deux formats disponibles."],
    sections: [
      {
        h2: "Choisir ce que vous exportez",
        bullets: [
          "Filtrez par exercice, par période ou par journal.",
          "La prévisualisation affiche les écritures retenues et leur nombre de lignes avant tout téléchargement.",
        ],
      },
      {
        h2: "Deux formats",
        bullets: [
          "FEC (.txt) : le fichier des écritures comptables, avec ses dix-huit champs réglementaires.",
          "Excel (.xlsx) : le même contenu en tableau, pour relecture ou retraitement.",
        ],
      },
    ],
    callouts: [
      ["conseil", "Si le nombre de lignes vous paraît faible, vérifiez l'état de validation dans le journal : les écritures non validées sont exclues par défaut."],
    ],
  },

  {
    title: "10. Paramétrer un dossier client",
    tagline: "Informations, exercices, historique et collaborateurs assignés.",
    intro: [
      "Les paramètres du dossier regroupent son identité, ses exercices comptables et les collaborateurs qui y ont accès.",
      "Les champs d'identité s'enregistrent à la sortie de chaque champ : il n'y a pas de bouton à actionner.",
    ],
    shot: ["parametres-dossier", "Informations du dossier, collaborateurs assignés et exercices comptables."],
    sections: [
      {
        h2: "Informations principales",
        bullets: [
          "Modifiables à tout moment : nom, ICE, adresse, ville, téléphone, e-mail, précision décimale.",
          "Figés depuis la création : activité, pays et devise. Ils structurent le dossier et son plan comptable.",
        ],
      },
      {
        h2: "Collaborateurs assignés",
        text: "Réservé aux administrateurs. Un collaborateur ne voit ce dossier, et n'y travaille, que s'il y figure.",
        bullets: [
          "La liste déroulante propose les collaborateurs actifs du cabinet non encore assignés.",
          "La croix sur une pastille retire l'accès, après confirmation.",
          "Les administrateurs ne sont pas proposés : ils accèdent déjà à tous les dossiers.",
        ],
      },
      {
        h2: "Exercices comptables",
        bullets: [
          "Créez, modifiez ou supprimez les exercices du dossier.",
          "Les périodes ne peuvent pas se chevaucher.",
        ],
      },
      {
        h2: "Historique d'écritures",
        text: "Vous pouvez transmettre un fichier d'écritures antérieures (balance ou FEC). Il sert de référence pour retrouver les bons comptes d'imputation, et évite d'avoir à paramétrer le dossier en détail.",
      },
    ],
    callouts: [
      ["info", "Un dossier sans aucun collaborateur assigné reste visible des seuls administrateurs. La mention apparaît en clair sur la carte du dossier."],
    ],
  },

  {
    title: "11. Paramétrer le cabinet",
    tagline: "Nom du cabinet et gestion des collaborateurs.",
    intro: [
      "Cet écran est réservé aux administrateurs. Il porte sur le cabinet lui-même : son nom et les personnes qui y travaillent.",
      "Un profil Utilisateur ne voit pas cette entrée de menu et ne peut pas y accéder.",
    ],
    shot: ["parametres-cabinet", "Le nom du cabinet et la liste des collaborateurs."],
    sections: [
      {
        h2: "Gérer les collaborateurs",
        bullets: [
          "Ajoutez un collaborateur en renseignant son nom, son e-mail et son rôle.",
          "Le crayon modifie la fiche ; la clé réinitialise le mot de passe.",
          "Le cadenas désactive un compte sans le supprimer : la personne ne peut plus se connecter, son travail reste intact.",
          "La corbeille supprime définitivement le compte.",
        ],
      },
      {
        h2: "Les deux rôles",
        bullets: [
          "Administrateur : tous les dossiers, les paramètres du cabinet et l'assignation des collaborateurs.",
          "Utilisateur : uniquement les dossiers auxquels il est assigné, sans accès aux paramètres du cabinet.",
        ],
      },
    ],
    callouts: [
      ["conseil", "Préférez la désactivation à la suppression pour un collaborateur qui quitte le cabinet : l'historique de ses actions reste ainsi consultable."],
    ],
  },
];
