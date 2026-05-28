"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

    // Brass plaque reveal — wrapper participates in parent stagger; inner
    // mask + sweep animate when wrapper's turn arrives.
    const logoWrapperVariants = {
      hidden: {},
      visible: {},
    };

    const logoMaskVariants = {
      hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
      },
    };

    const logoSweepVariants = {
      hidden: { x: "-110%", opacity: 0 },
      visible: {
        x: "110%",
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 1.2,
          ease: "easeOut" as const,
          delay: 0.7,
          times: [0, 0.15, 0.85, 1],
        },
      },
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
            paddingTop: "clamp(8rem, 14vh, 12rem)",
            paddingBottom: "clamp(2rem, 4vh, 4rem)",
          }}
        >
          <motion.div variants={containerVariants} className="max-w-xl">
            {/* Slogan — letter-by-letter reveal */}
            <motion.p
              className="font-serif tracking-[0.15em] text-[#cca885] uppercase whitespace-nowrap"
              style={{
                fontSize: "clamp(0.9rem, 1.4vw, 1.6rem)",
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

            {/* Logo — brass plaque reveal */}
            <motion.div
              variants={logoWrapperVariants}
              className="relative overflow-hidden"
              style={{
                marginBottom: "clamp(1rem, 2vh, 2.5rem)",
                width: "clamp(180px, 22vw, 400px)",
              }}
            >
              <motion.div variants={logoMaskVariants}>
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-auto w-full brightness-0 invert opacity-90"
                />
              </motion.div>
              <motion.div
                aria-hidden
                variants={logoSweepVariants}
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 35%, rgba(204,168,133,0.65) 50%, transparent 65%)",
                }}
              />
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
                className="font-serif leading-normal text-white/70"
                style={{
                  fontSize: "clamp(0.875rem, 1.0vw, 1.3rem)",
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
          className="relative w-full md:w-3/5 md:mt-[clamp(2rem,8vh,6rem)]"
          style={{ height: "clamp(360px, 60vh, 720px)" }}
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
