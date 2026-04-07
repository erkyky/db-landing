"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GradientWaveText } from "@/components/ui/hero/gradient-wave-text";

interface HeroSectionProps {
  className?: string;
  logo: {
    url: string;
    alt: string;
  };
  slogan: string;
  descriptions: string[];
  cta: {
    label: string;
    href: string;
    displayText: string;
  };
  heroImage: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, descriptions, cta, heroImage }, ref) => {
    const [sloganHovered, setSloganHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.3,
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

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col overflow-hidden md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-center px-8 pt-24 pb-16 md:w-1/2 md:px-12 md:pt-28 lg:w-3/5 lg:px-20 xl:px-28">
          <motion.div variants={containerVariants} className="max-w-xl">
            {/* Slogan */}
            <motion.div
              className="mb-6 cursor-default relative"
              variants={itemVariants}
              onMouseEnter={() => setSloganHovered(true)}
              onMouseLeave={() => setSloganHovered(false)}
            >
              <p className={`font-serif text-xl md:text-2xl tracking-[0.15em] text-[#cca885] uppercase transition-opacity duration-300 ${sloganHovered ? "opacity-0" : "opacity-100"}`}>
                {slogan}
              </p>
              <div className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${sloganHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <GradientWaveText
                  align="left"
                  className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase [--gradient-wave-base:#cca885] dark:[--gradient-wave-base:#cca885]"
                  speed={1.5}
                  repeat
                  bottomOffset={0}
                  customColors={["#5a8ea6", "#78abaf", "#8fafcc", "#cca885", "#6c83aa"]}
                >
                  {slogan}
                </GradientWaveText>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div className="mb-10" variants={itemVariants}>
              <img
                src={logo.url}
                alt={logo.alt}
                width={400}
                height={100}
                className="h-auto w-[95%] max-w-sm brightness-0 invert opacity-90"
              />
            </motion.div>

            {/* Accent line */}
            <motion.div
              className="mb-8 h-px w-16 bg-[#cca885]/40"
              variants={itemVariants}
            />

            {/* Descriptions */}
            {descriptions.map((desc, i) => (
              <motion.p
                key={i}
                className="mb-4 font-serif text-lg leading-relaxed text-white/70"
                variants={itemVariants}
              >
                {desc}
              </motion.p>
            ))}

            {/* CTA */}
            <motion.div className="mt-8" variants={itemVariants}>
              <span className="font-serif text-base text-white/50">{cta.label} </span>
              <button
                type="button"
                className="font-serif text-base font-medium text-[#cca885] transition-colors duration-300 hover:text-[#78abaf] cursor-pointer group relative"
                onClick={() => {
                  navigator.clipboard.writeText(cta.displayText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                <span className="hover:underline">{cta.displayText}</span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {copied ? "Copied!" : "Click to copy"}
                </span>
              </button>
            </motion.div>

            <motion.div className="mt-3" variants={itemVariants}>
              <span className="text-sm text-white/50">Sell to us: </span>
              <a
                href="mailto:acquisitions+prosper@deepbluepartners.co?subject=Property%20Acquisition%20Opportunity&body=Hello%20Deepblue%20Capital%20Partners%2C%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20property%20for%20acquisition%20by%20your%20fund.%20Here%20are%20some%20initial%20details%20for%20your%20review:%0A%0AThank%20you."
                className="text-sm font-medium text-[#cca885] transition-colors duration-300 hover:text-[#78abaf] hover:underline"
              >
                acquisitions@deepbluepartners.co
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="relative w-full min-h-[350px] md:w-1/2 md:min-h-full lg:w-2/5 mt-12 md:mt-16"
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
