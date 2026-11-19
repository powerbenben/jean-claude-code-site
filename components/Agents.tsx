import Image from "next/image";
import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { EnteteSection, Picto, Recitatif } from "@/components/ui";
import ordinateur from "@/images/jc-ordinateur.jpg";
import equipe from "@/images/jc-equipe.jpg";

/** Les agents en service, puis le schéma de demain au tableau noir. */
export function Agents() {
  const a = site.agents;
  const d = a.demain;
  return (
    <section className="section scene" id="agents" aria-labelledby="titre-agents">
      <div className="conteneur">
        <div className="agents-entete">
          <EnteteSection etiquette={a.etiquette} titre={a.titre} intro={a.intro} id="titre-agents" />
          <Image
            src={ordinateur}
            alt="Jean-Claude travaille à la machine à l’étoile, l’IA de l’univers de la marque"
            sizes="(min-width: 900px) 50vw, 100vw"
            quality={90}
            className="agents-image"
          />
        </div>
        <div className="familles">
          {a.familles.map((famille) => (
            <div key={famille.titre} className="famille">
              <h3>{t(famille.titre)}</h3>
              <ul>
                {famille.agents.map((agent) => (
                  <li key={agent.nom}>
                    <b>{t(agent.nom)}</b>
                    {t(agent.role)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <figure className="tableau tableau-demain">
          <div className="ardoise">
            <h3 className="tableau-titre">{t(d.titre)}</h3>
            <p className="bandeau-outils">{t(d.outils)}</p>
            <ol className="flux">
              {d.etapes.map((etape) => (
                <li key={etape.nom} className={`bloc craie-${etape.craie}`}>
                  <Picto nom={etape.picto} />
                  <div>
                    <p className="bloc-nom">{t(etape.nom)}</p>
                    <p className="bloc-precision">{t(etape.precision)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="bloc bloc-memoire craie-blanche">
              <Picto nom="memoire" />
              <div>
                <p className="bloc-nom">{t(d.memoire.nom)}</p>
                <p className="bloc-precision">{t(d.memoire.precision)}</p>
              </div>
            </div>
          </div>
          <figcaption className="visuellement-cache">
            Schéma : demandes, file de tâches, agents d’exécution, agent de contrôle, tâche terminée ; le dépôt Git
            garde les règles apprises.
          </figcaption>
        </figure>
        <Recitatif>{d.recitatif}</Recitatif>
      </div>
    </section>
  );
}

/** Les quatre phases, Jean-Claude qui forme l'équipe, puis la conduite du changement. */
export function Demarche() {
  const d = site.demarche;
  const p = d.perimetre;
  return (
    <section className="section papier" id="demarche" aria-labelledby="titre-demarche">
      <div className="conteneur">
        <EnteteSection etiquette={d.etiquette} titre={d.titre} id="titre-demarche" />
        <div className="demarche-grille">
          <ol className="phases">
            {d.phases.map((phase, i) => (
              <li key={phase.nom}>
                <span className="phase-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{phase.nom}</h3>
                  <p>{t(phase.texte)}</p>
                  <p className="phase-livre">{t(phase.livre)}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="case case-image">
            <Image src={equipe} alt={d.image} sizes="(min-width: 900px) 45vw, 100vw" className="case-img" />
          </figure>
        </div>
        <Recitatif>{d.recitatif}</Recitatif>

        <div className="perimetre">
          <h3 className="sous-titre">{t(p.titre)}</h3>
          <p className="intro">{t(p.texte)}</p>
          <table className="freins">
            <thead>
              <tr>
                {p.entetes.map((entete) => (
                  <th key={entete} scope="col">
                    {t(entete)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.freins.map((f) => (
                <tr key={f.frein}>
                  <th scope="row">{t(f.frein)}</th>
                  <td data-label={p.entetes[1]}>{t(f.reponse)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Recitatif>{p.recitatif}</Recitatif>
        </div>
      </div>
    </section>
  );
}
