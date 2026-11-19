import { Entete } from "@/components/Entete";
import { Hero } from "@/components/Hero";
import { Niveaux, Terrain } from "@/components/Parcours";
import { Architecture, Choix, Securite, Maintenant } from "@/components/Plateforme";
import { Agents, Demarche } from "@/components/Agents";
import { Engager, Qui, Contact, Pied } from "@/components/Fin";

/* L'ordre suit la présentation du 19/11 : le constat, l'architecture, le choix, la sécurité,
   pourquoi maintenant, les agents, la démarche ; l'offre et le contact en dernier. */
export default function Accueil() {
  return (
    <>
      <Entete />
      <main>
        <Hero />
        <Niveaux />
        <Terrain />
        <Architecture />
        <Choix />
        <Securite />
        <Maintenant />
        <Agents />
        <Demarche />
        <Engager />
        <Qui />
        <Contact />
      </main>
      <Pied />
    </>
  );
}
