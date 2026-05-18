import { site } from "@/content/site";

export function CTAFinal() {
  const { cta } = site;
  return (
    <section id="cta" className="py-24 px-6 bg-night-2">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-sm mb-4 text-claude">{cta.label}</div>
        <h2 className="font-title text-4xl md:text-6xl mb-6 leading-[1.05] pixel-shadow">{cta.title}</h2>
        <p className="text-base md:text-xl mb-12 max-w-2xl mx-auto text-cream/85">{cta.body}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={cta.calendlyUrl}
            className="font-title btn-pixel inline-block px-8 py-5 text-lg md:text-xl bg-claude text-white"
          >
            📅 Réserver (Calendly)
          </a>
          <a
            href={cta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-title btn-pixel inline-block px-8 py-5 text-lg md:text-xl border-2 text-cream border-cream"
          >
            💼 LinkedIn
          </a>
          <a
            href={`mailto:${cta.email}`}
            className="font-title btn-pixel inline-block px-8 py-5 text-lg md:text-xl border-2 text-cream border-cream"
          >
            ✉️ {cta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
