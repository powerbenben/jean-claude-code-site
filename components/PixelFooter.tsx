import { site } from "@/content/site";

export function PixelFooter() {
  const { footer } = site;
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
        <div className="font-pixel text-claude">
          &gt; JEAN-CLAUDE CODE <span className="blink">_</span>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <a href={footer.twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {footer.twitterHandle}
          </a>
          <a href={`mailto:${footer.email}`} className="hover:text-white">
            {footer.email}
          </a>
          <a href="#" className="hover:text-white">
            Mentions légales
          </a>
        </div>
        <div>{footer.copyright}</div>
      </div>
    </footer>
  );
}
