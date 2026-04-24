import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { HeroSection } from "@/components/ui/hero/hero-section";
import NavMenu from "@/components/ui/layout/nav-menu";
import { LogoSlider } from "@/components/ui/sections/logo-slider";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <BeamsBackground intensity="subtle" className="flex-1 flex flex-col">
        <NavMenu />
        <HeroSection
          logo={{
            url: "/company_logo.png",
            alt: "Deepblue Capital Partners Logo",
          }}
          slogan="Managing Investments. and life"
          descriptions={[
            "Deepblue Capital Partners is a forward-thinking private equity firm with 25 years of combined expertise, identifying strategic real estate opportunities across diverse asset classes.",
          ]}
          heroImage="/hero_image.jpg"
        />
        <LogoSlider />
      </BeamsBackground>
    </main>
  );
}
