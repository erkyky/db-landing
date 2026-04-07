import { BeamsBackground } from "@/components/ui/beams-background";
import { HeroSection } from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <BeamsBackground intensity="subtle" className="flex-1 flex flex-col">
        <HeroSection
          logo={{
            url: "/company_logo.png",
            alt: "Deepblue Capital Partners Logo",
          }}
          slogan="Managing Investments. and life"
          descriptions={[
            "Deepblue Capital Partners is a forward-thinking private equity firm dedicated to strategic real estate investments.",
            "With 25 years of industry expertise combined, Deepblue Capital Partners identifies and capitalizes on opportunities across diverse real estate asset classes.",
          ]}
          cta={{
            label: "Learn more:",
            href: "mailto:investors+prosper@deepbluepartners.co?subject=Investment%20Interest&body=Hello%20Deepblue%20Capital%20Partners%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20investing%20in%20your%20fund.%20Please%20send%20me%20information%20about%20current%20investment%20opportunities.%0A%0AThank%20you.",
            displayText: "investors@deepbluepartners.co",
          }}
          heroImage="/hero_image.jpg"
        />
      </BeamsBackground>
      <Footer />
    </main>
  );
}
