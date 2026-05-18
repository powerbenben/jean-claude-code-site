import Image from "next/image";
import { site } from "@/content/site";

const badgeStyle = {
  claude: "bg-claude/20 text-claude",
  marin: "bg-marin/20 text-marin",
  violet: "bg-violet-jcc/20 text-[#B8A4F5]",
} as const;

export function AboutMe() {
  const { about } = site;
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-sm mb-4 text-claude">{about.label}</div>
        <h2 className="font-title text-3xl md:text-5xl mb-10 leading-[1.1]">
          {about.title[0]}
          <br />
          {about.title[1]}
        </h2>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="card-pixel rounded-md overflow-hidden bg-night-2 aspect-square relative">
              {about.photoPath ? (
                <Image src={about.photoPath} alt="Benjamin Hamon" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {about.photoFallback}
                </div>
              )}
            </div>
            {!about.photoPath && (
              <div className="mt-4 font-mono text-xs text-cream/50">[photo réelle à venir]</div>
            )}
          </div>
          <div className="md:col-span-2 space-y-4">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base md:text-lg leading-relaxed ${i > 0 ? "text-cream/85" : ""}`}
              >
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-4">
              {about.badges.map((b) => (
                <span
                  key={b.label}
                  className={`font-pixel text-[10px] px-3 py-2 rounded ${badgeStyle[b.variant]}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
