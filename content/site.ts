/**
 * Tout le contenu textuel du site Jean-Claude CODE.
 *
 * Source : la présentation « L’IA d’entreprise, un outil de performance collective »
 * (déjeuner Cht’e Commerçants, SKEMA Lille, 19 novembre 2026), dossier
 * jean-claude-code/conferences/2026-11-19-chte-commercants/ du dépôt benjamin-perso.
 *
 * Règles de la marque : vouvoiement, jamais de tiret cadratin, aucun client nommé,
 * SkyLantern = nom public de l’entreprise de Benjamin (montrer des tâches, jamais des résultats).
 * Les espaces insécables avant : ; ? ! et dans « » sont posés au rendu (lib/typo.ts).
 *
 * Pour modifier un texte : éditer ce fichier, puis pousser sur main (Vercel reconstruit le site).
 */

export type Lien = { label: string; href: string };

export type Niveau = { code: string; nom: string; exemple: string; cle?: boolean };

export type Tache = { metier: string; icone: string; texte: string };

export type BlocSchema = { nom: string; precision: string; picto: string };

export type Couche = {
  zone: string;
  craie: "bleue" | "rouge" | "blanche" | "jaune" | "grise";
  blocs: BlocSchema[];
};

export type Critere = { titre: string; question: string; lignes: { si: string; alors: string }[] };

export type Risque = { risque: string; parade: string; vigilance: string };

export type Raison = { titre: string; chiffre?: string; texte: string };

export type FamilleAgents = { titre: string; agents: { nom: string; role: string }[] };

export type Phase = { nom: string; texte: string; livre: string };

export type Frein = { frein: string; reponse: string };

export type Voie = { titre: string; pour: string; etapes: string[]; pleine?: boolean };

export const site = {
  meta: {
    titre: "Jean-Claude CODE : l’IA d’entreprise pour les PME",
    description:
      "Benjamin Hamon installe dans les PME une IA partagée par toute l’équipe et connectée à ses données : architecture, sécurité, déploiement. Praticien, pas influenceur.",
    url: "https://jeanclaudecode.fr",
  },

  nav: [
    { label: "L’architecture", href: "#architecture" },
    { label: "Les agents", href: "#agents" },
    { label: "La démarche", href: "#demarche" },
    { label: "Qui", href: "#qui" },
  ] satisfies Lien[],

  hero: {
    etiquette: "déployer l’IA à l’échelle de l’entreprise",
    titre: "L’IA d’entreprise, un outil de performance collective",
    sousTitre:
      "J’installe dans les PME une IA partagée par toute l’équipe et connectée à ses données : architecture, sécurité, déploiement.",
    signature: { nom: "Benjamin Hamon", role: "e-commerçant, près de Lille" },
    ctaPrincipal: { label: "Discutons", href: "#contact" },
    ctaSecondaire: { label: "Voir la démarche", href: "#demarche" },
    image: "Jean-Claude et quatre collègues en super-héros volent au-dessus des toits de Lille et du beffroi",
  },

  niveaux: {
    etiquette: "six niveaux",
    titre: "De l’usage individuel à l’entreprise équipée",
    intro:
      "Au niveau 1, des salariés utilisent l’IA chacun de leur côté, souvent sans cadre. Au niveau 3, c’est l’entreprise qui devient utilisatrice : une plateforme commune, connectée à ses logiciels.",
    liste: [
      { code: "L0", nom: "L’IA dans les outils", exemple: "correcteur, suggestions" },
      { code: "L1", nom: "Le chat", exemple: "ChatGPT, copier-coller" },
      { code: "L2", nom: "L’assistant qui agit", exemple: "Cowork, Claude Code" },
      {
        code: "L3",
        nom: "L’IA d’entreprise",
        exemple: "connectée aux logiciels, partagée par l’équipe",
        cle: true,
      },
      { code: "L4", nom: "L’usine semi-autonome", exemple: "les agents livrent, l’humain valide" },
      { code: "L5", nom: "L’usine autonome", exemple: "exécution sans supervision continue" },
    ] satisfies Niveau[],
    repere: "C’est ici que j’interviens",
    source: "Grille en six niveaux adaptée de « The Five Levels » de Dan Shapiro (janvier 2026).",
  },

  terrain: {
    etiquette: "sur le terrain",
    titre: "Ce que l’IA fait déjà dans une PME",
    intro: "Des tâches qui tournent aujourd’hui dans des PME du commerce en ligne, pas des démonstrations.",
    taches: [
      { metier: "Développement", icone: "terminal", texte: "Refonte du site web, outils d’entrepôt, CRM" },
      { metier: "Ventes", icone: "caisse", texte: "Prix Amazon ajustés face aux offres concurrentes" },
      { metier: "Comptabilité", icone: "tableur", texte: "Rapprochement des factures fournisseurs et marketplaces" },
      {
        metier: "Achats",
        icone: "carton",
        texte: "Alertes de réassort, recherche de fournisseurs, remplissage des conteneurs",
      },
      { metier: "Marketing", icone: "graphique", texte: "Réglage des campagnes Amazon et Google Ads" },
      { metier: "Communication", icone: "message", texte: "Bannières, vidéos, campagnes sur les réseaux sociaux" },
      { metier: "Produit", icone: "document", texte: "Traduction des fiches produits Amazon" },
      { metier: "Logistique", icone: "camion", texte: "Performance des transporteurs, suivi des colis" },
      { metier: "Direction", icone: "donnees", texte: "Trésorerie, rentabilité, scénarios de croissance" },
    ] satisfies Tache[],
  },

  architecture: {
    etiquette: "l’architecture",
    titre: "Le modèle de référence",
    intro:
      "Chacun se connecte avec son compte de l’entreprise et n’accède qu’à ce que ses droits permettent. La plateforme réunit le modèle, une base de données et de quoi exécuter des tâches sans personne devant l’écran. Le dépôt Git garde la mémoire. La passerelle relie le tout aux logiciels déjà en place.",
    tableau: "Une IA d’entreprise",
    couches: [
      {
        zone: "accès",
        craie: "bleue",
        blocs: [
          { nom: "Les équipes", precision: "postes, navigateur, mobile", picto: "equipe" },
          {
            nom: "Identité",
            precision: "le compte de l’entreprise, des droits par personne",
            picto: "cadenas",
          },
        ],
      },
      {
        zone: "plateforme",
        craie: "rouge",
        blocs: [
          { nom: "Modèle (LLM)", precision: "Claude, GPT, Gemini ou Mistral", picto: "modele" },
          { nom: "Base de données", precision: "données consolidées, suivi des tâches", picto: "donnees" },
          { nom: "Exécution autonome", precision: "tâches planifiées, agents jour et nuit", picto: "routine" },
        ],
      },
      {
        zone: "mémoire",
        craie: "blanche",
        blocs: [
          {
            nom: "Dépôt Git de l’entreprise",
            precision: "procédures, décisions, historique : la mémoire commune",
            picto: "memoire",
          },
          { nom: "Dépôts des sites", precision: "code des boutiques, changements relus", picto: "boutique" },
        ],
      },
      {
        zone: "connexion",
        craie: "jaune",
        blocs: [
          {
            nom: "Passerelle vers les outils existants (MCP, API)",
            precision: "un connecteur par logiciel, secrets au coffre, accès journalisés",
            picto: "passerelle",
          },
        ],
      },
    ] satisfies Couche[],
    existant: {
      zone: "existant",
      outils: ["ERP", "Boutique", "Marketplaces", "Publicité", "Messagerie", "Fichiers", "Comptabilité"],
    },
    sans: [
      { titre: "Sans dépôt", texte: "chaque session repart de zéro." },
      { titre: "Sans passerelle", texte: "le modèle ne voit aucune donnée de l’entreprise." },
      { titre: "Sans exécution autonome", texte: "rien ne tourne en dehors des heures de travail." },
    ],
    recitatif:
      "Un abonnement fournit le modèle et quelques connecteurs standards. Le dépôt, la passerelle et les règles, l’entreprise les construit, et ils lui appartiennent.",
  },

  choix: {
    etiquette: "le choix",
    titre: "Choisir sa plateforme : trois critères",
    criteres: [
      {
        titre: "Les données existantes",
        question: "Où sont la messagerie et les fichiers ?",
        lignes: [
          { si: "Microsoft 365", alors: "un LLM + Microsoft" },
          { si: "Google Workspace", alors: "un LLM + Google, ou tout Google avec Gemini" },
          { si: "Ailleurs (OVH, Gandi…)", alors: "un LLM + Cloudflare" },
        ],
      },
      {
        titre: "La performance du modèle",
        question: "Qui livre le mieux de vrais projets ?",
        lignes: [
          { si: "Anthropic, OpenAI, Google", alors: "des modèles proches, selon les mesures d’Epoch AI" },
          { si: "Le choix de l’éditeur", alors: "engage moins que l’architecture" },
        ],
      },
      {
        titre: "La souveraineté",
        question: "Une contrainte écrite de localisation des données ?",
        lignes: [
          { si: "Oui", alors: "Mistral, éditeur français" },
          { si: "Non", alors: "un éditeur soumis au droit américain" },
        ],
      },
    ] satisfies Critere[],
    recitatif:
      "La souveraineté, quand elle est exigée, tranche en premier. Sinon, les données existantes décident. Le choix reste réversible : le dépôt Git appartient à l’entreprise.",
  },

  securite: {
    etiquette: "la sécurité",
    titre: "Six risques et leur parade",
    entetes: ["Le risque", "La parade", "Le point de vigilance"],
    risques: [
      {
        risque: "Les données confiées au fournisseur",
        parade: "Sur les offres pour les entreprises, les données ne servent pas, par défaut, à entraîner les modèles.",
        vigilance: "Le fournisseur reste soumis au droit de son pays.",
      },
      {
        risque: "Un salarié qui voit ce qu’il ne devrait pas voir",
        parade: "L’IA agit avec les droits de la personne connectée : elle ne crée aucun accès.",
        vigilance:
          "Une IA trouve en quelques secondes un dossier mal protégé : revoir les droits RH et paie avant le déploiement.",
      },
      {
        risque: "Des ordres cachés dans un mail ou une page web",
        parade:
          "Règle des deux sur trois : sans validation humaine, un agent ne cumule jamais la lecture de contenus extérieurs, l’accès aux données sensibles et le droit d’agir (envoyer, payer, supprimer).",
        vigilance:
          "Les modèles repèrent de mieux en mieux ces pièges, jamais à coup sûr : la protection vient des droits donnés à l’agent.",
      },
      {
        risque: "Une clé d’accès qui fuit",
        parade: "Les clés sont rangées dans un coffre : aucune sur les postes ni dans le dépôt.",
        vigilance: "Rotation des clés et journal des accès, tenus par l’informatique.",
      },
      {
        risque: "Une erreur de l’IA : chiffre faux, mauvais destinataire",
        parade: "Tout est relu : la personne qui utilise l’IA reste responsable de ce qu’elle produit.",
        vigilance: "Une charte d’usage signée par chacun.",
      },
      {
        risque: "Le départ d’un salarié",
        parade: "Identité centralisée : retirer la personne de l’annuaire coupe ses accès.",
        vigilance: "Selon l’offre, le siège se retire à la main ou automatiquement.",
      },
    ] satisfies Risque[],
    recitatif: "Aucun de ces risques n’est propre à l’IA. L’IA les rend seulement plus rapides.",
    source: "Règle des deux sur trois : Meta AI, « Agents Rule of Two », octobre 2025.",
  },

  maintenant: {
    etiquette: "pourquoi maintenant",
    titre: "Le gain suit l’apprentissage",
    raisons: [
      {
        titre: "Une phase d’apprentissage",
        texte:
          "Une technologie générale demande d’abord d’investir dans l’organisation, les procédures et les compétences. Le gain vient ensuite. Démarrer plus tard ne supprime pas cette phase : cela la décale.",
      },
      {
        titre: "Ce qui se constitue ne s’achète pas",
        chiffre: "120+",
        texte:
          "procédures écrites chez SkyLantern en moins d’un an, et plus de 1 000 décisions documentées. Un abonnement s’achète le même jour au même prix par tous ; ce référentiel, non.",
      },
      {
        titre: "Chaque nouveau modèle profite à l’existant",
        texte:
          "Une procédure écrite aujourd’hui profite des modèles suivants, sans être réécrite. Elle reste quand la personne qui l’a écrite change de poste.",
      },
    ] satisfies Raison[],
    recitatif: "La question n’est pas d’éviter la phase d’apprentissage, mais de choisir quand la traverser.",
    source:
      "Courbe en J : Brynjolfsson, Rock et Syverson, « The Productivity J-Curve », American Economic Journal: Macroeconomics, 2021.",
  },

  agents: {
    etiquette: "les agents",
    titre: "Des agents au travail, tous les jours",
    intro:
      "En service en novembre 2026. Chaque agent a un périmètre, des outils et des droits définis ; un autre agent ou une personne contrôle son travail.",
    familles: [
      {
        titre: "Piloter les agents",
        agents: [
          { nom: "Agent généraliste", role: "réalise de A à Z les tâches qui lui sont confiées" },
          { nom: "Agent technique", role: "débogue, corrige les connecteurs et l’infrastructure" },
          { nom: "Agent contrôleur", role: "vérifie chaque tâche déclarée faite, preuves à l’appui" },
          { nom: "Voiture-balai", role: "chaque nuit, ferme ce qui est fait et prépare le point du matin" },
        ],
      },
      {
        titre: "Finance et direction",
        agents: [
          { nom: "Notes de frais", role: "lit les justificatifs, les rapproche de l’agenda, les archive" },
          { nom: "Factures", role: "importe les factures des fournisseurs et des marketplaces" },
          { nom: "Trésorerie", role: "prépare le prévisionnel de trésorerie" },
          { nom: "Point économique", role: "prêt chaque matin pour la direction" },
        ],
      },
      {
        titre: "Commerce",
        agents: [
          { nom: "Point business du matin", role: "chiffre d’affaires, marge, transformation, avis clients" },
          { nom: "Écoute des signaux", role: "lance une analyse quand un taux baisse plusieurs jours de suite" },
          {
            nom: "Stratégie de vente Amazon",
            role: "ajuste prix et publicité selon la marge et le stock disponible",
          },
        ],
      },
      {
        titre: "Achats et logistique",
        agents: [
          { nom: "Sourcing et cotations", role: "demande et compare les prix des fournisseurs" },
          { nom: "Réassort", role: "propose les produits à recommander, à la demande" },
          { nom: "Ruptures sur les marketplaces", role: "suit les ruptures et les délais des flux" },
          { nom: "Transporteurs", role: "suit les envois et relance les transporteurs" },
        ],
      },
    ] satisfies FamilleAgents[],
    demain: {
      titre: "Demain : des processus entiers confiés à des agents",
      outils: "Outils et moyens de communication : logiciels de l’entreprise, mail, messagerie d’équipe",
      etapes: [
        { nom: "Demandes", precision: "d’un salarié, d’une routine, d’un mail reçu", picto: "mail", craie: "bleue" },
        { nom: "File de tâches", precision: "une base commune ; chaque tâche prise une fois", picto: "donnees", craie: "blanche" },
        { nom: "Agents d’exécution", precision: "préparent ou exécutent de bout en bout", picto: "agent", craie: "rouge" },
        { nom: "Agent de contrôle", precision: "vérifie sur le réel, jamais son propre travail", picto: "loupe", craie: "rouge" },
        { nom: "Terminé", precision: "preuve à l’appui, ou tâche rouverte", picto: "valide", craie: "verte" },
      ],
      memoire: {
        nom: "Dépôt Git : mémoire et règles apprises",
        precision: "chaque erreur constatée devient une règle écrite, lue par tous les agents au passage suivant",
      },
      recitatif:
        "Hypothèse de travail : des processus entiers tenus par des agents, contrôlés par d’autres agents. Ce qui reste humain : décider, valider ce qui engage l’entreprise, écrire les règles.",
    },
  },

  demarche: {
    etiquette: "la démarche",
    titre: "Les phases du déploiement",
    phases: [
      {
        nom: "Cadrage",
        texte: "Avec la direction : choix de la plateforme, règles de sécurité, périmètre.",
        livre: "On en sort avec la plateforme choisie et les règles écrites.",
      },
      {
        nom: "Installation",
        texte: "Comptes, passerelle, connecteurs, revue des droits et coffre en place, tous les postes connectés.",
        livre: "Tout fonctionne avant le premier atelier.",
      },
      {
        nom: "Mise en route",
        texte: "Chaque équipe travaille sur ses propres cas.",
        livre: "Chaque équipe repart avec ses premières procédures.",
      },
      {
        nom: "Suivi",
        texte: "Des points réguliers pour partager ce qui fonctionne.",
        livre: "Les bonnes procédures servent à toute l’entreprise.",
      },
    ] satisfies Phase[],
    image: "Jean-Claude explique à une équipe réunie autour d’une table",
    recitatif:
      "L’installation précède la formation : une formation interrompue par des problèmes de connexion est une formation perdue.",
    perimetre: {
      titre: "Qui équiper ? Toutes les fonctions, dès le départ.",
      texte:
        "La valeur tient à ce que les équipes partagent : connecteurs, procédures, historique. Chaque équipe qui manque, c’est un logiciel non connecté et des procédures non écrites.",
      entetes: ["Ce que les équipes expriment", "La réponse, posée avant l’installation"],
      freins: [
        {
          frein: "La crainte pour son poste et pour le sens de son métier",
          reponse: "Montrer l’intérêt de maîtriser ces outils pour résoudre des problèmes métiers.",
        },
        {
          frein: "Chacun réinvente la roue : la même procédure refaite dans chaque équipe",
          reponse: "Un dépôt commun : savoir ce qui a été fait, et comment.",
        },
        {
          frein: "La fiabilité des données",
          reponse: "Une règle : ce qui sort de l’IA engage la personne qui le valide.",
        },
      ] satisfies Frein[],
      recitatif: "Un pilote limité à deux postes mesure l’outil, pas la plateforme.",
    },
  },

  engager: {
    etiquette: "pour commencer",
    titre: "Deux façons d’engager la démarche",
    voies: [
      {
        titre: "En autonomie",
        pour: "pour évaluer la plateforme",
        etapes: [
          "Une équipe test, avant d’étendre à toutes les fonctions",
          "Un premier connecteur prêt à l’emploi : Microsoft 365 ou Google Workspace",
          "Un référent interne désigné",
        ],
      },
      {
        titre: "Avec un accompagnement",
        pour: "pour déployer la plateforme complète",
        etapes: [
          "Cadrage avec la direction",
          "Installation de la plateforme et des postes",
          "Mise en route, fonction par fonction",
        ],
        pleine: true,
      },
    ] satisfies Voie[],
    conclusion:
      "La première voie permet d’évaluer. Elle atteint sa limite au moment de partager : connecteurs, droits, référentiel commun. C’est l’objet de la seconde.",
  },

  qui: {
    etiquette: "qui",
    titre: "Benjamin Hamon",
    role: "e-commerçant, concepteur de plateformes IA",
    photo: "/photo-benjamin.jpg",
    paragraphes: [
      "Je dirige SkyLantern, une entreprise de commerce en ligne qui conçoit et vend ses propres marques de luminaires et d’équipement d’extérieur dans toute l’Europe. Depuis fin 2025, j’ai branché Claude sur la plupart des process de l’entreprise : pas un pilote isolé, toute l’entreprise.",
      "Avec Jean-Claude CODE, je conçois et je déploie des plateformes IA dans des entreprises de la région. Ce que je propose, je l’ai d’abord fait tourner chez moi, avec ses ratés, ses ajustements et ses garde-fous.",
    ],
    badges: ["Fondateur de Jean-Claude CODE", "Dirigeant de SkyLantern", "Près de Lille"],
  },

  contact: {
    etiquette: "on se parle ?",
    titre: "Discutons.",
    texte:
      "Trente minutes en visio. Je regarde vos flux, et je vous dis si nous pouvons travailler ensemble, ou si c’est encore trop tôt. Honnête et gratuit.",
    bulle: "Le commerce sert l’humain depuis la nuit des temps. Il le servira toujours.",
    linkedin: { label: "M’écrire sur LinkedIn", href: "https://www.linkedin.com/in/benjamin-hamon-16368025/" },
    email: "contact@jeanclaudecode.fr",
    x: { label: "@PowerBenben", href: "https://x.com/PowerBenben" },
  },

  pied: {
    marque: "Jean-Claude CODE",
    phrase: "Claude Code en entreprise",
    copyright: "© 2026 Benjamin Hamon",
  },
};
