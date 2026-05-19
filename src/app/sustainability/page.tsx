"use client";

import { motion } from "framer-motion";
import { Leaf, TreePine, Droplets, Sun, HeartHandshake, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import NavMenu from "@/components/ui/layout/nav-menu";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

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

      {/* Auto-playing hero reveal with overlay text */}
      <SmoothScrollHero
        desktopImage="/Picture1.jpg"
        mobileImage="/Picture1.jpg"
        duration={2.8}
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 font-sans text-lg uppercase tracking-[0.32em] text-[#cca885] md:text-xl">
            Sustainability
          </p>
          <h2 className="font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
            Investing with care for the world we share.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/85 md:text-xl">
            At Deepblue, responsibility sits inside underwriting &mdash; not in a
            separate department. How we operate, how we manage assets, and how
            we engage the industry all answer to the same standard of care.
          </p>
        </div>
      </SmoothScrollHero>

      <BeamsBackground intensity="subtle" className="min-h-0">

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

          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {commitments.map((item) => (
              <motion.div
                key={item.label}
                className="group border-l-2 border-[#cca885]/30 pl-6 transition-colors hover:border-[#cca885]"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="h-6 w-6 text-[#cca885]/75" />
                <p className="mt-5 font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                  {item.stat}
                </p>
                <p className="mt-2 font-serif text-xl text-white md:text-2xl">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-lg leading-relaxed text-white/50 md:text-xl">
                  {item.detail}
                </p>
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
          <motion.p
            className="mt-8 max-w-4xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Deepblue tracks the leading frameworks shaping responsible real
            estate investment &mdash; the UN Principles for Responsible
            Investment, GRESB, the Task Force on Climate-Related Financial
            Disclosures, and the EPA&rsquo;s ENERGY STAR program &mdash; and
            applies their guidance to underwriting, asset management, and
            investor reporting.
          </motion.p>
        </motion.section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
