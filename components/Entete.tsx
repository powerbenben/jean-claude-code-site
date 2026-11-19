import { site } from "@/content/site";
import { t } from "@/lib/typo";

export function Entete() {
  return (
    <header className="barre">
      <div className="barre-int">
        <a href="#haut" className="barre-marque">
          Jean-Claude CODE
        </a>
        <nav aria-label="Sections du site" className="barre-nav">
          {site.nav.map((lien) => (
            <a key={lien.href} href={lien.href}>
              {t(lien.label)}
            </a>
          ))}
        </nav>
        <a href="#contact" className="bouton bouton-principal bouton-petit">
          Discutons
        </a>
      </div>
    </header>
  );
}
