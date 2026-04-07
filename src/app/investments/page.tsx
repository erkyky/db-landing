"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FeaturedSectionStats } from "@/components/ui/featured-section-stats";
import NavMenu from "@/components/ui/nav-menu";

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

const heroStats = [
  {
    value: "14-16%",
    label: "Target gross IRR",
    detail: "Designed for 10-12% net returns after fees and carry.",
  },
  {
    value: "$30M",
    label: "Target equity",
    detail: "Focused portfolio construction across rental housing strategies.",
  },
  {
    value: "3+1+1",
    label: "Fund term",
    detail: "Time to execute, stabilize, and exit with discipline.",
  },
  {
    value: "1-3%",
    label: "Distributable yield",
    detail: "Targeted post-stabilization cash flow to investors.",
  },
];

const convictionPoints = [
  "Acquire rental housing with operational upside in supply-constrained Sunbelt submarkets.",
  "Underwrite to resilient demand, durable rent growth, and multiple exit paths before upside.",
  "Move with entrepreneurial speed while keeping institutional standards in diligence and reporting.",
];

const strategyPillars: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
}> = [
  {
    icon: Target,
    title: "Value-add rental housing",
    desc: "Multifamily and adjacent rental strategies where operations, renovation, and positioning can create outsized value.",
  },
  {
    icon: MapPin,
    title: "Sunbelt market selection",
    desc: "Texas, North Carolina, and Georgia remain the focus because migration, jobs, and household formation support rent growth.",
  },
  {
    icon: Building2,
    title: "Basis-driven acquisitions",
    desc: "We prioritize deals where going-in basis, replacement cost, and local supply pipelines create real downside protection.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional risk controls",
    desc: "The team applies disciplined underwriting, structured business plans, and active asset management learned at scale.",
  },
];

const marketSignals = [
  {
    value: "3x",
    label: "Population growth",
    detail: "Sunbelt migration remains materially stronger than national averages.",
    icon: TrendingUp,
  },
  {
    value: "6%",
    label: "Job growth premium",
    detail: "Employment expansion supports renter demand across target markets.",
    icon: BarChart3,
  },
  {
    value: "6%",
    label: "Wage growth premium",
    detail: "Income growth improves affordability resilience and absorption.",
    icon: DollarSign,
  },
];

const executionSteps = [
  {
    step: "01",
    title: "Source with selectivity",
    desc: "Target off-market and relationship-driven opportunities where we can see operational upside before it is fully priced.",
  },
  {
    step: "02",
    title: "Execute the business plan",
    desc: "Prioritize renovations, leasing, expense controls, and tenant experience improvements that support NOI growth quickly.",
  },
  {
    step: "03",
    title: "Exit with options",
    desc: "Maintain flexibility between recapitalization, portfolio sale, or asset-level disposition based on market conditions.",
  },
];

const whyDeepblue = [
  "Led by senior operators with experience at Hines and Starwood Capital.",
  "Track record across multiple market cycles, asset classes, and capital raises.",
  "Agile execution model built to move faster than large institutions without sacrificing rigor.",
  "Alignment around risk-adjusted returns, transparent reporting, and repeatable operating plans.",
];

export default function InvestmentsPage() {
  return (
    <>
      <NavMenu />

      {/* Cinematic Scroll-Pinned Hero */}
      <CinematicHero
        eyebrow="Deepblue Value-Add Fund"
        headline="Real estate exposure built for the next phase of Sunbelt rental housing."
        subtitle="Deepblue invests in value-add rental housing where demographic tailwinds, selective basis, and active asset management can compound durable risk-adjusted returns."
        stats={heroStats.map((s) => ({ value: s.value, label: s.label }))}
        badges={[
          { emoji: "🏠", title: "Value-add housing", subtitle: "Core strategy" },
          { emoji: "☀️", title: "Sunbelt focus", subtitle: "TX, NC, GA markets" },
          { emoji: "🛡️", title: "Institutional discipline", subtitle: "Risk-first approach" },
        ]}
        ctaHref="mailto:investors+prosper@deepbluepartners.co?subject=Investment%20Interest"
        ctaLabel="Contact Investor Relations"
      />

      <BeamsBackground intensity="subtle" className="min-h-0">

        {/* Fund Snapshot Card (moved from hero sidebar) */}
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
                Fund Overview
              </p>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
                Targeted outcomes with clear portfolio discipline.
              </h2>
              <div className="mt-10 grid gap-4">
                {convictionPoints.map((point) => (
                  <motion.div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm shadow-premium"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#cca885]" />
                    <p className="font-serif text-lg leading-relaxed text-white/72 md:text-xl">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-sans text-sm uppercase tracking-[0.28em] text-[#cca885] md:text-base">
                      Fund Snapshot
                    </p>
                    <p className="mt-2 font-serif text-2xl text-white md:text-3xl lg:text-4xl">
                      Key metrics at a glance.
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/35" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.5rem] border border-white/10 bg-[#0d121a]/75 p-5"
                    >
                      <p className="font-serif text-4xl text-white md:text-5xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 font-serif text-base text-[#cca885] md:text-lg">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-serif text-base leading-relaxed text-white/40">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[#78abaf]/20 bg-[#78abaf]/8 p-5">
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-[#78abaf]" />
                    <div>
                      <p className="font-serif text-xl text-white md:text-2xl">
                        Built for partnership
                      </p>
                      <p className="mt-2 font-serif text-lg leading-relaxed text-white/55">
                        Investor reporting, operating plans, and market selection are
                        structured for clarity. The fund is designed to show where value
                        creation comes from, not just where capital is deployed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <ContainerScroll
          className="px-4 md:px-8 lg:px-16"
          cardClassName="h-[30rem] md:h-[42rem]"
          innerClassName="p-0"
          titleComponent={
            <div className="mb-10 px-4">
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Scroll Showcase
              </p>
              <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
                A visual read on the kind of housing we want to own.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                We look for durable neighborhoods, operational upside, and assets
                where better execution can matter more than financial engineering.
              </p>
            </div>
          }
        >
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1800&auto=format&fit=crop"
              alt="Sunbelt multifamily community with outdoor amenities"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-[#0d121a]/38 to-[#0d121a]/6" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d121a]/65 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 font-sans text-sm uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm md:left-8 md:top-8 md:text-base">
              Target markets: TX, NC, GA
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.7rem] border border-white/10 bg-[#0d121a]/78 p-6 backdrop-blur-xl">
                  <p className="font-serif text-2xl text-white md:text-3xl lg:text-4xl">
                    Underwriting for demographic strength and execution upside.
                  </p>
                  <p className="mt-3 max-w-xl font-serif text-lg leading-relaxed text-white/58 md:text-xl">
                    The fund is shaped around neighborhoods where migration, job
                    creation, and housing affordability support long-term renter demand.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                  {[
                    { value: "92-95%", label: "Target stabilized occupancy" },
                    { value: "100-250", label: "Typical renovation scope / unit" },
                    { value: "2-4", label: "Exit options per deal, not just one" },
                  ].map((item) => (
                    <div
                      key={item.label}
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

        <FeaturedSectionStats
          title="Return Profile"
          subtitle="Target performance ranges are framed around renovation pacing, lease-up discipline, and durable cash flow rather than optimistic exit assumptions."
          stats={[
            { value: "14-16%", label: "Target gross IRR", sub: "10-12% net" },
            { value: "1.6-1.8x", label: "Target equity multiple", sub: "Net of fees" },
            { value: "$30M", label: "Fund size", sub: "Target equity capital" },
            { value: "3+1+1", label: "Term structure", sub: "Years" },
          ]}
        />

        {/* Investment Strategy */}
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
            Investment Strategy
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            What the fund is built to underwrite well.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            The core discipline is simple: buy the right basis, operate with precision,
            and only stretch where the market gives a rational margin for it.
          </motion.p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {strategyPillars.map((item) => (
              <motion.div
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium transition-all hover:bg-white/[0.05]"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <item.icon className="h-7 w-7 text-[#cca885]/75 transition-colors group-hover:text-[#cca885]" />
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

        {/* Market Conviction */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={itemVariants}>
              <p className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Market Conviction
              </p>
              <h2 className="font-serif text-5xl text-white md:text-6xl lg:text-7xl">
                Why the Sunbelt remains central to the thesis.
              </h2>
              <p className="mt-5 max-w-2xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                Deepblue focuses on the parts of the country where people, employers,
                and capital continue to relocate, because those flows matter more to
                long-term housing demand than short-lived market sentiment.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {marketSignals.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm shadow-premium"
                  variants={itemVariants}
                >
                  <stat.icon className="h-6 w-6 text-[#78abaf]" />
                  <p className="mt-5 font-serif text-6xl text-white md:text-7xl">{stat.value}</p>
                  <p className="mt-2 font-serif text-lg text-[#cca885] md:text-xl">{stat.label}</p>
                  <p className="mt-3 font-serif text-lg leading-relaxed text-white/48">
                    {stat.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Execution Model */}
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
            Execution Model
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            A three-part operating model from sourcing to exit.
          </motion.h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {executionSteps.map((step) => (
              <motion.div
                key={step.step}
                className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                    Step {step.step}
                  </span>
                  <Clock className="h-5 w-5 text-white/25" />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-white md:text-[2.5rem]">
                  {step.title}
                </h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Deepblue */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-28 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm shadow-premium md:p-10"
              variants={itemVariants}
            >
              <p className="font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
                Why Deepblue
              </p>
              <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl lg:text-7xl">
                Experience, speed, and reporting discipline in one platform.
              </h2>
              <p className="mt-5 font-serif text-xl leading-relaxed text-white/58 md:text-2xl">
                The advantage is not just access. It is knowing how to structure the
                plan, what to measure after closing, and how to communicate it to
                investors with precision.
              </p>
            </motion.div>

            <div className="space-y-4">
              {whyDeepblue.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm shadow-premium"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <span className="mt-1 font-sans text-sm uppercase tracking-[0.28em] text-[#cca885] md:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-lg leading-relaxed text-white/66 md:text-xl">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Investor Relations CTA */}
        <motion.section
          className="mx-auto max-w-7xl px-8 pb-24 md:px-16 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(204,168,133,0.18),rgba(13,18,26,0.82)_40%,rgba(120,171,175,0.14))] p-10 backdrop-blur-xl md:p-14"
            variants={itemVariants}
          >
            <p className="font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base">
              Investor Relations
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl text-white md:text-6xl">
              Start the conversation if you want current fund materials or deeper
              underwriting detail.
            </h2>
            <p className="mt-5 max-w-2xl font-serif text-xl leading-relaxed text-white/62 md:text-2xl">
              We can walk through the fund thesis, target market selection, and how
              Deepblue approaches value creation at the asset level.
            </p>
            <a
              href="mailto:investors+prosper@deepbluepartners.co?subject=Investment%20Interest"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#cca885] px-9 py-4 font-sans text-base uppercase tracking-[0.2em] text-[#0d121a] transition-colors hover:bg-[#d8b693]"
            >
              Contact Investor Relations
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.section>

        <p className="px-8 pb-8 text-center font-serif text-base text-white/25">
          Past or targeted performance is not a guarantee, projection, or prediction
          and is not necessarily indicative of future results.
        </p>
      </BeamsBackground>
    </>
  );
}
