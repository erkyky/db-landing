"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Building2,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CinematicHero } from "@/components/ui/hero/cinematic-hero";
import { ContainerScroll } from "@/components/ui/animation/container-scroll-animation";
import { InteractiveImageAccordion } from "@/components/ui/sections/interactive-image-accordion";
import NavMenu from "@/components/ui/layout/nav-menu";

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

const experienceStats: Array<{
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
}> = [
  {
    icon: Building2,
    value: "16M+",
    label: "Square feet",
    sub: "Deals executed across office, mixed-use, and housing strategies.",
  },
  {
    icon: DollarSign,
    value: "$10.4B",
    label: "Capital raised",
    sub: "Institutional fundraising experience across multiple real estate cycles.",
  },
  {
    icon: DollarSign,
    value: "$3.8B",
    label: "Equity sourced",
    sub: "Raised through six funds and seven co-investment vehicles.",
  },
  {
    icon: Users,
    value: "25",
    label: "Years combined",
    sub: "Senior real estate experience across acquisitions and capital formation.",
  },
];

const firmPrinciples = [
  "Institutional training paired with entrepreneurial speed.",
  "Complementary leadership across acquisitions, capital formation, and investor oversight.",
  "Clear decision-making, transparent reporting, and practical asset-level execution.",
];

const operatingModel: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
}> = [
  {
    icon: DollarSign,
    title: "Capital formation and oversight",
    desc: "Deepblue structures fundraising, financial controls, and investor communications with the rigor expected by sophisticated capital partners.",
  },
  {
    icon: Building2,
    title: "Acquisitions and asset management",
    desc: "The team evaluates markets, sources deals, and translates underwriting into hands-on business plans after closing.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional discipline",
    desc: "Every opportunity is filtered through basis, downside protection, and a realistic plan for value creation before capital is committed.",
  },
];

const notableDeals = [
  {
    name: "One Vanderbilt",
    type: "Office / Retail",
    location: "New York, NY",
    role: "Development and acquisition leadership with Hines.",
  },
  {
    name: "National Multifamily Portfolio",
    type: "Multifamily",
    location: "Fort Lauderdale, FL",
    role: "Capital formation experience tied to large-scale residential investing.",
  },
  {
    name: "Sunbelt SFR Portfolio",
    type: "Single Family Rental",
    location: "Multiple U.S. markets",
    role: "Fundraising and portfolio building across rental housing platforms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavMenu />

      {/* Cinematic Scroll-Pinned Hero */}
      <CinematicHero
        eyebrow="About Deepblue"
        headline="A complementary leadership team built around real estate execution."
        subtitle="Deepblue combines capital formation, acquisitions, and asset management expertise so the investment strategy stays coherent from first meeting through final disposition."
        stats={experienceStats.map((s) => ({ value: s.value, label: s.label }))}
        badges={[
          { emoji: "⚡", title: "Institutional speed", subtitle: "Training meets agility" },
          { emoji: "🤝", title: "Complementary leadership", subtitle: "Acquisitions + capital" },
          { emoji: "📊", title: "Transparent reporting", subtitle: "Clear decision-making" },
        ]}
        ctaHref="mailto:investors+prosper@deepbluepartners.co?subject=About%20Deepblue"
        ctaLabel="Start a Conversation"
      />

      <BeamsBackground intensity="subtle" className="min-h-0">

        {/* Firm DNA Card (moved from hero sidebar) */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-20 pt-24 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={itemVariants}>
              <p className="mb-5 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Firm Overview
              </p>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
                Coverage across both sides of the capital stack.
              </h2>
              <div className="mt-10 grid gap-4">
                {firmPrinciples.map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm shadow-premium"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#cca885]" />
                    <p className="font-serif text-lg leading-relaxed text-white/72 md:text-xl">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                      Firm DNA
                    </p>
                    <p className="mt-2 font-serif text-2xl text-white md:text-3xl lg:text-4xl">
                      Three integrated capabilities.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      title: "Capital formation",
                      desc: "Investor relationships, fund structuring, financial oversight, and communication.",
                    },
                    {
                      title: "Acquisitions",
                      desc: "Market selection, sourcing, underwriting, and transaction execution.",
                    },
                    {
                      title: "Asset management",
                      desc: "Operational plans, renovation programs, and value-add implementation.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/10 bg-[#0d121a]/75 p-5"
                    >
                      <p className="font-serif text-xl text-white md:text-2xl">{item.title}</p>
                      <p className="mt-2 font-serif text-lg leading-relaxed text-white/48">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Stats */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experienceStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm shadow-premium md:p-8"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <stat.icon className="h-6 w-6 text-[#cca885]/75" />
                <p className="mt-5 font-serif text-5xl text-white md:text-6xl lg:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-serif text-base text-[#cca885] md:text-lg">
                  {stat.label}
                </p>
                <p className="mt-3 font-serif text-lg leading-relaxed text-white/48">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leadership Model - ContainerScroll */}
        <ContainerScroll
          className="px-4 md:px-8 lg:px-16"
          cardClassName="h-[30rem] md:h-[42rem]"
          innerClassName="p-0"
          titleComponent={
            <div className="mb-10 px-4">
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Leadership Model
              </p>
              <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
                Built to align capital, sourcing, and execution in one conversation.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                Investors do not need a disconnected story. Deepblue was built so the
                same team that raises capital also understands where the risk lives and
                how the business plan gets executed.
              </p>
            </div>
          }
        >
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
              alt="Modern office space representing institutional real estate execution"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-[#0d121a]/35 to-[#0d121a]/8" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d121a]/68 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 font-sans text-sm uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm md:left-8 md:top-8 md:text-base">
              Complementary coverage
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.7rem] border border-white/10 bg-[#0d121a]/78 p-6 backdrop-blur-xl">
                  <p className="font-serif text-2xl text-white md:text-3xl lg:text-4xl">
                    Two senior operators. One integrated investment story.
                  </p>
                  <p className="mt-3 max-w-xl font-serif text-lg leading-relaxed text-white/58 md:text-xl">
                    Anthony leads acquisitions, asset management, and value-add execution.
                    Ying leads capital formation, financial oversight, and investor
                    relations. The combination matters because execution quality matters.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                  {[
                    { value: "Ying", label: "Capital formation, oversight, and investor communication" },
                    { value: "Anthony", label: "Acquisitions, asset management, and business plan execution" },
                  ].map((item) => (
                    <div
                      key={item.value}
                      className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                    >
                      <p className="font-serif text-3xl text-white md:text-4xl">
                        {item.value}
                      </p>
                      <p className="mt-2 font-serif text-base leading-relaxed text-white/60 md:text-lg">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>

        {/* Leadership Bios */}
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
            Leadership
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Investor-facing leadership with institutional depth.
          </motion.h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Ying Huang */}
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium md:p-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#cca885]/12">
                  <span className="font-serif text-3xl text-[#cca885]">YH</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white md:text-4xl">
                    Ying Huang
                  </h3>
                  <p className="font-sans text-sm uppercase tracking-[0.28em] text-[#cca885] md:text-base">
                    Co-founder
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Capital formation", "Fund oversight", "Investor relations"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-sm uppercase tracking-[0.2em] text-white/72 md:text-base"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 space-y-4 font-serif text-lg leading-relaxed text-white/60 md:text-xl">
                <p>
                  Before co-founding Deepblue, Ms. Huang launched C-Star SFR Advisors
                  and raised three residential funds, growing the platform to
                  approximately $120 million of assets under management.
                </p>
                <p>
                  Prior to that, she spent nine years at Starwood Capital Group as a
                  Director and Partner, helping cultivate relationships with global
                  investors and contributing to more than $3.8 billion of equity
                  raised. In 2016, she helped secure the largest equity commitment in
                  Starwood&apos;s history for a $4.5 billion hotel portfolio transaction.
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#0d121a]/70 p-5">
                <p className="font-serif text-xl text-white md:text-2xl">Education</p>
                <p className="mt-2 font-serif text-lg leading-relaxed text-white/48">
                  Harvard University (M.S. Real Estate) · Seoul National University
                  (M.S. Urban Planning) · Fudan University (B.A.)
                </p>
              </div>
            </motion.div>

            {/* Anthony Liu */}
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium md:p-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#78abaf]/12">
                  <span className="font-serif text-3xl text-[#78abaf]">AL</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white md:text-4xl">
                    Anthony Liu
                  </h3>
                  <p className="font-sans text-sm uppercase tracking-[0.28em] text-[#78abaf] md:text-base">
                    Co-founder
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Acquisitions", "Asset management", "Execution"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-sm uppercase tracking-[0.2em] text-white/72 md:text-base"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4 font-serif text-lg leading-relaxed text-white/60 md:text-xl">
                <p>
                  Before co-founding Deepblue, Mr. Liu was a Managing Director in
                  Acquisitions at Hines, where he helped source, acquire, develop, and
                  manage multifamily, office, and retail investments in the New York
                  metropolitan market.
                </p>
                <p>
                  His experience includes the development of One Vanderbilt and The
                  Whit, as well as acquisitions such as The Source at White Plains and
                  the Hudson Square Portfolio. Earlier in his career, he worked at
                  Jamestown Properties and Wells Fargo.
                </p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#0d121a]/70 p-5">
                <p className="font-serif text-xl text-white md:text-2xl">Education</p>
                <p className="mt-2 font-serif text-lg leading-relaxed text-white/48">
                  Carnegie Mellon University, Tepper School of Business (Finance) ·
                  CFA Charterholder
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Operating Model */}
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
            Operating Model
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            How Deepblue translates experience into a working platform.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            The firm is designed so fundraising, underwriting, and asset execution are
            part of the same operating loop instead of three disconnected processes.
          </motion.p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {operatingModel.map((item) => (
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

        {/* Asset Class Experience */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Asset Class Experience
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Hands-on experience across the asset classes that shape the strategy.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            The team&apos;s history spans office, mixed-use, multifamily, single-family
            rental, and value-add execution. That range helps us compare opportunity
            sets rather than chase whatever is fashionable.
          </motion.p>
          <motion.div className="mt-12" variants={itemVariants}>
            <InteractiveImageAccordion />
          </motion.div>
        </motion.section>

        {/* Notable Transactions */}
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
            Notable Transactions
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Representative transactions that inform how the team evaluates risk.
          </motion.h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {notableDeals.map((deal) => (
              <motion.div
                key={deal.name}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium transition-colors hover:bg-white/[0.05]"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <Award className="h-6 w-6 text-[#cca885]/55 transition-colors group-hover:text-[#cca885]" />
                <h3 className="mt-6 font-serif text-3xl text-white">{deal.name}</h3>
                <p className="mt-2 font-serif text-lg text-[#cca885]">{deal.type}</p>
                <p className="mt-3 font-serif text-lg leading-relaxed text-white/46">
                  {deal.location}
                </p>
                <p className="mt-6 font-serif text-lg leading-relaxed text-white/58 md:text-xl">
                  {deal.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing Quote */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-24 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(204,168,133,0.18),rgba(13,18,26,0.82)_38%,rgba(120,171,175,0.14))] p-10 text-center backdrop-blur-xl md:p-16"
            variants={itemVariants}
          >
            <Target className="mx-auto h-7 w-7 text-[#cca885]" />
            <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-3xl leading-relaxed text-white/78 md:text-4xl lg:text-5xl">
              &ldquo;Anthony leads acquisitions, asset management, and value-add
              execution. Ying leads capital formation, financial oversight, and
              investor relations. The partnership works because every investment
              decision is tied back to the operating plan.&rdquo;
            </blockquote>
          </motion.div>
        </motion.section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
