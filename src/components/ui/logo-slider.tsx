"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  { id: "jll", name: "JLL", src: "/logos/jll.png" },
  { id: "cbre", name: "CBRE", src: "/logos/cbre.png" },
  { id: "cushman", name: "Cushman & Wakefield", src: "/logos/cushman.png" },
  { id: "newmark", name: "Newmark", src: "/logos/newmark.png" },

  { id: "marcus", name: "Marcus & Millichap", src: "/logos/marcus.png" },
  { id: "berkadia", name: "Berkadia", src: "/logos/berkadia.webp" },
  { id: "northmarq", name: "Northmarq", src: "/logos/northmarq.png" },
  { id: "greysteel", name: "Greysteel", src: "/logos/greysteel.webp" },
];

export function LogoSlider() {
  return (
    <div className="relative w-full py-8 mt-auto">
      <p className="text-center font-serif text-sm uppercase tracking-[0.2em] text-white/35 mb-6">
        Trusted Partners
      </p>
      <div className="relative h-[50px] w-full overflow-hidden">
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
                className="h-8 w-auto max-w-[140px] object-contain brightness-0 invert opacity-30"
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[120px] md:w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[120px] md:w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  );
}
