"use client";

import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CountUp } from "@/components/ui/animation/count-up";
import NavMenu from "@/components/ui/layout/nav-menu";
import TopLeftLogo from "@/components/ui/layout/top-left-logo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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

// Hero text overlay: starts right after the 6-stripe image reveal
// (~0.36s total: 6 stripes × 0.033s stagger + 0.19s duration), with a
// small breath before the H1 / body fade in.
const heroTextContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.45, staggerChildren: 0.12 },
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

const pillars: Array<{ title: string; desc: string }> = [
  {
    title: "Environmental stewardship",
    desc: "Energy efficiency, embodied carbon, and long-term resilience evaluated before capital is committed.",
  },
  {
    title: "Community impact",
    desc: "Investments that strengthen neighborhoods with quality housing, local employment, and shared spaces that endure.",
  },
  {
    title: "Responsible governance",
    desc: "Transparent reporting, ethical decision-making, accountability to investors and communities alike.",
  },
];

const commitments: Array<{ stat: string; label: string; detail: string }> = [
  {
    stat: "100%",
    label: "ESG-screened deals",
    detail: "Every acquisition passes environmental, social, and governance review during underwriting.",
  },
  {
    stat: "Net Zero",
    label: "Operational target",
    detail: "Working toward net-zero carbon across the managed portfolio via efficiency upgrades and renewables.",
  },
  {
    stat: "30%",
    label: "Water reduction goal",
    detail: "Smart-system retrofits and drought-tolerant landscaping driving measurable water savings.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Hero — image with text overlay (investments-pattern reveal) */}
        <motion.section
          className="flex w-full flex-col px-[max(1.5rem,14vw)] pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroTextContainer}>
            <div className="relative aspect-[1.80/1] w-full overflow-hidden">
              {[0, 1, 2, 3, 4, 5].map((i) => {
                // Overlap adjacent stripes by ~0.5% on each interior edge so
                // sub-pixel rounding can't leave visible seams once the
                // animation completes.
                const top = Math.max(0, i * (100 / 6) - 0.5);
                const bottom = Math.min(100, (i + 1) * (100 / 6) + 0.5);
                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/Picture1.jpg)",
                      backgroundColor: "#1a2332",
                    }}
                    initial={{
                      clipPath: `polygon(-1% ${top}%, -1% ${top}%, -1% ${bottom}%, -1% ${bottom}%)`,
                    }}
                    animate={{
                      clipPath: `polygon(-1% ${top}%, 101% ${top}%, 101% ${bottom}%, -1% ${bottom}%)`,
                    }}
                    transition={{
                      duration: 0.19,
                      delay: 0.033 * i,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                  />
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-b from-[#0d121a]/65 via-[#0d121a]/35 to-[#0d121a]/80" />

              <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:px-12 lg:px-20">
                <motion.h1
                  className="max-w-5xl font-serif text-h1 leading-[0.95] text-white"
                  variants={headlineContainer}
                  aria-label="Investing with care for the world we share."
                >
                  {Array.from("Investing with care for the world we share.").map(
                    (char, i) => (
                      <motion.span
                        key={i}
                        variants={headlineLetter}
                        className="inline-block"
                        aria-hidden="true"
                      >
                        {char === " " ? " " : char}
                      </motion.span>
                    )
                  )}
                </motion.h1>
              </div>
            </div>

            <motion.p
              className="mx-auto mt-12 max-w-3xl text-center font-serif text-body leading-relaxed text-white/60 md:mt-16"
              variants={itemVariants}
            >
              At Deepblue, responsibility sits inside underwriting, not in a
              separate department. How we operate, how we manage assets, and how
              we engage the industry all answer to the same standard of care.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Pillars */}
        <motion.section
          className="w-full px-[max(1.5rem,14vw)] pt-60 pb-48"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={itemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-nowrap text-[#cca885]">
              THE STANDARD
            </p>
            <motion.div
              className="h-px flex-1 origin-left bg-[#cca885]/40"
              variants={accentRule}
            />
          </motion.div>
          <motion.h2
            className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
            variants={itemVariants}
          >
            Three pillars of sustainable investment.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-14 grid gap-16 md:grid-cols-3 md:gap-0">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                className={`group px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-h3-md text-white">
                  {item.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <p className="mt-4 font-serif text-body-sm leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Commitments */}
        <motion.section
          className="w-full px-[max(1.5rem,14vw)] pb-48"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={itemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-nowrap text-[#cca885]">
              THE EVIDENCE
            </p>
            <motion.div
              className="h-px flex-1 origin-left bg-[#cca885]/40"
              variants={accentRule}
            />
          </motion.div>
          <motion.h2
            className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
            variants={itemVariants}
          >
            Measurable targets, not just intentions.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-[280px] overflow-hidden md:h-[380px] lg:h-auto">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/sustainability/industry.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </div>

            <div className="space-y-12 md:space-y-14">
              {commitments.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
                    <p className="font-serif text-stat text-[#cca885]">
                      <CountUp value={item.stat} delay={0.2 + i * 0.15} />
                    </p>
                    <p className="font-serif text-body text-white">
                      {item.label}
                    </p>
                  </div>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-4 max-w-3xl font-serif text-body-sm leading-relaxed text-white/55">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
