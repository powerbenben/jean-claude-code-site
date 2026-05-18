import { PixelHero } from "@/components/PixelHero";
import { RealisationsAndSide } from "@/components/RealisationsAndSide";
import { ModuleCards } from "@/components/ModuleCards";
import { AboutMe } from "@/components/AboutMe";
import { CTAFinal } from "@/components/CTAFinal";
import { PixelFooter } from "@/components/PixelFooter";

export default function Home() {
  return (
    <>
      <PixelHero />
      <RealisationsAndSide />
      <ModuleCards />
      <AboutMe />
      <CTAFinal />
      <PixelFooter />
    </>
  );
}
