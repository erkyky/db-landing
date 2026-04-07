"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BadgeItem {
  emoji: string;
  title: string;
  subtitle: string;
}

interface StatItem {
  value: string;
  label: string;
}

export interface CinematicHeroProps {
  eyebrow: string;
  headline: string;
  subtitle: string;
  stats: StatItem[];
  badges: BadgeItem[];
  ctaHref: string;
  ctaLabel: string;
  children?: ReactNode;
  className?: string;
}

const HERO_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.04; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .hero-grid-bg {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .stat-gradient-text {
    background: linear-gradient(135deg, #cca885 0%, #d4b896 50%, #78abaf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
  }

  .text-hero-glow {
    text-shadow: 0 8px 32px rgba(204,168,133,0.15), 0 2px 8px rgba(204,168,133,0.08);
  }

  .premium-card {
    background: linear-gradient(145deg, #162C6D 0%, #0A101D 100%);
    box-shadow:
      0 40px 100px -20px rgba(0, 0, 0, 0.9),
      0 20px 40px -20px rgba(0, 0, 0, 0.8),
      inset 0 1px 2px rgba(255, 255, 255, 0.15),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .card-sheen-layer {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.05) 0%, transparent 40%);
    mix-blend-mode: screen;
  }

  .floating-glass-badge {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.08),
      0 20px 40px -12px rgba(0, 0, 0, 0.7),
      inset 0 1px 1px rgba(255,255,255,0.15);
  }

  .btn-cta-light {
    background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
    color: #0F172A;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-cta-light:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }

  .btn-cta-gold {
    background: linear-gradient(180deg, #cca885 0%, #b8956f 100%);
    color: #0d121a;
    box-shadow: 0 0 0 1px rgba(204,168,133,0.3), 0 2px 4px rgba(0,0,0,0.2), 0 12px 24px -4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.15);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-cta-gold:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 1px rgba(204,168,133,0.4), 0 6px 12px -2px rgba(0,0,0,0.3), 0 20px 32px -6px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.15);
  }
`;

export function CinematicHero({
  eyebrow,
  headline,
  subtitle,
  stats,
  badges,
  ctaHref,
  ctaLabel,
  children,
  className,
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // Mouse interaction for card sheen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // GSAP scroll timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(".hero-eyebrow", { autoAlpha: 0, y: 30 });
      gsap.set(".hero-headline", { autoAlpha: 0, y: 60, scale: 0.9, filter: "blur(16px)" });
      gsap.set(".hero-subtitle", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".hero-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".hero-stat-group", ".hero-badge", ".hero-card-inner"], { autoAlpha: 0 });
      gsap.set(".hero-cta-wrapper", { autoAlpha: 0, scale: 0.85, filter: "blur(24px)" });

      // Intro animation (not scroll-driven)
      const introTl = gsap.timeline({ delay: 0.2 });
      introTl
        .to(".hero-eyebrow", { duration: 1, autoAlpha: 1, y: 0, ease: "power3.out" })
        .to(".hero-headline", { duration: 1.6, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", ease: "expo.out" }, "-=0.6")
        .to(".hero-subtitle", { duration: 1.2, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=0.8");

      if (isMobile) {
        // On mobile: just fade in card content without pinning
        gsap.to(".hero-card", { y: 0, autoAlpha: 1, duration: 1, delay: 1.5, ease: "power3.out" });
        gsap.to(".hero-card-inner", { autoAlpha: 1, duration: 0.8, delay: 2, ease: "power2.out" });
        gsap.to(".hero-stat-group", { autoAlpha: 1, duration: 0.8, delay: 2.2, stagger: 0.15, ease: "power2.out" });
        gsap.to(".hero-badge", { autoAlpha: 1, duration: 0.6, delay: 2.5, stagger: 0.1, ease: "back.out(1.2)" });
        return;
      }

      // Desktop scroll timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        // Phase 1: Hero text fades/blurs out as card rises
        .to([".hero-text-wrapper", ".hero-grid-bg"], {
          scale: 1.1, filter: "blur(16px)", opacity: 0.15, ease: "power2.inOut", duration: 2,
        }, 0)
        .to(".hero-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)

        // Phase 2: Card expands
        .to(".hero-card", {
          width: "100%", height: "100%", borderRadius: "0px",
          ease: "power3.inOut", duration: 1.5,
        })

        // Phase 3: Card inner content reveals
        .to(".hero-card-inner", { autoAlpha: 1, ease: "power2.out", duration: 1 }, "-=0.5")

        // Stats cycle in
        .fromTo(".hero-stat-group",
          { y: 60, autoAlpha: 0, scale: 0.9 },
          { y: 0, autoAlpha: 1, scale: 1, stagger: 0.3, ease: "expo.out", duration: 1.5 },
          "-=0.5"
        )

        // Hold for reading
        .to({}, { duration: 1.5 })

        // Floating badges
        .fromTo(".hero-badge",
          { y: 80, autoAlpha: 0, scale: 0.75, rotationZ: -8 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.3)", duration: 1.2, stagger: 0.2 },
        )

        // Hold for reading
        .to({}, { duration: 2 })

        // Phase 4: Card content fades, card shrinks, CTA appears
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".hero-cta-wrapper", { autoAlpha: 1 })
        .to([".hero-stat-group", ".hero-badge", ".hero-card-inner"], {
          scale: 0.9, y: -30, autoAlpha: 0, ease: "power3.in", duration: 1, stagger: 0.05,
        })
        .to(".hero-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut", duration: 1.5,
        }, "pullback")
        .to(".hero-cta-wrapper", {
          scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.5,
        }, "pullback")

        // Phase 5: Card exits
        .to(".hero-card", {
          y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5,
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#0d121a] text-white font-serif antialiased",
        className
      )}
      style={{ perspective: "1500px" }}
    >
      <style dangerouslySetInnerHTML={{ __html: HERO_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="hero-grid-bg absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* Hero Text Layer */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-6 will-change-transform">
        <p className="hero-eyebrow gsap-reveal mb-6 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
          {eyebrow}
        </p>
        <h1 className="hero-headline gsap-reveal text-hero-glow max-w-5xl text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl lg:text-8xl xl:text-[7rem]">
          {headline}
        </h1>
        <p className="hero-subtitle gsap-reveal mt-8 max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">
          {subtitle}
        </p>
      </div>

      {/* CTA Layer (hidden initially, revealed during scroll) */}
      <div className="hero-cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-6 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-hero-glow">
          Ready to explore the thesis?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/50 md:text-xl font-light leading-relaxed">
          We welcome conversations with aligned investors who value transparency and execution discipline.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <a
            href={ctaHref}
            className="btn-cta-gold flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-sans text-base font-semibold uppercase tracking-[0.15em]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      {/* Deep Blue Card Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={cardRef}
          className="hero-card premium-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen-layer" aria-hidden="true" />

          {/* Card Content */}
          <div className="hero-card-inner relative w-full h-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center z-10">

            {children ? (
              children
            ) : (
              <>
                {/* Oversized cycling stats */}
                <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`hero-stat-group gsap-reveal flex flex-col items-center text-center ${i > 0 ? "hidden md:flex" : ""}`}
                    >
                      <span className="stat-gradient-text text-7xl font-extrabold tracking-tighter md:text-8xl lg:text-[10rem] leading-none">
                        {stat.value}
                      </span>
                      <span className="mt-3 text-base font-sans uppercase tracking-[0.25em] text-white/40 md:text-lg">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Floating Badges */}
                <div className="absolute inset-0 pointer-events-none">
                  {badges.map((badge, i) => {
                    const positions = [
                      "top-8 left-6 md:top-16 md:left-16",
                      "top-8 right-6 md:top-32 md:right-16",
                      "bottom-16 left-1/2 -translate-x-1/2 md:bottom-20",
                    ];
                    return (
                      <div
                        key={badge.title}
                        className={`hero-badge gsap-reveal absolute floating-glass-badge rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 z-30 ${positions[i % 3]}`}
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-b from-[#cca885]/20 to-[#cca885]/5 flex items-center justify-center border border-[#cca885]/20">
                          <span className="text-base md:text-xl" aria-hidden="true">{badge.emoji}</span>
                        </div>
                        <div>
                          <p className="text-white text-xs md:text-sm font-bold tracking-tight">{badge.title}</p>
                          <p className="text-white/40 text-[10px] md:text-xs font-medium">{badge.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
