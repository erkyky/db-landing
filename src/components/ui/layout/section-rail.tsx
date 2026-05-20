"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

interface SectionRailProps {
  sections: Section[];
}

export default function SectionRail({ sections }: SectionRailProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-7 lg:flex"
    >
      {sections.map((s) => {
        const active = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-500 ease-out ${
                active
                  ? "w-12 bg-[#cca885]"
                  : "w-4 bg-white/25 group-hover:w-7 group-hover:bg-white/55"
              }`}
              aria-hidden
            />
            <span
              className={`font-serif text-[11px] uppercase tracking-[0.22em] whitespace-nowrap transition-colors duration-500 ease-out ${
                active
                  ? "text-[#cca885]"
                  : "text-white/35 group-hover:text-white/70"
              }`}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
