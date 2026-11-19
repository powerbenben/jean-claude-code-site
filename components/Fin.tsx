import Image from "next/image";
import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { EnteteSection, Etiquette } from "@/components/ui";
import photo from "@/images/photo-benjamin.jpg";
import salut from "@/images/jc-salut.png";

/** Deux façons d'engager la démarche. */
export function Engager() {
  const e = site.engager;
  return (
    <section className="section nuit" aria-labelledby="titre-engager">
      <div className="conteneur">
        <EnteteSection etiquette={e.etiquette} titre={e.titre} id="titre-engager" />
        <div className="voies">
          {e.voies.map((voie) => (
            <div key={voie.titre} className={voie.pleine ? "case voie pleine" : "case voie"}>
              <h3>{voie.titre}</h3>
              <p className="voie-pour">{t(voie.pour)}</p>
              <ol>
                {voie.etapes.map((etape) => (
                  <li key={etape}>{t(etape)}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="conclusion">{t(e.conclusion)}</p>
      </div>
    </section>
  );
}

/** Benjamin Hamon, à côté de Jean-Claude, jamais à sa place. */
export function Qui() {
  const q = site.qui;
  return (
    <section className="section papier" id="qui" aria-labelledby="titre-qui">
      <div className="conteneur qui-grille">
        <figure className="case qui-photo">
          <Image src={photo} alt="Benjamin Hamon" sizes="(min-width: 900px) 340px, 70vw" className="qui-img" />
        </figure>
        <div>
          <Etiquette>{q.etiquette}</Etiquette>
          <h2 className="titre-section" id="titre-qui">
            {q.titre}
          </h2>
          <p className="qui-role">{t(q.role)}</p>
          {q.paragraphes.map((p) => (
            <p key={p.slice(0, 24)} className="qui-texte">
              {t(p)}
            </p>
          ))}
          <ul className="badges">
            {q.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Le contact, et Jean-Claude qui salue. */
export function Contact() {
  const c = site.contact;
  return (
    <section className="section nuit contact" id="contact" aria-labelledby="titre-contact">
      <div className="conteneur contact-grille">
        <div className="contact-texte">
          <EnteteSection etiquette={c.etiquette} titre={c.titre} intro={c.texte} id="titre-contact" />
          <div className="actions">
            <a className="bouton bouton-principal" href={c.linkedin.href} target="_blank" rel="noopener noreferrer">
              {c.linkedin.label}
            </a>
            <a className="bouton bouton-secondaire" href={`mailto:${c.email}`}>
              {c.email}
            </a>
          </div>
        </div>
        <div className="contact-scene">
          <p className="bulle">{t(c.bulle)}</p>
          <Image src={salut} alt="Jean-Claude salue" sizes="(min-width: 900px) 300px, 50vw" className="contact-salut" />
        </div>
      </div>
    </section>
  );
}

/** Le pied : la bande marinière, la marque et les liens. */
export function Pied() {
  const p = site.pied;
  const c = site.contact;
  return (
    <footer className="pied">
      <div className="mariniere" aria-hidden="true" />
      <div className="conteneur pied-int">
        <div>
          <p className="pied-marque">{p.marque}</p>
          <p className="prompt">
            {"> claude "}
            <span className="curseur">_</span>
          </p>
        </div>
        <ul className="pied-liens">
          <li>
            <a href={c.linkedin.href} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={c.x.href} target="_blank" rel="noopener noreferrer">
              X {c.x.label}
            </a>
          </li>
          <li>
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </li>
        </ul>
        <p className="pied-copyright">
          {p.copyright}, {p.phrase}
        </p>
      </div>
    </footer>
  );
}
