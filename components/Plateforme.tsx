import { site } from "@/content/site";
import { t } from "@/lib/typo";
import { EnteteSection, Picto, Recitatif } from "@/components/ui";

/** Le modèle de référence, tracé à la craie sur le tableau noir. */
export function Architecture() {
  const a = site.architecture;
  return (
    <section className="section nuit" id="architecture" aria-labelledby="titre-architecture">
      <div className="conteneur">
        <EnteteSection etiquette={a.etiquette} titre={a.titre} intro={a.intro} id="titre-architecture" />
        <figure className="tableau">
          <div className="ardoise">
            <p className="tableau-titre">{t(a.tableau)}</p>
            {a.couches.map((couche) => (
              <div key={couche.zone} className={`couche craie-${couche.craie}`}>
                <p className="zone">{`// ${couche.zone}`}</p>
                <div className="blocs">
                  {couche.blocs.map((bloc) => (
                    <div key={bloc.nom} className="bloc">
                      <Picto nom={bloc.picto} />
                      <div>
                        <p className="bloc-nom">{t(bloc.nom)}</p>
                        <p className="bloc-precision">{t(bloc.precision)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="couche craie-grise">
              <p className="zone">{`// ${a.existant.zone}`}</p>
              <ul className="outils">
                {a.existant.outils.map((outil) => (
                  <li key={outil}>{outil}</li>
                ))}
              </ul>
            </div>
          </div>
          <figcaption className="visuellement-cache">
            Schéma en cinq couches : accès, plateforme, mémoire, connexion, logiciels existants.
          </figcaption>
        </figure>
        <ul className="trois-sans">
          {a.sans.map((s) => (
            <li key={s.titre}>
              <strong>{s.titre}</strong>, {t(s.texte)}
            </li>
          ))}
        </ul>
        <Recitatif>{a.recitatif}</Recitatif>
      </div>
    </section>
  );
}

/** Trois critères pour choisir la plateforme. */
export function Choix() {
  const c = site.choix;
  return (
    <section className="section papier" aria-labelledby="titre-choix">
      <div className="conteneur">
        <EnteteSection etiquette={c.etiquette} titre={c.titre} id="titre-choix" />
        <ul className="criteres">
          {c.criteres.map((critere) => (
            <li key={critere.titre} className="case critere">
              <h3>{t(critere.titre)}</h3>
              <p className="critere-question">{t(critere.question)}</p>
              <dl>
                {critere.lignes.map((ligne) => (
                  <div key={ligne.si} className="si-alors">
                    <dt>{t(ligne.si)}</dt>
                    <dd>{t(ligne.alors)}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
        <Recitatif>{c.recitatif}</Recitatif>
      </div>
    </section>
  );
}

/** Six risques, leur parade et le point de vigilance. */
export function Securite() {
  const s = site.securite;
  return (
    <section className="section nuit" aria-labelledby="titre-securite">
      <div className="conteneur">
        <EnteteSection etiquette={s.etiquette} titre={s.titre} id="titre-securite" />
        <table className="risques">
          <thead>
            <tr>
              {s.entetes.map((entete) => (
                <th key={entete} scope="col">
                  {entete}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.risques.map((r) => (
              <tr key={r.risque}>
                <th scope="row">{t(r.risque)}</th>
                <td data-label={s.entetes[1]}>{t(r.parade)}</td>
                <td data-label={s.entetes[2]}>{t(r.vigilance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Recitatif source={s.source}>{s.recitatif}</Recitatif>
      </div>
    </section>
  );
}

/** Pourquoi maintenant : la courbe en J, le référentiel, les modèles suivants. */
export function Maintenant() {
  const m = site.maintenant;
  const visuels = [
    // Courbe en J : l'investissement creuse d'abord, le gain vient ensuite.
    <svg key="j" viewBox="0 0 220 96" className="mini" role="img" aria-label="Courbe en J">
      <line x1="4" y1="40" x2="216" y2="40" className="mini-axe" />
      <path d="M6 40 C 40 40, 52 84, 86 82 S 150 30, 214 6" className="mini-trait" />
    </svg>,
    null,
    // Marches : chaque génération de modèle hisse les mêmes procédures.
    <svg key="m" viewBox="0 0 220 96" className="mini" role="img" aria-label="Des marches qui montent">
      <path d="M6 86 H 56 V 64 H 106 V 42 H 156 V 20 H 214" className="mini-trait" />
      <circle cx="56" cy="64" r="5" className="mini-point" />
      <circle cx="106" cy="42" r="5" className="mini-point" />
      <circle cx="156" cy="20" r="5" className="mini-point" />
    </svg>,
  ];
  return (
    <section className="section papier" aria-labelledby="titre-maintenant">
      <div className="conteneur">
        <EnteteSection etiquette={m.etiquette} titre={m.titre} id="titre-maintenant" />
        <ul className="raisons">
          {m.raisons.map((raison, i) => (
            <li key={raison.titre}>
              <div className="raison-visuel">
                {raison.chiffre ? <span className="raison-chiffre">{raison.chiffre}</span> : visuels[i]}
              </div>
              <h3>{t(raison.titre)}</h3>
              <p>{t(raison.texte)}</p>
            </li>
          ))}
        </ul>
        <Recitatif source={m.source}>{m.recitatif}</Recitatif>
      </div>
    </section>
  );
}
