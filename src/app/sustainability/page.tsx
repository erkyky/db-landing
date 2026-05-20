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

const pillars: Array<{ title: string; desc: string }> = [
  {
    title: "Environmental stewardship",
    desc: "Energy efficiency, embodied carbon, and long-term resilience evaluated before capital is committed.",
  },
  {
    title: "Community impact",
    desc: "Investments that strengthen neighborhoods — quality housing, local employment, and shared spaces that endure.",
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
          className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pt-32 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative h-[80vh] w-full overflow-hidden">
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

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-12 lg:px-20"
              variants={heroTextContainer}
            >
              <motion.h1
                className="max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl"
                variants={itemVariants}
              >
                Investing with care for the world we share.
              </motion.h1>
              <motion.p
                className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/85 md:text-xl"
                variants={itemVariants}
              >
                At Deepblue, responsibility sits inside underwriting &mdash; not in a
                separate department. How we operate, how we manage assets, and how
                we engage the industry all answer to the same standard of care.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pillars */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pt-60 pb-48 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Our Approach
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
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
                <h3 className="font-serif text-3xl text-white md:text-4xl">
                  {item.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <p className="mt-4 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Commitments */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Within Our Portfolio
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
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
                    <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                      <CountUp value={item.stat} delay={0.2 + i * 0.15} />
                    </p>
                    <p className="font-serif text-xl text-white md:text-2xl">
                      {item.label}
                    </p>
                  </div>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-4 max-w-3xl font-serif text-lg leading-relaxed text-white/55 md:text-xl">
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
