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
  cta: {
    label: string;
    href: string;
    displayText: string;
  };
  heroImage: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, descriptions, cta, heroImage }, ref) => {
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
        <div className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-12 lg:w-3/5 lg:px-20 xl:px-28">
          <motion.div variants={containerVariants} className="max-w-xl">
            {/* Slogan */}
            <motion.p
              className="mb-6 font-serif text-sm tracking-[0.15em] text-[#cca885] uppercase"
              variants={itemVariants}
            >
              {slogan}
            </motion.p>

            {/* Logo */}
            <motion.div className="mb-10" variants={itemVariants}>
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-auto w-full max-w-sm brightness-0 invert opacity-90"
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
                className="mb-4 text-[0.95rem] leading-relaxed text-white/70"
                variants={itemVariants}
              >
                {desc}
              </motion.p>
            ))}

            {/* CTA */}
            <motion.div className="mt-8" variants={itemVariants}>
              <span className="text-sm text-white/50">{cta.label} </span>
              <a
                href={cta.href}
                className="text-sm font-medium text-[#cca885] transition-colors duration-300 hover:text-[#78abaf] hover:underline"
              >
                {cta.displayText}
              </a>
            </motion.div>

            {/* Commented out acquisitions email - preserved from original */}
            {/*
            <div className="mt-3">
              <span className="text-sm text-white/50">Sell to us: </span>
              <a
                href="mailto:acquisitions+prosper@deepbluepartners.co?subject=Property%20Acquisition%20Opportunity&body=Hello%20Deepblue%20Capital%20Partners%2C%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20property%20for%20acquisition%20by%20your%20fund.%20Here%20are%20some%20initial%20details%20for%20your%20review:%0A%0AThank%20you."
                className="text-sm font-medium text-[#cca885] transition-colors duration-300 hover:text-[#78abaf] hover:underline"
              >
                acquisitions@deepbluepartners.co
              </a>
            </div>
            */}
          </motion.div>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="relative w-full min-h-[350px] md:w-1/2 md:min-h-full lg:w-2/5"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d121a]/30" />
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
