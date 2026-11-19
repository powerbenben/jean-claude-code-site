import Image from "next/image";
import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { EnteteSection } from "@/components/ui";

/** Les six niveaux de maturité, le niveau 3 (l'IA d'entreprise) mis en avant. */
export function Niveaux() {
  const n = site.niveaux;
  return (
    <section className="section nuit" aria-labelledby="titre-niveaux">
      <div className="conteneur">
        <EnteteSection etiquette={n.etiquette} titre={n.titre} intro={n.intro} id="titre-niveaux" />
        <ol className="niveaux">
          {n.liste.map((niveau) => (
            <li key={niveau.code} className={niveau.cle ? "niveau cle" : "niveau"}>
              <span className="niveau-code">{niveau.code}</span>
              <span className="niveau-nom">{t(niveau.nom)}</span>
              <span className="niveau-exemple">{t(niveau.exemple)}</span>
              {niveau.cle ? <span className="niveau-repere">{t(n.repere)}</span> : null}
            </li>
          ))}
        </ol>
        <p className="source">{t(n.source)}</p>
      </div>
    </section>
  );
}

/** Ce que l'IA fait déjà dans une PME : neuf métiers, une icône d'époque chacun. */
export function Terrain() {
  const s = site.terrain;
  return (
    <section className="section papier" aria-labelledby="titre-terrain">
      <div className="conteneur">
        <EnteteSection etiquette={s.etiquette} titre={s.titre} intro={s.intro} id="titre-terrain" />
        <ul className="taches">
          {s.taches.map((tache) => (
            <li key={tache.metier} className="case tache">
              <Image src={`/icones/jcc-${tache.icone}.png`} width={56} height={56} alt="" className="tache-icone" />
              <div>
                <h3 className="tache-metier">{tache.metier}</h3>
                <p>{t(tache.texte)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
