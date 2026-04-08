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
    desc: "Every investment is evaluated for energy efficiency, carbon footprint, and long-term environmental impact before capital is committed.",
  },
  {
    icon: HeartHandshake,
    title: "Community impact",
    desc: "We prioritize projects that strengthen neighborhoods — creating quality housing, local jobs, and shared spaces that endure.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible governance",
    desc: "Transparent reporting, ethical decision-making, and accountability to both investors and the communities we serve.",
  },
];

const commitments: Array<{ icon: LucideIcon; stat: string; label: string; detail: string }> = [
  {
    icon: Sun,
    stat: "100%",
    label: "ESG-screened deals",
    detail: "Every acquisition undergoes environmental, social, and governance review as part of our underwriting process.",
  },
  {
    icon: TreePine,
    stat: "Net Zero",
    label: "Operational target",
    detail: "Working toward net-zero carbon across our managed portfolio through efficiency upgrades and renewable energy adoption.",
  },
  {
    icon: Droplets,
    stat: "30%",
    label: "Water reduction goal",
    detail: "Targeting measurable reductions in water usage across properties through smart systems and sustainable landscaping.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <NavMenu />

      {/* Smooth Scroll Hero with Picture1.jpg */}
      <SmoothScrollHero
        scrollHeight={1500}
        desktopImage="/Picture1.jpg"
        mobileImage="/Picture1.jpg"
        initialClipPercentage={25}
        finalClipPercentage={75}
      />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Intro */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-20 pt-24 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-5 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Sustainability
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Investing with care for the world we share.
          </motion.h2>
          <motion.p
            className="mt-8 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            At Deepblue Capital Partners, sustainable investing is not an add-on — it
            is foundational to how we source, underwrite, and manage every asset. We
            believe that disciplined stewardship of capital and environment are
            inseparable, and that the most enduring returns come from investments that
            respect communities and the natural world.
          </motion.p>
        </motion.section>

        {/* Pillars */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
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
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Three pillars of sustainable investment.
          </motion.h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium"
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
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Commitments
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Measurable targets, not just intentions.
          </motion.h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {commitments.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm shadow-premium md:p-8"
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

        {/* Philosophy Quote */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(204,168,133,0.18),rgba(13,18,26,0.82)_38%,rgba(120,171,175,0.14))] p-10 backdrop-blur-xl md:p-16"
            variants={itemVariants}
          >
            <Leaf className="mx-auto h-7 w-7 text-[#cca885]" />
            <blockquote className="mx-auto mt-8 max-w-4xl text-center font-serif text-3xl leading-relaxed text-white/78 md:text-4xl lg:text-5xl">
              &ldquo;Capital deployed with care creates value that compounds —
              for investors, for communities, and for the world we leave
              behind.&rdquo;
            </blockquote>
            <p className="mt-6 text-center font-sans text-sm uppercase tracking-[0.28em] text-white/40 md:text-base">
              Deepblue Capital Partners
            </p>
          </motion.div>
        </motion.section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
