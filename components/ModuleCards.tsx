import { site } from "@/content/site";

export function ModuleCards() {
  const { modules } = site;
  return (
    <section id="modules" className="py-20 px-6 bg-night-2">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-sm mb-4 text-claude">{modules.label}</div>
        <h2 className="font-title text-3xl md:text-5xl mb-4 leading-[1.1]">{modules.title}</h2>
        <p className="text-base md:text-lg mb-12 max-w-3xl text-cream/75">{modules.intro}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.cards.map((card) => (
            <div
              key={card.title}
              className="card-pixel p-6 rounded-md flex flex-col bg-night"
            >
              <div className="text-4xl mb-4" aria-hidden>
                {card.icon}
              </div>
              <div className="font-pixel text-[10px] mb-2 text-claude">{card.label}</div>
              <h3 className="font-title text-xl mb-3 leading-snug">{card.title}</h3>
              <p className="text-sm leading-relaxed mb-4 text-cream/85">{card.body}</p>
              <ul className="text-xs space-y-2 mt-auto text-cream/70">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-claude">▸</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
