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

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col overflow-hidden md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-center px-8 pt-40 pb-16 md:w-2/5 md:px-12 md:pt-48 lg:w-2/5 lg:px-20 xl:px-28">
          <motion.div variants={containerVariants} className="max-w-xl">
            {/* Slogan — letter-by-letter reveal */}
            <motion.p
              className="mb-6 font-serif text-xl md:text-2xl tracking-[0.15em] text-[#cca885] uppercase whitespace-nowrap"
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

            {/* Logo */}
            <motion.div className="mb-10" variants={itemVariants}>
              <img
                src={logo.url}
                alt={logo.alt}
                width={400}
                height={100}
                className="h-auto w-[85.5%] max-w-[25.2rem] brightness-0 invert opacity-90"
              />
            </motion.div>

            {/* Accent line */}
            <motion.div
              className="mb-8 h-px w-32 origin-left bg-[#cca885]/40 md:w-48"
              variants={accentRule}
            />

            {/* Descriptions */}
            {descriptions.map((desc, i) => (
              <motion.p
                key={i}
                className="mb-4 font-serif text-xl leading-relaxed text-white/70 md:text-2xl"
                variants={itemVariants}
              >
                {desc}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="relative w-full h-[400px] md:w-3/5 md:h-[500px] lg:w-3/5 lg:h-[560px] mt-7 md:mt-[140px] lg:mt-[156px]"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-tl-lg"
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
