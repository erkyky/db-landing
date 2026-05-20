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

const accentRule = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

const imageRevealLeft = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.8, ease: "circOut" as const },
  },
};

const imageRevealRight = {
  hidden: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.8, ease: "circOut" as const },
  },
};

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
    desc: "Multifamily and adjacent strategies where operations and positioning create outsized value. We buy assets that under-earn their submarket and underwrite a clear path to closing the gap.",
  },
  {
    title: "Sunbelt selection",
    desc: "TX, NC, GA — migration, jobs, and household formation support durable rent growth. We focus on submarkets where the next decade of demand is already visible in today's permits and payrolls.",
  },
  {
    title: "Basis discipline",
    desc: "Going-in basis and replacement cost define real downside protection. Our underwriting starts from what a willing builder would charge to deliver the same asset today — and refuses to pay above it.",
  },
  {
    title: "Institutional risk controls",
    desc: "Disciplined underwriting, structured business plans, and active asset management at scale. Quarterly reporting, transparent waterfalls, and a portfolio review cadence built for sophisticated LPs.",
  },
];

const whatWeDo = [
  {
    title: "Disciplined Due Diligence",
    desc: "Our approach is built on rigorous underwriting that measures risk while identifying the catalysts for value. We engage only in friendly transactions and partner with experienced operators to deliver results.",
  },
  {
    title: "Transformative Impact",
    desc: "We create value by investing in properties where our capital, market insight, and operational expertise drive measurable transformation — for residents and investors alike.",
  },
];

const tacticalPillars = [
  {
    title: "Flexible",
    desc: "Our strategy is unconstrained by asset class within rental housing, capital structure, or Sunbelt geography. We pursue compelling risk-adjusted returns wherever they appear.",
  },
  {
    title: "Decisive",
    desc: "Markets shift quickly and windows of opportunity open and close without warning. We respond with conviction — moving decisively, with the judgment and discipline to capture opportunities less-equipped investors miss.",
  },
  {
    title: "Distinctive",
    desc: "Our firm name, Deepblue Capital Partners, is inspired by the 1997 chess match in which IBM's Deep Blue defeated world champion Garry Kasparov — a historic moment that symbolized the power of strategic thinking, precision, and bold innovation, values we bring to every investment decision.",
  },
];

const strategicOperations = [
  {
    title: "Long-term industry relationships",
    desc: "Deepblue partners with brokers, lenders, and joint-venture sponsors built over twenty-five years. We see opportunities before they're listed and price them with conviction.",
  },
  {
    title: "Local operating partners",
    desc: "Every deal pairs Deepblue's underwriting with on-the-ground operators who know their submarket — leasing, construction, and property management run by people who live where we invest.",
  },
  {
    title: "Institutional service standards",
    desc: "Quarterly investor reporting, transparent waterfall calculations, and the diligence rhythm sophisticated LPs expect. The same standard whether the check is five million or fifty.",
  },
];

export default function InvestmentsPage() {
  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* 1 · Hero — banner image + editorial headline */}
        <motion.section
          className="mx-auto flex max-w-[1440px] flex-col px-6 pb-24 pt-32 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative h-[42vh] w-full overflow-hidden md:h-[58vh]"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/investments/houston-skyline.jpg)",
                backgroundColor: "#1a2332",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/40 via-transparent to-transparent" />
          </motion.div>

          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1.1fr_1fr] md:gap-20">
            <motion.h1
              className="font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Real estate exposure built for Sunbelt rental housing.
            </motion.h1>
            <motion.p
              className="max-w-xl self-end font-serif text-xl leading-relaxed text-white/60 md:text-2xl"
              variants={itemVariants}
            >
              Deepblue invests across multifamily and affordable rental housing in
              the high-growth Sunbelt — where demographic momentum and active
              management compound risk-adjusted returns.
            </motion.p>
          </div>
        </motion.section>

        {/* 2 · Private Transactions */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Private Transactions
          </motion.p>
          <motion.h2
            className="max-w-4xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            We acquire rental housing across two complementary strategies.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          {/* Row 1 — Multifamily (image left, reveals from left) */}
          <div className="mt-20 grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <motion.div
              className="relative h-[280px] overflow-hidden md:h-[360px]"
              variants={imageRevealLeft}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{ backgroundImage: "url(/investments/multifamily.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-serif text-4xl text-white md:text-5xl">
                Multifamily
              </h3>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50" />
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/65 md:text-2xl">
                We acquire value-add multifamily in high-growth Sunbelt submarkets.
                Disciplined basis, hands-on operations, and partnerships with
                seasoned local operators drive cash-flow growth and durable rent
                expansion.
              </p>
            </motion.div>
          </div>

          {/* Row 2 — Affordable (text left, image reveals from right) */}
          <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-2 md:gap-20">
            <motion.div className="order-2 md:order-1" variants={itemVariants}>
              <h3 className="font-serif text-4xl text-white md:text-5xl">
                Affordable Housing
              </h3>
              <div className="mt-5 h-px w-12 bg-[#cca885]/50" />
              <p className="mt-6 font-serif text-xl leading-relaxed text-white/65 md:text-2xl">
                Through Low-Income Housing Tax Credit (LIHTC) partnerships, we
                preserve affordable rental housing — delivering durable yield,
                federal tax benefits, and lasting community impact in the markets
                where workforce families want to live.
              </p>
            </motion.div>
            <motion.div
              className="relative order-1 h-[280px] overflow-hidden md:order-2 md:h-[360px]"
              variants={imageRevealRight}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{ backgroundImage: "url(/investments/affordable.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>
          </div>
        </motion.section>

        {/* 3 · What We Do — hover to reveal */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            We invest with discipline across Sunbelt rental housing.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-0">
            {whatWeDo.map((w, i) => (
              <motion.div
                key={w.title}
                className={`group ${i > 0 ? "md:border-l md:border-[#cca885]/15 md:pl-16" : "md:pr-16"}`}
                variants={itemVariants}
              >
                <h3 className="font-serif text-3xl text-white md:text-4xl">
                  {w.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-[#cca885]" />
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <p className="mt-6 font-serif text-xl leading-relaxed text-white/60 opacity-100 transition-opacity duration-500 ease-out md:text-2xl md:opacity-0 md:group-hover:opacity-100">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4 · Investment Thesis — market signals + tenets */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Investment Thesis
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Where demographic momentum and operational discipline compound.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-0">
            {marketSignals.map((s, i) => (
              <motion.div
                key={s.label}
                className={`group relative px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-5xl text-[#cca885] md:text-6xl lg:text-7xl">
                  <CountUp value={s.value} delay={0.2 + i * 0.15} />
                </p>
                <p className="mt-3 font-serif text-xl text-white md:text-2xl">
                  {s.label}
                </p>
                <p className="mt-3 font-serif text-lg leading-relaxed text-white/55 md:text-xl">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            {tenets.map((t, i) => (
              <motion.div
                key={t.title}
                className="group flex gap-6"
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
          </div>
        </motion.section>

        {/* 5 · Tactical Opportunities — image + three pillars */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Tactical Opportunities
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            We invest flexible capital to construct a differentiated portfolio for our investors.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-20 grid items-stretch gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <motion.div
              className="relative h-[400px] overflow-hidden lg:h-auto"
              variants={imageRevealLeft}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                style={{ backgroundImage: "url(/investments/tactical.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>

            <motion.div className="space-y-10" variants={itemVariants}>
              {tacticalPillars.map((p) => (
                <motion.div
                  key={p.title}
                  className="group"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-3xl text-white md:text-4xl">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/50 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-5 font-serif text-xl leading-relaxed text-white/60 md:text-2xl">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 6 · Strategic Operations */}
        <motion.section
          className="mx-auto max-w-[1440px] px-6 pb-48 pt-24 md:px-12 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="mb-4 font-sans text-sm uppercase tracking-[0.32em] text-[#cca885] md:text-base"
            variants={itemVariants}
          >
            Strategic Operations
          </motion.p>
          <motion.h2
            className="max-w-5xl font-serif text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Relationships compound. Execution scales.
          </motion.h2>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
            variants={accentRule}
          />

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-0">
            {strategicOperations.map((p, i) => (
              <motion.div
                key={p.title}
                className={`group relative px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-6xl leading-none text-[#cca885]/35 transition-colors duration-300 group-hover:text-[#cca885]/80 md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                <h3 className="mt-6 font-serif text-4xl text-white md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-4 font-serif text-xl leading-relaxed text-white/55 md:text-2xl">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
