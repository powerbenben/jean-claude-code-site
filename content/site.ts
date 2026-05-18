/**
 * Tout le contenu textuel du site Jean-Claude CODE.
 *
 * Pour modifier un texte, édite ce fichier et redéploie (Vercel auto-rebuild
 * en ~30s sur push main). Schéma typé : impossible de casser une section.
 */

export type RealisationCard = {
  title: string;
  tag: string;
  body: string;
};

export type ModuleCard = {
  icon: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

export type Badge = {
  label: string;
  variant: "claude" | "marin" | "violet";
};

export const site = {
  hero: {
    prompt: "jcc@rubee:~$",
    titleLine1: "JEAN-CLAUDE",
    titleLine2: "CODE",
    subtitle:
      "Le dirigeant de PME français qui a poussé Claude Code plus loin que 99% des devs. Praticien, pas influenceur.",
    ctaPrimary: { label: "Discutons", href: "#cta" },
    ctaSecondary: { label: "Voir l'offre", href: "#modules" },
  },

  realisations: {
    label: "// ce que j'ai construit",
    title: ["J'ai d'abord fait,", "chez moi."],
    rubee: {
      badge: "CHEZ RUBEE",
      subtitle: "Les use cases en production",
      cards: [
        {
          title: "Google Ads",
          tag: "multi-marques",
          body: "Pilotage quotidien des campagnes Shopping, Search et PMax sur trois marques. Ajustement bids, mots-clés négatifs, allocation budgétaire, suivi TROAS par catégorie.",
        },
        {
          title: "Amazon Ads",
          tag: "FR + DE",
          body: "Optimisation des campagnes Sponsored Products et Sponsored Brands sur les marketplaces Amazon FR et DE. Pilotage du ROAS et de la part de voix organique.",
        },
        {
          title: "Achats fournisseurs",
          tag: "Asie",
          body: "Gestion du réassort fournisseurs Asie : analyse du besoin par SKU, optimisation du remplissage des conteneurs 40' et 40' High Cube, suivi paiements et arrivées port.",
        },
        {
          title: "Brumeaux.fr",
          tag: "e-commerce",
          body: "Maintenance et évolution du site e-commerce Brumeaux (matériel de plein air) : fiches produits, traductions, optimisation de conversion, restrictions logistiques par produit.",
        },
      ] satisfies RealisationCard[],
    },
    side: {
      badge: "SIDE PROJECTS",
      subtitle: "Ce que je construis à côté",
      cards: [
        {
          title: "RadioBot",
          tag: "agent autonome",
          body: "Bulletin radio IA de 5 minutes généré chaque matin : veille IA mondiale, écriture du script, synthèse vocale, livraison en MP3. Pipeline end-to-end sans intervention humaine.",
        },
        {
          title: "CE-admin",
          tag: "console web",
          body: "Console web d'administration pour Claude Enterprise : gestion multi-tenant, MCP gateway tenant-aware, déploiement d'agents et observabilité Langfuse. Le socle qui orchestre plusieurs clients sur la même infrastructure.",
        },
      ] satisfies RealisationCard[],
      footerNote: "et d'autres en gestation.",
    },
  },

  modules: {
    label: "// l'offre",
    title: "3 modules, 1 socle.",
    intro: "Packagés pour PME de 5 à 50 personnes. Vendables progressivement, sur la même infrastructure technique.",
    cards: [
      {
        icon: "🏛️",
        label: "MODULE 1 • WIKI",
        title: "Wiki d'entreprise",
        body: "Toute la connaissance opérationnelle de la boîte devient lisible par tes équipes et par l'IA. Décisions, doctrine, mémoires versionnées.",
        bullets: [
          "10 types de savoirs structurés",
          "Décisions versionnées en YAML",
          "Interrogeable par chaque employé",
        ],
      },
      {
        icon: "🤝",
        label: "MODULE 2 • DIRECTION",
        title: "Assistant Direction",
        body: "Tour de contrôle du dirigeant : flash quotidien, tri mail intelligent, suivi KPI, briefs réunions. Le co-pilote qui a tout le contexte.",
        bullets: ["Récap quotidien automatique", "Triage mail + drafts validés", "Dashboard KPI consolidé"],
      },
      {
        icon: "🏭",
        label: "MODULE 3 • STUDIO",
        title: "Studio d'agents métier",
        body: "Tes processus critiques redessinés en boucles fermées avec agents IA supervisés. Chaque agent mesure son outcome et s'améliore.",
        bullets: ["Agents métier sur tes flux clés", "Eval suite continue (Promptfoo)", "Champion interne formé"],
      },
    ] satisfies ModuleCard[],
  },

  about: {
    label: "// qui",
    title: ["Benjamin Hamon,", "dirigeant praticien."],
    photoPath: null as string | null, // remplacer par "/photo-benjamin.jpg" quand dispo
    photoFallback: "👨‍💻",
    paragraphs: [
      "Dirigeant de Rubee, PME e-commerce. J'ai construit un système complet d'agents Claude Code pour faire tourner ma boîte : récap quotidien, optimisation des pubs, tri mail, agents métier.",
      "Pas un dev qui fait des tutos. Pas un influenceur IA. Un entrepreneur qui a fait pour de vrai, et qui transmet la méthode aux PME qui veulent passer de l'IA-gadget à l'IA-systémique.",
    ],
    badges: [
      { label: "CLAUDE PARTNER NETWORK", variant: "claude" },
      { label: "DIRIGEANT RUBEE", variant: "marin" },
      { label: "PRATICIEN PME", variant: "violet" },
    ] satisfies Badge[],
  },

  cta: {
    label: "// on se parle ?",
    title: "Discutons.",
    body: "30 minutes de visio. Je regarde tes flux. Je te dis si on peut travailler ensemble, ou si c'est encore trop tôt. Honnête, gratuit.",
    calendlyUrl: "#", // à remplacer par le vrai lien Calendly
    linkedinUrl: "https://www.linkedin.com/in/benjaminhamon",
    email: "contact@jeanclaudecode.fr",
  },

  footer: {
    twitterHandle: "@PowerBenben",
    twitterUrl: "https://x.com/PowerBenben",
    email: "contact@jeanclaudecode.fr",
    copyright: "© 2026 — Claude Code en entreprise",
  },
};
