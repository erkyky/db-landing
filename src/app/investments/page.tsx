"use client";

import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CountUp } from "@/components/ui/animation/count-up";
import NavMenu from "@/components/ui/layout/nav-menu";

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
  { value: "14-16%", label: "Target gross IRR" },
  { value: "3+1+1", label: "Fund term" },
  { value: "1-3%", label: "Distributable yield" },
];

const marketSignals = [
  {
    value: "3x",
    label: "Population growth",
    detail: "Sunbelt migration outpaces national averages.",
  },
  {
    value: "6%",
    label: "Job growth premium",
    detail: "Employment expansion supports rental demand.",
  },
  {
    value: "6%",
    label: "Wage growth premium",
    detail: "Income growth improves absorption and affordability.",
  },
];

const tenets = [
  {
    title: "Value-add rental",
    desc: "Multifamily and adjacent strategies where operations and positioning create outsized value.",
  },
  {
    title: "Sunbelt selection",
    desc: "TX, NC, GA — migration, jobs, and household formation support durable rent growth.",
  },
  {
    title: "Basis discipline",
    desc: "Going-in basis and replacement cost define real downside protection.",
  },
  {
    title: "Institutional risk controls",
    desc: "Disciplined underwriting, structured business plans, and active asset management at scale.",
  },
];

const strategicPartners = [
  {
    title: "Long-term industry relationships",
    desc: "Deepblue partners with brokers, lenders, and joint-venture sponsors built over twenty-five years. We see opportunities before they're listed and price them with conviction.",
  },
  {
    title: "Local operating partners",
    desc: "Every deal pairs Deepblue's underwriting with on-the-ground operators who know their submarket — leasing, construction, and property management run by people who live where we invest.",
  },
  {
    title: "Institutional service standards",
    desc: "Quarterly investor reporting, transparent waterfall calculations, and the diligence rhythm sophisticated LPs expect. The same standard whether the check is five million or fifty.",
  },
];

export default function InvestmentsPage() {
  return (
    <>
      <NavMenu />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* 1 · Intro */}
        <motion.section
          className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-6 pb-20 pt-32 text-center md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="mb-6 font-serif text-xl leading-relaxed text-white/60 md:text-2xl"
            variants={itemVariants}
          >
            Deepblue Value-Add Fund
          </motion.p>
          <motion.h1
            className="font-serif text-6xl leading-[1.05] text-white md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            Real estate exposure built for Sunbelt rental housing.
          </motion.h1>
          <motion.p
            className="mx-auto mt-8 max-w-4xl font-serif text-xl leading-relaxed text-white/60 md:text-2xl"
            variants={itemVariants}
          >
            Value-add rental where demographic tailwinds and active management
            compound risk-adjusted returns.
          </motion.p>

          <motion.div
            className="mt-16 grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 md:mt-20"
            variants={itemVariants}
          >
            {heroStats.map((stat, i) => (
              <div key={stat.label}>
                <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                  <CountUp value={stat.value} delay={0.6 + i * 0.12} />
                </p>
                <p className="mt-3 font-sans text-xs uppercase tracking-[0.26em] text-white/55 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tactical Opportunities — split: signals + tenets */}
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
            Tactical Opportunities
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Where demographic momentum and operational discipline compound.
          </motion.h2>

          <div className="mt-20 grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Left: 3 count-up signals */}
            <motion.div variants={itemVariants} className="space-y-12">
              {marketSignals.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="group border-l-2 border-[#cca885]/30 pl-6 transition-colors hover:border-[#cca885]"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-6xl text-[#cca885] md:text-7xl">
                    <CountUp value={s.value} delay={0.2 + i * 0.15} />
                  </p>
                  <p className="mt-2 font-serif text-xl text-white md:text-2xl">
                    {s.label}
                  </p>
                  <p className="mt-2 font-serif text-base leading-relaxed text-white/50 md:text-lg">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: tenets list */}
            <motion.div variants={itemVariants}>
              {tenets.map((t, i) => (
                <motion.div
                  key={t.title}
                  className="group flex gap-6 border-b border-white/5 py-8 last:border-b-0"
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-4xl leading-none text-[#cca885]/35 transition-colors duration-300 group-hover:text-[#cca885]/80 md:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl text-white md:text-3xl">
                      {t.title}
                    </h3>
                    <p className="mt-3 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                      {t.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.section>

        {/* Strategic Partners — numbered three-column */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-32 pt-16 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Strategic Partners
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Relationships compound. Execution scales.
          </motion.h2>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-0">
            {strategicPartners.map((p, i) => (
              <motion.div
                key={p.title}
                className={`group relative px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-6xl leading-none text-[#cca885]/35 transition-colors duration-300 group-hover:text-[#cca885]/80 md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <h3 className="mt-6 font-serif text-3xl text-white md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
