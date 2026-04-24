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
  { value: "$30M", label: "Target equity" },
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

const returnProfile = [
  { value: "19.6%", label: "Gross IRR" },
  { value: "1.6-1.8x", label: "Equity multiple" },
  { value: "$35M", label: "Target equity" },
  { value: "3-11yr", label: "Fund term" },
];

const executionStages = [
  {
    title: "Source",
    desc: "Off-market and relationship-driven deals where operational upside isn't fully priced.",
  },
  {
    title: "Operate",
    desc: "Renovations, leasing, expense controls, and tenant experience improvements that drive NOI.",
  },
  {
    title: "Exit",
    desc: "Flexibility between recapitalization, portfolio sale, or asset-level disposition.",
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
            className="mb-6 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
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
            className="mt-16 grid w-full grid-cols-2 gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4"
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

        {/* 2 · The Housing Thesis — editorial image panel */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            The Housing Thesis
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            The kind of housing we want to own.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Durable neighborhoods, operational upside, and assets where better
            execution matters more than financial engineering.
          </motion.p>

          <motion.div
            className="relative mt-16 aspect-[16/9] w-full overflow-hidden"
            variants={itemVariants}
          >
            <img
              src="/hero_image.jpg"
              alt="Target housing market"
              className="h-full w-full object-cover grayscale contrast-110 brightness-75"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-[#0d121a]/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
              <p className="max-w-2xl font-serif text-3xl leading-snug text-white md:text-4xl lg:text-5xl">
                Demographic strength. Execution upside. Downside protection.
              </p>
              <p className="mt-4 max-w-xl font-serif text-base leading-relaxed text-white/60 md:text-lg">
                Target markets: TX · NC · GA &nbsp;·&nbsp; 100&ndash;250 unit business plans
                &nbsp;·&nbsp; 2&ndash;4 exit options per deal
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 3 · Why Sunbelt — split: signals + tenets + return profile */}
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
            Why Sunbelt
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Where demographic momentum compounds rent and value.
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

          {/* Return Profile — full-width editorial band */}
          <motion.div
            className="mt-28 border-y border-white/15 py-12 md:mt-32 md:py-16"
            variants={itemVariants}
          >
            <p className="mb-10 text-center font-sans text-xs uppercase tracking-[0.38em] text-[#cca885] md:text-sm">
              Target Return Profile
            </p>
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
              {returnProfile.map((r, i) => (
                <motion.div
                  key={r.label}
                  className={`px-4 text-center md:px-8 ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-5xl leading-none text-white md:text-6xl lg:text-7xl">
                    {r.value}
                  </p>
                  <p className="mt-4 font-sans text-xs uppercase tracking-[0.26em] text-white/55 md:text-sm">
                    {r.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* 4 · How We Execute — horizontal process + CTA */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 text-center font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            How we execute
          </motion.p>
          <motion.h2
            className="mx-auto max-w-4xl text-center font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Source. Operate. Exit.
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-center font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            A three-stage process, all under one roof.
          </motion.p>

          <div className="relative mt-24">
            {/* Horizontal connector line (desktop only) */}
            <div className="absolute top-8 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-[#cca885]/35 to-transparent md:block" />

            <div className="relative grid gap-16 md:grid-cols-3 md:gap-10">
              {executionStages.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="group text-center"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#cca885]/40 bg-[#0d121a] font-serif text-xl text-[#cca885] transition-all duration-300 group-hover:border-[#cca885] group-hover:bg-[#cca885] group-hover:text-[#0d121a] md:h-20 md:w-20 md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-8 font-serif text-3xl text-white md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xs font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
