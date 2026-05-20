import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { HeroSection } from "@/components/ui/hero/hero-section";
import NavMenu from "@/components/ui/layout/nav-menu";
import { LogoSlider } from "@/components/ui/sections/logo-slider";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col md:h-screen md:overflow-hidden">
      <BeamsBackground intensity="subtle" className="flex h-full flex-1 flex-col">
        <NavMenu />
        <HeroSection
          logo={{
            url: "/company_logo.png",
            alt: "Deepblue Capital Partners Logo",
          }}
          slogan="Managing Investments. and life"
          descriptions={[
            "Deepblue Capital Partners is a forward-thinking private equity firm with 27 years of combined expertise, identifying strategic real estate opportunities across diverse asset classes.",
          ]}
          heroImage="/hero_image.jpg"
        />
        <LogoSlider />
        <p
          className="text-center font-serif text-white/22"
          style={{
            fontSize: "clamp(0.7rem, 0.8vw, 0.95rem)",
            paddingBottom: "clamp(0.5rem, 1vh, 1.5rem)",
          }}
        >
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </main>
  );
}
