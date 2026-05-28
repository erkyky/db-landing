"use client";

import { InfiniteSlider } from "@/components/ui/animation/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/animation/progressive-blur";

const logos = [
  { id: "jll", name: "JLL", src: "/logos/jll.webp" },
  { id: "cbre", name: "CBRE", src: "/logos/cbre.webp" },
  { id: "cushman", name: "Cushman & Wakefield", src: "/logos/cushman.webp" },
  { id: "newmark", name: "Newmark", src: "/logos/newmark.webp" },

  { id: "marcus", name: "Marcus & Millichap", src: "/logos/marcus.webp" },
  { id: "berkadia", name: "Berkadia", src: "/logos/berkadia.webp" },
  { id: "northmarq", name: "Northmarq", src: "/logos/northmarq.png" },
  { id: "greysteel", name: "Greysteel", src: "/logos/greysteel.webp" },
];

export function LogoSlider() {
  return (
    <div
      className="relative w-full"
      style={{ paddingTop: "clamp(0.75rem, 1.5vh, 2rem)", paddingBottom: "clamp(0.75rem, 1.5vh, 2rem)" }}
    >
      <p
        className="text-center font-serif uppercase tracking-[0.2em] text-white/35"
        style={{
          fontSize: "clamp(0.7rem, 0.8vw, 0.9rem)",
          marginBottom: "clamp(0.5rem, 1vh, 1.5rem)",
        }}
      >
        Trusted Partners
      </p>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(36px, 5vh, 60px)" }}
      >
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={35}
          gap={80}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center px-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={140}
                height={32}
                className="h-8 w-auto max-w-[140px] object-contain brightness-0 invert opacity-30"
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-[120px] md:w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-[120px] md:w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  );
}
