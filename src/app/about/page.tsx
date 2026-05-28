"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CountUp } from "@/components/ui/animation/count-up";
import { InteractiveImageAccordion } from "@/components/ui/sections/interactive-image-accordion";
import NavMenu from "@/components/ui/layout/nav-menu";
import TopLeftLogo from "@/components/ui/layout/top-left-logo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const accentRule = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

// Hero wrapper: delays text descendants so the image clip-path reveal is
// clearly the first thing the audience sees, then the text cascades in.
const heroTextContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.55, staggerChildren: 0.12 },
  },
};

const headlineContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025 },
  },
};

const headlineLetter = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Slower, more deliberate entrance for the two main on-scroll sections.
// Used so the audience clearly perceives the cascade ("the best entering the stage").
const slowContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.4 },
  },
};

const slowItemVariants = {
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slowAccentRule = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const heroStats = [
  { value: "16M+", label: "Square feet" },
  { value: "$10.4B", label: "Capital raised" },
  { value: "$3.8B", label: "Equity sourced" },
  { value: "27", label: "Years combined" },
];


export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const imageStyle = reduceMotion ? undefined : { y: imageY, opacity: imageOpacity };
  const textStyle = reduceMotion ? undefined : { y: textY, opacity: textOpacity };

  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Hero — banner image + editorial headline */}
        <motion.section
          ref={heroRef}
          className="flex w-full flex-col section-px pb-24 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroTextContainer}>
          <motion.div
            className="relative h-[50svh] w-full overflow-hidden md:aspect-[2.34/1] md:h-auto"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            style={imageStyle}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/about/33.png)",
                backgroundColor: "#1a2332",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1.1fr_1fr] md:gap-20"
            style={textStyle}
          >
            <motion.h1
              className="font-serif text-stat leading-[1.05] text-white"
              variants={headlineContainer}
              aria-label="A complementary leadership team built around real estate."
            >
              {"A complementary leadership team built around real estate.".split(" ").map((word, wi, words) => (
                <span key={wi} className="inline-block whitespace-nowrap">
                  {Array.from(word).map((char, ci) => (
                    <motion.span
                      key={ci}
                      variants={headlineLetter}
                      className="inline-block"
                      aria-hidden="true"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wi < words.length - 1 ? " " : ""}
                </span>
              ))}
            </motion.h1>
            <motion.p
              className="max-w-xl self-start ml-auto font-serif text-body leading-normal text-white/60"
              variants={itemVariants}
            >
              One team, one conversation across every deal we touch.
            </motion.p>
          </motion.div>
          </motion.div>
        </motion.section>

        {/* 2 · Leadership — editorial image + split bios */}
        <motion.section
          id="executive-officers"
          className="w-full scroll-mt-28 section-px pb-20 pt-24"
          variants={slowContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={slowItemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-normal md:whitespace-nowrap text-[#cca885]">
              Executive Officers
            </p>
            <motion.div
              className="h-px flex-1 origin-left bg-[#cca885]/40"
              variants={slowAccentRule}
            />
          </motion.div>
          <motion.h2
            className="font-serif text-h2 leading-[1.08] text-white"
            variants={slowItemVariants}
          >
            Where Two Veterans Converge on One Mission.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={slowAccentRule}
          />
          <motion.div
            className="mt-20 grid gap-16 md:grid-cols-2 md:gap-0"
            variants={slowItemVariants}
          >
            <motion.div
              className="group md:pr-16"
              variants={slowItemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-h3-sm text-white">
                Ying Huang
              </h3>
              <p className="mt-3 font-sans text-xs md:text-sm uppercase tracking-[0.32em] text-[#cca885]">
                Co-Founder
              </p>
              <p className="mt-2 font-serif text-xs md:text-sm tracking-[0.08em] text-white/70">
                Ex-Starwood Capital Partner
              </p>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
            </motion.div>
            <motion.div
              className="group md:border-l md:border-[#cca885]/25 md:pl-16"
              variants={slowItemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-h3-sm text-white">
                Anthony Liu
              </h3>
              <p className="mt-3 font-sans text-xs md:text-sm uppercase tracking-[0.32em] text-[#cca885]">
                Co-Founder
              </p>
              <p className="mt-2 font-serif text-xs md:text-sm tracking-[0.08em] text-white/70">
                Ex-Hines Managing Director, Acquisition
              </p>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-32 md:grid-cols-4"
            variants={slowItemVariants}
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-stat text-[#cca885]">
                  <CountUp value={stat.value} delay={1.6 + i * 0.18} />
                </p>
                <div className="mx-auto mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <p className="mt-3 font-serif text-xs tracking-[0.06em] text-white/55 md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Asset Class Experience — interactive accordion */}
        <motion.section
          id="asset-class-experience"
          className="w-full scroll-mt-28 section-px pb-48 pt-12"
          variants={slowContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={slowItemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-normal md:whitespace-nowrap text-[#cca885]">
              Asset class experience
            </p>
            <motion.div
              className="h-px flex-1 origin-left bg-[#cca885]/40"
              variants={slowAccentRule}
            />
          </motion.div>
          <motion.h2
            className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
            variants={slowItemVariants}
          >
            Hands-on across the asset classes that shape the strategy.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={slowAccentRule}
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
            <motion.div variants={slowItemVariants}>
              <p className="font-serif text-body leading-normal text-white/58">
                Office, mixed-use, multifamily, and single-family rental. A range
                that helps us compare opportunities rather than chase whatever is
                fashionable.
              </p>
              <p className="mt-6 font-serif text-body leading-normal text-white/58">
                Each asset class shaped a discipline we still apply today, from
                large-scale acquisitions at Hines and Starwood to value-add
                execution and single-family portfolio management.
              </p>
            </motion.div>
            <motion.div variants={slowItemVariants}>
              <InteractiveImageAccordion />
            </motion.div>
          </div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
