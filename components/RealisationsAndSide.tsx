import { site, type RealisationCard } from "@/content/site";

type Accent = "claude" | "marin" | "violet";

const ACCENT_TEXT: Record<Accent, string> = {
  claude: "text-claude",
  marin: "text-marin",
  violet: "text-violet-jcc",
};

const ACCENT_BADGE: Record<Accent, string> = {
  claude: "bg-claude/15 text-claude",
  marin: "bg-marin/15 text-marin",
  violet: "bg-violet-jcc/15 text-violet-jcc",
};

function Card({ card, accent }: { card: RealisationCard; accent: Accent }) {
  return (
    <div className="card-pixel rounded-md p-5 bg-night-2">
      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
        <span className="font-title text-lg">{card.title}</span>
        <span className={`font-mono text-xs ${ACCENT_TEXT[accent]}`}>{card.tag}</span>
      </div>
      <p className="text-sm leading-relaxed text-cream/85">{card.body}</p>
    </div>
  );
}

function Block({
  badge,
  subtitle,
  cards,
  accent,
}: {
  badge: string;
  subtitle: string;
  cards: RealisationCard[];
  accent: Accent;
}) {
  return (
    <div>
      <div className={`font-pixel text-xs mb-6 inline-block px-3 py-2 rounded ${ACCENT_BADGE[accent]}`}>
        {badge}
      </div>
      <h3 className="font-title text-2xl mb-6">{subtitle}</h3>
      <div className="space-y-5">
        {cards.map((c) => (
          <Card key={c.title} card={c} accent={accent} />
        ))}
      </div>
    </div>
  );
}

export function RealisationsAndSide() {
  const { realisations } = site;
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-sm mb-4 text-claude">{realisations.label}</div>
        <h2 className="font-title text-3xl md:text-5xl mb-12 leading-[1.1]">
          {realisations.title[0]}
          {realisations.title[1] && (
            <>
              <br />
              {realisations.title[1]}
            </>
          )}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Colonne gauche : SYSTÈMES AGENTIQUES + SITES PILOTÉS PAR IA empilés */}
          <div className="space-y-12">
            <Block
              badge={realisations.agentic.badge}
              subtitle={realisations.agentic.subtitle}
              cards={realisations.agentic.cards}
              accent="claude"
            />
            <Block
              badge={realisations.sites.badge}
              subtitle={realisations.sites.subtitle}
              cards={realisations.sites.cards}
              accent="violet"
            />
          </div>

          {/* Colonne droite : PROJETS ANNEXES */}
          <div>
            <Block
              badge={realisations.sideProjects.badge}
              subtitle={realisations.sideProjects.subtitle}
              cards={realisations.sideProjects.cards}
              accent="marin"
            />
            <div className="mt-5 rounded-md p-5 border-2 border-dashed border-cream/15 text-cream/50">
              <div className="font-mono text-xs">&gt; {realisations.sideProjects.footerNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
