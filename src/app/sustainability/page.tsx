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
        initialClipPercentage={40}
        finalClipPercentage={60}
        duration={2.8}
      >
        <div className="mx-auto max-w-5xl text-center">
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
          className="mx-auto max-w-[1440px] px-6 pt-24 pb-28 md:px-12 lg:px-20"
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

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-[1.75rem] bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <item.icon className="h-7 w-7 text-[#cca885]/75" />
                <h3 className="mt-6 font-serif text-3xl text-white md:text-[2.5rem]">
                  {item.title}
                </h3>
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

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {commitments.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-[1.75rem] bg-white/[0.03] p-7 backdrop-blur-sm shadow-premium md:p-8"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <item.icon className="h-6 w-6 text-[#cca885]/75" />
                <p className="mt-5 font-serif text-5xl text-white md:text-6xl">
                  {item.stat}
                </p>
                <p className="mt-2 font-serif text-base text-[#cca885] md:text-lg">
                  {item.label}
                </p>
                <p className="mt-3 font-serif text-lg leading-relaxed text-white/48">
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
