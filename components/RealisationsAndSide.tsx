import { site, type RealisationCard } from "@/content/site";

function Card({ card, accent }: { card: RealisationCard; accent: "claude" | "marin" }) {
  const accentColor = accent === "claude" ? "text-claude" : "text-marin";
  return (
    <div className="card-pixel rounded-md p-5 bg-night-2">
      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
        <span className="font-title text-lg">{card.title}</span>
        <span className={`font-mono text-xs ${accentColor}`}>{card.tag}</span>
      </div>
      <p className="text-sm leading-relaxed text-cream/85">{card.body}</p>
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
          <br />
          {realisations.title[1]}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Col 1 : CHEZ RUBEE */}
          <div>
            <div className="font-pixel text-xs mb-6 inline-block px-3 py-2 rounded bg-claude/15 text-claude">
              {realisations.rubee.badge}
            </div>
            <h3 className="font-title text-2xl mb-6">{realisations.rubee.subtitle}</h3>
            <div className="space-y-5">
              {realisations.rubee.cards.map((c) => (
                <Card key={c.title} card={c} accent="claude" />
              ))}
            </div>
          </div>

          {/* Col 2 : SIDE PROJECTS */}
          <div>
            <div className="font-pixel text-xs mb-6 inline-block px-3 py-2 rounded bg-marin/15 text-marin">
              {realisations.side.badge}
            </div>
            <h3 className="font-title text-2xl mb-6">{realisations.side.subtitle}</h3>
            <div className="space-y-5">
              {realisations.side.cards.map((c) => (
                <Card key={c.title} card={c} accent="marin" />
              ))}
              <div className="rounded-md p-5 border-2 border-dashed border-cream/15 text-cream/50">
                <div className="font-mono text-xs">&gt; {realisations.side.footerNote}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
