/**
 * Typographie française au rendu : espace insécable avant : ; ? ! », après « et entre les
 * milliers (1 100). Le contenu reste lisible dans content/site.ts, sans caractère invisible.
 */
const INSECABLE = " ";

export function t(texte: string): string {
  return texte
    .replace(/ ([:;?!»])/g, `${INSECABLE}$1`)
    .replace(/« /g, `«${INSECABLE}`)
    .replace(/(\d) (\d{3})\b/g, `$1${INSECABLE}$2`);
}
