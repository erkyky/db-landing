"use client";

import { motion } from "framer-motion";
import { Leaf, TreePine, Droplets, Sun, HeartHandshake, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
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

const imageRevealLeft = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 1.2, ease: "circOut" as const },
  },
};

const pillars: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  {
    icon: Leaf,
    title: "Environmental stewardship",
    desc: "Energy efficiency, embodied carbon, and long-term resilience evaluated before capital is committed.",
  },
  {
    icon: HeartHandshake,
    title: "Community impact",
    desc: "Investments that strengthen neighborhoods — quality housing, local employment, and shared spaces that endure.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible governance",
    desc: "Transparent reporting, ethical decision-making, accountability to investors and communities alike.",
  },
];

const commitments: Array<{ icon: LucideIcon; stat: string; label: string; detail: string }> = [
  {
    icon: Sun,
    stat: "100%",
    label: "ESG-screened deals",
    detail: "Every acquisition passes environmental, social, and governance review during underwriting.",
  },
  {
    icon: TreePine,
    stat: "Net Zero",
    label: "Operational target",
    detail: "Working toward net-zero carbon across the managed portfolio via efficiency upgrades and renewables.",
  },
  {
    icon: Droplets,
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
          <motion.div
            className="relative h-[80vh] w-full overflow-hidden rounded-lg"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/Picture1.jpg)",
                backgroundColor: "#1a2332",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d121a]/65 via-[#0d121a]/35 to-[#0d121a]/80" />

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-12 lg:px-20"
              variants={itemVariants}
            >
              <p className="mb-6 font-sans text-lg uppercase tracking-[0.32em] text-[#cca885] md:text-xl">
                Sustainability
              </p>
              <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
                Investing with care for the world we share.
              </h1>
              <p className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/85 md:text-xl">
                At Deepblue, responsibility sits inside underwriting &mdash; not in a
                separate department. How we operate, how we manage assets, and how
                we engage the industry all answer to the same standard of care.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Pillars */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pt-40 pb-28 md:px-12 lg:px-20"
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

          <div className="mt-14 grid gap-16 md:grid-cols-3 md:gap-0">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                className={`group px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="h-7 w-7 text-[#cca885]/75 transition-colors duration-300 group-hover:text-[#cca885]" />
                <h3 className="mt-6 font-serif text-3xl text-white md:text-4xl">
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
          className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 lg:px-20"
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

          <div className="mt-14 space-y-14 md:space-y-16">
            {commitments.map((item) => (
              <motion.div
                key={item.label}
                className="group"
                variants={itemVariants}
              >
                <item.icon className="h-6 w-6 text-[#cca885]/75 transition-colors duration-300 group-hover:text-[#cca885]" />
                <div className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                  <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                    {item.stat}
                  </p>
                  <p className="font-serif text-xl text-white md:text-2xl">
                    {item.label}
                  </p>
                </div>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-white/60 opacity-100 transition-opacity duration-500 ease-out md:text-xl md:opacity-0 md:group-hover:opacity-100">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Engagement */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Industry Engagement
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Standards we align with.
          </motion.h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <motion.div
              className="relative h-[420px] overflow-hidden rounded-lg md:h-[460px] lg:h-[420px]"
              variants={imageRevealLeft}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{ backgroundImage: "url(/sustainability/industry.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>

            <motion.p
              className="max-w-xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl lg:pt-4"
              variants={itemVariants}
            >
              Deepblue tracks the leading frameworks shaping responsible real
              estate investment &mdash; the UN Principles for Responsible
              Investment, GRESB, the Task Force on Climate-Related Financial
              Disclosures, and the EPA&rsquo;s ENERGY STAR program &mdash; and
              applies their guidance to underwriting, asset management, and
              investor reporting.
            </motion.p>
          </div>
        </motion.section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
