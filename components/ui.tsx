import { t } from "@/lib/typo";

/** L'étiquette « // section » tapée à la machine, au-dessus de chaque titre. */
export function Etiquette({ children }: { children: string }) {
  return <p className="etiquette">{`// ${children}`}</p>;
}

/** Étiquette + titre d'affiche + introduction facultative. */
export function EnteteSection({
  etiquette,
  titre,
  intro,
  id,
}: {
  etiquette: string;
  titre: string;
  intro?: string;
  id?: string;
}) {
  return (
    <header className="entete-section">
      <Etiquette>{etiquette}</Etiquette>
      <h2 className="titre-section" id={id}>
        {t(titre)}
      </h2>
      {intro ? <p className="intro">{t(intro)}</p> : null}
    </header>
  );
}

/** Le récitatif : la case de texte de la BD, qui porte la conclusion d'une section. */
export function Recitatif({ children, source }: { children: string; source?: string }) {
  return (
    <div className="recitatif">
      <p>{t(children)}</p>
      {source ? <p className="recitatif-source">{t(source)}</p> : null}
    </div>
  );
}

/** Pictogramme à la craie (fond transparent), pour le tableau noir. */
export function Picto({ nom, taille = 40 }: { nom: string; taille?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="picto" src={`/craie/craie-${nom}.png`} width={taille} height={taille} alt="" aria-hidden="true" />
  );
}
