"use client";

import { motion } from "framer-motion";
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

const heroStats = [
  { value: "16M+", label: "Square feet" },
  { value: "$10.4B", label: "Capital raised" },
  { value: "$3.8B", label: "Equity sourced" },
  { value: "27", label: "Years combined" },
];


export default function AboutPage() {
  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* 1 · Intro — editorial header + image + stats */}
        <motion.section
          className="mx-auto flex max-w-[1440px] flex-col px-6 pb-24 pt-[133.5px] md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
            <motion.h1
              className="font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              A complementary leadership team built around real estate.
            </motion.h1>
            <motion.p
              className="font-serif text-xl leading-relaxed text-white/60 md:text-2xl md:pt-3"
              variants={itemVariants}
            >
              Capital formation, acquisitions, and asset management — one team, one
              conversation across every deal we touch.
            </motion.p>
          </div>

          <motion.div
            className="relative mt-12 h-[24vh] w-full overflow-hidden md:mt-16 md:h-[28vh] lg:h-[34vh]"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/about/team.jpg)",
                backgroundColor: "#1a2332",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/35 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4"
            variants={itemVariants}
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                  <CountUp value={stat.value} delay={1.6 + i * 0.12} />
                </p>
                <div className="mx-auto mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <p className="mt-3 font-sans text-xs uppercase tracking-[0.26em] text-white/55 md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 2 · Leadership — editorial image + split bios */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Co-Founders
          </motion.p>
          <motion.h2
            className="font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl whitespace-nowrap"
            variants={itemVariants}
          >
            Two Executives. One integrated story.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />
          <motion.div
            className="mt-20 grid gap-16 md:grid-cols-2 md:gap-0"
            variants={itemVariants}
          >
            <motion.div
              className="group md:pr-16"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-4xl text-white md:text-5xl">
                Ying Huang
              </h3>
              <p className="mt-3 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Ex-Starwood Capital Partner
              </p>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/60 md:text-2xl">
                Founding Partner of Deepblue. Previously Director and Partner at
                Starwood Capital Group, where she led the $4.5B 2016 hotel
                portfolio transaction &mdash; the largest equity commitment in
                Starwood&rsquo;s history. Founded C-Star SFR Advisors and grew
                it to $120M AUM. Master&rsquo;s in Real Estate, Harvard.
              </p>
            </motion.div>
            <motion.div
              className="group md:border-l md:border-[#cca885]/25 md:pl-16"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-4xl text-white md:text-5xl">
                Anthony Liu
              </h3>
              <p className="mt-3 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Ex-Hines Managing Director
              </p>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/60 md:text-2xl">
                Founding Partner of Deepblue. Previously Managing Director,
                Acquisitions at Hines &mdash; sourcing and managing New York
                multifamily, office, and retail including One Vanderbilt and the
                Hudson Square Portfolio. CFA charterholder. Tepper School of
                Business, Carnegie Mellon.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Asset Class Experience — interactive accordion */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Asset class experience
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Hands-on across the asset classes that shape the strategy.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
            <motion.div variants={itemVariants}>
              <p className="font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                Office, mixed-use, multifamily, and single-family rental — range
                that helps us compare opportunities rather than chase whatever is
                fashionable.
              </p>
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                Each asset class shaped a discipline we still apply today — from
                large-scale acquisitions at Hines and Starwood to value-add
                execution and single-family portfolio management.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
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
