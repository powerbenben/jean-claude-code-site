import Image, { getImageProps } from "next/image";
import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { Etiquette } from "@/components/ui";
import volCollectif from "@/images/jc-vol-collectif.jpg";
import volCollectifMobile from "@/images/jc-vol-collectif-mobile.jpg";
import poingMobile from "@/images/jc-vol-collectif-mobile-poing.png";

/* Couverture : Jean-Claude et quatre collègues devenus super-héros volent au-dessus de Lille,
   la « performance collective » du titre. Sur ordinateur, le titre tient dans le ciel, à gauche.
   Sur téléphone, une recomposition carrée (marque/scripts/recompose.py) : le groupe agrandi sur
   toute la largeur du ciel, Jean-Claude un peu plus grand, son poing qui sort de la case par-dessus
   la barre du haut (calque à part). Le navigateur ne télécharge que l'image de son écran. */
export function Hero() {
  const h = site.hero;
  const commun = { alt: h.image, fill: true, sizes: "100vw" } as const;
  const {
    props: { srcSet: srcOrdinateur },
  } = getImageProps({ ...commun, src: volCollectif });
  const { props: mobile } = getImageProps({
    ...commun,
    src: volCollectifMobile,
    loading: "eager",
    fetchPriority: "high",
  });
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
        <picture>
          <source media="(min-width: 900px)" srcSet={srcOrdinateur} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- props de getImageProps, alt compris */}
          <img {...mobile} className="hero-img" />
        </picture>
        {/* servi tel quel (1024 x 27 px) : un redimensionnement arrondirait sa hauteur et décalerait le poing */}
        <Image src={poingMobile} alt="" unoptimized loading="eager" className="hero-poing" />
      </div>
    </section>
  );
}
