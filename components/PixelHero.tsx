import Image from "next/image";
import { site } from "@/content/site";

export function PixelHero() {
  const { hero } = site;
  return (
    <section className="relative w-full overflow-hidden bg-night">
      <div className="relative w-full h-[560px] md:h-[680px]">
        <Image
          src="/banner-hero.jpg"
          alt="Jean-Claude CODE survolant sa ville pixelart"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ imageRendering: "pixelated", objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <div className="font-pixel text-xs md:text-sm text-claude">
            &gt; {hero.prompt} <span className="blink">_</span>
          </div>
          <h1 className="font-pixel text-4xl md:text-6xl mt-4 leading-[1.05] pixel-shadow">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-2xl font-medium text-cream">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="font-title btn-pixel inline-block px-7 py-4 text-lg md:text-xl bg-claude text-white"
            >
              &gt; {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="font-title btn-pixel inline-block px-7 py-4 text-lg md:text-xl border-2 text-cream border-cream"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
