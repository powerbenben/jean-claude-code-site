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
    prompt: "~/claude-enterprise$",
    titleLine1: "JEAN-CLAUDE",
    titleLine2: "CODE",
    subtitle:
      "Dirigeant de PME, j'ai implémenté l'IA au cœur de mon entreprise. Je vous aide à l'ancrer dans la vôtre.",
    ctaPrimary: { label: "Discutons", href: "#cta" },
    ctaSecondary: { label: "Voir l'offre", href: "#modules" },
  },

  realisations: {
    label: "// cas d'usages",
    title: ["Testé et validé dans une vraie entreprise."],
    agentic: {
      badge: "SYSTÈMES AGENTIQUES",
      subtitle: "Les agents qui tournent au quotidien chez Rubee",
      cards: [
        {
          title: "Gestionnaire Google Ads",
          tag: "multi-marques",
          body: "Un agent pilote les campagnes Shopping, Search et PMax sur trois marques. Bids, négatifs, allocation budgétaire, suivi TROAS par catégorie. Optimisation continue, validation humaine sur les changements critiques.",
        },
        {
          title: "Gestionnaire Amazon Ads",
          tag: "FR + DE",
          body: "Agent dédié aux Sponsored Products et Sponsored Brands sur Amazon FR et DE. Pilote ROAS, part de voix organique, exclusions et harvesting des mots-clés gagnants.",
        },
        {
          title: "Gestionnaire de factures",
          tag: "import auto",
          body: "Un agent récupère les factures fournisseurs reçues par email, depuis Amazon Seller Central et Amazon Ads. Extraction, imputation comptable, rapprochement bancaire — prêt pour validation.",
        },
        {
          title: "Prospection B2B",
          tag: "outbound",
          body: "Pipeline complet : extraction de leads B2B qualifiés, génération d'emails personnalisés, envoi séquencé et suivi des réponses. Chaque étape tracée, jamais à l'aveugle.",
        },
        {
          title: "Agents de production",
          tag: "supply chain",
          body: "Chaîne d'agents qui suit chaque commande fournisseur de la production en Asie jusqu'à la réception en entrepôt : étapes production, transport maritime, déclarations douanières, contrôles à l'arrivée.",
        },
        {
          title: "Codir",
          tag: "hebdo",
          body: "Comité de direction hebdomadaire animé par un agent : analyse des KPI consolidés, identification des points d'attention, génération de l'ordre du jour, compte-rendu final.",
        },
      ] satisfies RealisationCard[],
    },
    sites: {
      badge: "SITES PILOTÉS PAR IA",
      subtitle: "Conçus, codés et maintenus sous Claude Code",
      cards: [
        {
          title: "Brumeaux.fr",
          tag: "Claude Code",
          body: "Le site e-commerce Brumeaux (matériel de plein air) tourne sous Claude Code : modifications, fiches produits, traductions, règles logistiques. Sans prestataire externe.",
        },
        {
          title: "jeanclaudecode.fr",
          tag: "Claude Code",
          body: "Le site que vous lisez. Pixel-art, code Next.js, déploiement Vercel — tout sous Claude Code, de l'idée au nom de domaine.",
        },
      ] satisfies RealisationCard[],
    },
    sideProjects: {
      badge: "PROJETS ANNEXES",
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
    title: ["Benjamin Hamon,", "concepteur de système IA."],
    photoPath: "/photo-benjamin.jpg" as string | null,
    photoFallback: "👨‍💻",
    paragraphs: [
      "Je dirige Rubee, PME e-commerce de 5 personnes opérant 3 sites et 5 marketplaces européennes. Depuis fin 2025, je câble Claude Code dans chaque process de ma boîte — pas un pilote isolé, une saturation complète.",
      "Ma méthode est terrain. Ce que je propose aux dirigeants de PME, je l'ai d'abord testé en production chez moi — avec ses ratés, ses ajustements, ses garde-fous. Pas un POC, pas un tuto : une boîte qui tourne.",
    ],
    badges: [
      { label: "FONDATEUR JCC", variant: "claude" },
      { label: "DIRIGEANT RUBEE", variant: "marin" },
      { label: "27 AGENTS IA EN PROD", variant: "violet" },
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
