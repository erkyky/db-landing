"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LogoMark } from "./logo-mark";

interface HeroSectionProps {
  className?: string;
  logo: {
    url: string;
    alt: string;
  };
  slogan: string;
  descriptions: string[];
  heroImage: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, descriptions, heroImage }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 24, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const,
        },
      },
    };

    const accentRule = {
      hidden: { scaleX: 0 },
      visible: {
        scaleX: 1,
        transition: {
          duration: 0.9,
          ease: "easeOut" as const,
        },
      },
    };

    // The box (logo frame) draws first; the slogan, accent line and
    // descriptions hold until it's essentially complete, then cascade in.
    const contentContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.95 },
      },
    };

    const sloganContainer = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.025 },
      },
    };

    const sloganLetter = {
      hidden: { opacity: 0, y: 6 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    };

    // Logo reveal — clip-path mask sweeps from top to bottom over 1.4s.
    // The wrapper participates in parent stagger; the inner mask animates
    // when the wrapper's turn arrives.
    const logoWrapperVariants = {
      hidden: {},
      visible: {},
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col overflow-hidden md:flex-row md:items-center",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div
          className="flex w-full flex-col justify-center md:w-2/5"
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 8rem)",
            paddingRight: "clamp(1.5rem, 3vw, 4rem)",
            paddingTop: "clamp(6rem, 14vh, 12rem)",
            paddingBottom: "clamp(2rem, 4vh, 4rem)",
          }}
        >
          <motion.div variants={contentContainer} className="max-w-xl">
            {/* Slogan — letter-by-letter reveal */}
            <motion.p
              className="font-sanomat tracking-[0.15em] text-[#cca885] uppercase whitespace-normal text-[11px] md:whitespace-nowrap md:text-[clamp(0.7rem,1.1vw,1.2rem)]"
              style={{
                marginBottom: "clamp(0.75rem, 1.5vh, 1.5rem)",
              }}
              variants={sloganContainer}
            >
              {Array.from(slogan).map((char, i) => (
                <motion.span
                  key={i}
                  variants={sloganLetter}
                  className="inline-block"
                  aria-hidden={char === " " ? "true" : undefined}
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </motion.p>

            {/* Logo — clip-path reveal, top to bottom */}
            <motion.div
              variants={logoWrapperVariants}
              className="relative overflow-hidden"
              style={{
                marginBottom: "clamp(1rem, 2vh, 2.5rem)",
                // Nudge left ~half the slogan's letter size so the logo's
                // visible mark (the PNG has transparent padding) aligns with
                // the text's left edge. Scales with the slogan's clamp.
                marginLeft: "clamp(-0.35rem, -0.32vw, -0.2rem)",
                width: "clamp(220px, 17.6vw, 340px)",
              }}
            >
              <LogoMark className="w-full" alt={logo.alt} />
            </motion.div>

            {/* Accent line */}
            <motion.div
              className="h-px origin-left bg-[#cca885]/40"
              style={{
                width: "clamp(80px, 12vw, 192px)",
                marginBottom: "clamp(1rem, 1.5vh, 2rem)",
              }}
              variants={accentRule}
            />

            {/* Descriptions */}
            {descriptions.map((desc, i) => (
              <motion.p
                key={i}
                className="font-serif leading-normal text-white/70 text-body"
                style={{
                  marginBottom: "clamp(0.5rem, 1vh, 1rem)",
                }}
                variants={itemVariants}
              >
                {desc}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image with Clip Path Animation — flush to right edge */}
        <motion.div
          className="relative h-[clamp(280px,45vh,460px)] w-full md:mt-[clamp(2rem,8vh,6rem)] md:h-[clamp(440px,60vh,720px)] md:w-3/5"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})`, backgroundColor: "#1a2332" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d121a]/30" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
