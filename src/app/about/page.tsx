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
          className="mx-auto flex max-w-[1440px] flex-col px-6 pb-24 pt-32 md:px-12 lg:px-20"
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
            className="relative mt-16 h-[34vh] w-full overflow-hidden rounded-lg md:mt-20 md:h-[38vh]"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
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
              <div key={stat.label} className="text-center">
                <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                  <CountUp value={stat.value} delay={1.6 + i * 0.12} />
                </p>
                <p className="mt-3 font-sans text-xs uppercase tracking-[0.26em] text-white/55 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* 2 · Leadership — editorial image + split bios */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-32 pt-16 md:px-12 lg:px-20"
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
            className="font-serif text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl whitespace-nowrap"
            variants={itemVariants}
          >
            Two Executives. One integrated story.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Raising capital, underwriting risk, and running business plans live in
            the same room — not three handoffs.
          </motion.p>

          <motion.div
            className="mt-20 grid gap-16 md:grid-cols-2 md:gap-0"
            variants={itemVariants}
          >
            <div className="md:pr-16">
              <p className="font-sans text-base uppercase tracking-[0.28em] text-[#cca885] md:text-lg">
                Ex-Starwood Capital Partner
              </p>
              <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Ying Huang
              </h3>
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/72 md:text-2xl">
                Founding Partner of Deepblue. Previously Director and Partner at
                Starwood Capital Group, where she led the $4.5B 2016 hotel
                portfolio transaction &mdash; the largest equity commitment in
                Starwood&rsquo;s history. Founded C-Star SFR Advisors and grew
                it to $120M AUM. Master&rsquo;s in Real Estate, Harvard.
              </p>
            </div>
            <div className="md:border-l md:border-[#cca885]/25 md:pl-16">
              <p className="font-sans text-base uppercase tracking-[0.28em] text-[#cca885] md:text-lg">
                Ex-Hines MD
              </p>
              <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Anthony Liu
              </h3>
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/72 md:text-2xl">
                Founding Partner of Deepblue. Previously Managing Director,
                Acquisitions at Hines &mdash; sourcing and managing New York
                multifamily, office, and retail including One Vanderbilt and the
                Hudson Square Portfolio. CFA charterholder. Tepper School of
                Business, Carnegie Mellon.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Asset Class Experience — interactive accordion */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-32 pt-16 md:px-12 lg:px-20"
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
            className="max-w-5xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Hands-on across the asset classes that shape the strategy.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Office, mixed-use, multifamily, and single-family rental — range that helps
            us compare opportunities rather than chase whatever is fashionable.
          </motion.p>
          <motion.div className="mt-14" variants={itemVariants}>
            <InteractiveImageAccordion />
          </motion.div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
