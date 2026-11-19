import Image from "next/image";
import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { Etiquette } from "@/components/ui";
import volCollectif from "@/images/jc-vol-collectif.jpg";

/* Couverture : Jean-Claude et quatre collègues devenus super-héros volent au-dessus de Lille,
   la « performance collective » du titre. Le titre tient dans le ciel, à gauche ; les toits restent dégagés. */
export function Hero() {
  const h = site.hero;
  return (
    <section className="hero" id="haut" aria-labelledby="titre-hero">
      <div className="hero-contenu">
        <Etiquette>{h.etiquette}</Etiquette>
        <h1 id="titre-hero" className="hero-titre">
          {t(h.titre)}
        </h1>
        <p className="hero-sous">{t(h.sousTitre)}</p>
        <div className="actions">
          <a className="bouton bouton-principal" href={h.ctaPrincipal.href}>
            {h.ctaPrincipal.label}
          </a>
          <a className="bouton bouton-secondaire" href={h.ctaSecondaire.href}>
            {h.ctaSecondaire.label}
          </a>
        </div>
        <div className="hero-signature">
          <p className="hero-nom">{h.signature.nom}</p>
          <p>{t(h.signature.role)}</p>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src={volCollectif}
          alt={h.image}
          fill
          preload
          sizes="100vw"
          placeholder="blur"
          className="hero-img"
        />
      </div>
    </section>
  );
}
