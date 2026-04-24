"use client";

import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CountUp } from "@/components/ui/animation/count-up";
import { InteractiveImageAccordion } from "@/components/ui/sections/interactive-image-accordion";
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
  { value: "16M+", label: "Square feet" },
  { value: "$10.4B", label: "Capital raised" },
  { value: "$3.8B", label: "Equity sourced" },
  { value: "25", label: "Years combined" },
];

const capabilities = [
  {
    title: "Capital formation",
    desc: "Investor relationships, fund structuring, financial oversight, and communication with the rigor sophisticated LPs expect.",
  },
  {
    title: "Acquisitions",
    desc: "Market selection, sourcing, underwriting, and transaction execution with institutional diligence standards.",
  },
  {
    title: "Asset management",
    desc: "Operational plans, renovation programs, and value-add implementation carried through to disposition.",
  },
];

const notableDeals = [
  { name: "One Vanderbilt", type: "Office / Retail", location: "New York, NY" },
  { name: "National Multifamily", type: "Multifamily", location: "Fort Lauderdale, FL" },
  { name: "Sunbelt SFR Portfolio", type: "Single Family Rental", location: "Multi-market" },
];

export default function AboutPage() {
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
            About Deepblue
          </motion.p>
          <motion.h1
            className="font-serif text-6xl leading-[1.05] text-white md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            A complementary leadership team built around real estate.
          </motion.h1>
          <motion.p
            className="mx-auto mt-8 max-w-4xl font-serif text-xl leading-relaxed text-white/60 md:text-2xl"
            variants={itemVariants}
          >
            Capital formation, acquisitions, and asset management — one team, one
            conversation.
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

        {/* 2 · Leadership — editorial image + split bios */}
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
            Leadership
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Two senior operators. One integrated story.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Raising capital, underwriting risk, and running business plans live in
            the same room — not three handoffs.
          </motion.p>

          <motion.div
            className="mt-20 grid gap-16 md:grid-cols-2 md:gap-0"
            variants={itemVariants}
          >
            <div className="md:pr-16">
              <div className="aspect-[4/5] w-full max-w-sm overflow-hidden bg-white/5">
                <img
                  src="/Ying.jpg"
                  alt="Ying Huang"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <p className="mt-8 font-sans text-xs uppercase tracking-[0.32em] text-[#cca885] md:text-sm">
                Capital formation
              </p>
              <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Ying Huang
              </h3>
              <p className="mt-6 font-serif text-lg leading-relaxed text-white/72 md:text-xl">
                Ms. Huang is a Founding Partner of Deepblue Capital Partners.
                Before co-founding Deepblue, she launched C-Star SFR Advisors,
                where she raised three residential funds and grew the
                firm&rsquo;s assets under management to $120 million.
              </p>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/58 md:text-lg">
                Prior to C-Star, Ms. Huang served as a Director and Partner at
                Starwood Capital Group, one of the world&rsquo;s largest real
                estate private equity firms. Over her nine-year tenure, she
                cultivated relationships with leading global investors —
                insurance companies, sovereign wealth funds, and high-net-worth
                wealth managers — and contributed to raising over $3.8 billion
                in equity for Starwood&rsquo;s three flagship private investment
                funds and seven co-investment vehicles across multifamily,
                retail, and hospitality. In 2016, she spearheaded
                Starwood&rsquo;s $4.5 billion hotel portfolio transaction with
                the largest Asian insurance company, securing the largest equity
                commitment in Starwood&rsquo;s history.
              </p>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/48 md:text-lg">
                Master&rsquo;s in Real Estate, Harvard University.
                Master&rsquo;s in Urban Planning and Urban Economics, Seoul
                National University. Bachelor of Arts, Fudan University.
              </p>
            </div>
            <div className="md:border-l md:border-[#cca885]/25 md:pl-16">
              <div className="aspect-[4/5] w-full max-w-sm overflow-hidden bg-white/5">
                <img
                  src="/Anthony.jpg"
                  alt="Anthony Liu"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <p className="mt-8 font-sans text-xs uppercase tracking-[0.32em] text-[#cca885] md:text-sm">
                Acquisitions &amp; asset management
              </p>
              <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                Anthony Liu
              </h3>
              <p className="mt-6 font-serif text-lg leading-relaxed text-white/72 md:text-xl">
                Mr. Liu is a Founding Partner of Deepblue Capital Partners.
                Before co-founding Deepblue, he served as a Managing Director in
                Acquisitions at Hines, a leading real estate investor and
                developer, where he sourced, acquired, developed, and managed
                investments across multifamily, commercial office, and retail in
                the New York metropolitan market. Notable projects include the
                development of One Vanderbilt and The Whit, and the acquisitions
                of The Source at White Plains and The Hudson Square Portfolio.
              </p>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/58 md:text-lg">
                Prior to Hines, Mr. Liu was a member of the investments team at
                Jamestown Properties and an investment banking analyst at Wells
                Fargo. He serves on the boards of Apex for Youth and the
                Chinese-American Planning Council, and is active with the FF
                Fraternity.
              </p>
              <p className="mt-5 font-serif text-base leading-relaxed text-white/48 md:text-lg">
                Carnegie Mellon University, Tepper School of Business, with a
                concentration in finance and business. CFA charterholder.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 3 · How We Operate — numbered typographic, no cards */}
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
            How we operate
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Three capabilities. One conversation.
          </motion.h2>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-0">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
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
                  {c.title}
                </h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4 · Asset Class Experience — interactive accordion + deal strip */}
        <motion.section
          className="mx-auto max-w-[1680px] px-6 pb-32 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Asset class experience
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Hands-on across the asset classes that shape the strategy.
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/58 md:text-2xl"
            variants={itemVariants}
          >
            Office, mixed-use, multifamily, and single-family rental — range that helps
            us compare opportunities rather than chase whatever is fashionable.
          </motion.p>
          <motion.div className="mt-14" variants={itemVariants}>
            <InteractiveImageAccordion />
          </motion.div>

          {/* Notable deals strip */}
          <motion.div
            className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3"
            variants={itemVariants}
          >
            {notableDeals.map((d) => (
              <div key={d.name}>
                <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#cca885]">
                  {d.type}
                </p>
                <p className="mt-3 font-serif text-2xl text-white md:text-3xl">
                  {d.name}
                </p>
                <p className="mt-1 font-serif text-base text-white/50 md:text-lg">
                  {d.location}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
