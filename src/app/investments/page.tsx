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

const whatWeDo = [
  {
    title: "Disciplined Due Diligence",
    desc: "Underwriting is where conviction is built. Every transaction passes through a framework that prices risk before return, validates operators on execution history, and commits capital only where basis, business plan, and downside scenario all align.",
  },
  {
    title: "Operational Alpha",
    desc: "Returns are realized after closing, not at it. Active leasing, targeted capex, and operator-led submarket repositioning turn underwritten upside into NOI growth that compounds over the hold.",
  },
  {
    title: "Strategic Conviction",
    desc: "Our firm name, Deepblue Capital Partners, is inspired by the 1997 chess match in which IBM's Deep Blue defeated world champion Garry Kasparov — a historic moment that symbolized the power of strategic thinking, precision, and bold innovation, values we bring to every investment decision.",
  },
];

const multifamilyBullets = [
  "Concentrated exposure to multifamily assets in the U.S. markets with the strongest demographic, employment, and wage tailwinds.",
  "Active value creation through targeted capital reinvestment, operational repositioning, and revenue strategy that compound NOI over the hold.",
  "Institutional capital structures engineered to enhance returns while preserving downside protection.",
];

const affordableBullets = [
  "Preserving long-term affordability for working families and seniors, sustaining the communities that depend on attainable housing to thrive.",
  "Partnerships with mission-aligned operators who safeguard property quality, regulatory compliance, and resident stability across the full affordability period.",
  "Investor returns are a function of the work itself: the federal LIHTC structure converts long-term preservation into tax-advantaged yield and stable operating cash flow.",
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
    desc: "Quarterly investor reporting, transparent waterfall calculations, and the reporting rhythm sophisticated LPs expect. The same standard whether the check is five million or fifty.",
  },
];

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
    desc: "Multifamily and adjacent strategies where operations and positioning unlock outsized value. We acquire assets that under-earn their submarket and underwrite a clear path to closing the gap.",
  },
  {
    title: "Sunbelt selection",
    desc: "Sunbelt corridors where migration, jobs, and household formation outpace national averages. We focus on submarkets where the next decade of demand is already visible in today's permits and payrolls.",
  },
  {
    title: "Anchored to replacement cost",
    desc: "Going-in basis and replacement cost define real downside protection. Our underwriting starts from what a willing builder would charge to deliver the same asset today. We refuse to pay above it.",
  },
  {
    title: "Institutional risk controls",
    desc: "Structured business plans with measurable milestones, monitored at the asset and portfolio level. Active oversight surfaces inflection points before they become surprises.",
  },
];

const tacticalPillars = [
  {
    title: "Boundless",
    desc: "Our strategy is unconstrained by asset class, capital structure, or geography within U.S. real estate. The mandate is the underwriting, not the category.",
  },
  {
    title: "Opportunistic",
    desc: "Every market environment, stable or dislocated, produces opportunities for capital with the conviction to underwrite them. Windows of dislocation open and close without warning. We move with the conviction of a principal and the discipline of an institution, capturing opportunities that slower capital cannot.",
  },
  {
    title: "Asymmetric",
    desc: "We pursue transactions that traditional platforms cannot, whether by sourcing, structure, or speed. The result is a portfolio of asymmetric return profiles with lower correlation to broader markets and resilience across cycles.",
  },
];

export default function InvestmentsPage() {
  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Hero — banner image + editorial headline */}
        <motion.section
          className="flex w-full flex-col px-[max(1.5rem,14vw)] pb-24 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative aspect-[2.34/1] w-full overflow-hidden"
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
              className="font-serif text-stat leading-[1.05] text-white"
              variants={itemVariants}
            >
              Real estate exposure built where America is growing.
            </motion.h1>
            <motion.p
              className="max-w-xl self-start ml-auto font-serif text-body leading-relaxed text-white/60"
              variants={itemVariants}
            >
              Deepblue invests across a diversified U.S. real estate platform,
              anchored in the high-growth Sunbelt. Demographic momentum and
              active management compound risk-adjusted returns.
            </motion.p>
          </div>
        </motion.section>

        {/* 1 · What We Do — three-pillar hover-to-reveal */}
        <motion.section
          id="what-we-do"
          className="w-full scroll-mt-28 px-[max(1.5rem,14vw)] pb-48 pt-24"
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
              What We Do
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
            We invest with conviction across U.S. real estate.
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
                style={{ backgroundImage: "url(/investments/bright.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>

            <motion.div className="space-y-10" variants={itemVariants}>
              {whatWeDo.map((w) => (
                <motion.div
                  key={w.title}
                  className="group"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-h3-md text-white">
                    {w.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/50 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-5 font-serif text-body leading-relaxed text-white/60">
                    {w.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 2 · Private Transactions — wraps Multifamily, Strategic Ops, Investment Thesis, Affordable */}
        <section id="private-transactions" className="w-full scroll-mt-28">
          {/* Block intro */}
          <motion.div
            className="w-full px-[max(1.5rem,14vw)] pb-24 pt-24"
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
                Private Transactions
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
              Two complementary strategies, one underwriting standard.
            </motion.h2>
            <motion.div
              className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
              variants={accentRule}
            />
          </motion.div>

          {/* 2a · Multifamily */}
          <motion.div
            className="w-full px-[max(1.5rem,14vw)] pb-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
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
                <h3 className="font-serif text-h3-md text-white">
                  Multifamily
                </h3>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50" />
                <p className="mt-6 font-serif text-body leading-relaxed text-white/60">
                  We acquire value-add multifamily in high-growth Sunbelt
                  submarkets. Disciplined basis, hands-on operations, and
                  partnerships with seasoned local operators drive cash-flow
                  growth and durable rent expansion.
                </p>
                <ul className="mt-8 space-y-4 md:space-y-5">
                  {multifamilyBullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-4 font-serif text-body leading-relaxed text-white/60"
                    >
                      <span
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-[#cca885]/70 md:w-4"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* 2b · Strategic Operations */}
          <motion.div
            className="w-full px-[max(1.5rem,14vw)] pb-32 pt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
              variants={itemVariants}
            >
              Relationships compound. Execution scales.
            </motion.h3>
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
                >
                  <p className="font-serif text-stat leading-none text-[#cca885]/35 transition-colors duration-500 group-hover:text-[#cca885]/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-500 ease-out group-hover:w-20 group-hover:bg-[#cca885]" />
                  <h4 className="mt-6 font-serif text-h3-md text-white">
                    {p.title}
                  </h4>
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                    <div className="min-h-0 overflow-hidden">
                      <p className="mt-4 font-serif text-body leading-relaxed text-white/55 opacity-100 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2c · Investment Thesis */}
          <motion.div
            className="w-full px-[max(1.5rem,14vw)] pb-32 pt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h3
              className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
              variants={itemVariants}
            >
              Where demographic momentum and operational rigor compound.
            </motion.h3>
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
                  <p className="font-serif text-[clamp(4.5rem,9vw,9.5rem)] leading-none text-[#cca885]">
                    <CountUp value={s.value} delay={0.2 + i * 0.15} />
                  </p>
                  <p className="mt-3 font-serif text-body text-white">
                    {s.label}
                  </p>
                  <p className="mt-3 font-serif text-body leading-relaxed text-white/55">
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
                  <p className="font-serif text-h3-lg leading-none text-[#cca885]/35 transition-colors duration-300 group-hover:text-[#cca885]/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h4 className="font-serif text-h3-sm text-white">
                      {t.title}
                    </h4>
                    <p className="mt-3 font-serif text-body leading-relaxed text-white/55">
                      {t.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2d · Affordable Housing */}
          <motion.div
            className="w-full px-[max(1.5rem,14vw)] pb-48 pt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <motion.div className="order-2 md:order-1" variants={itemVariants}>
                <h3 className="font-serif text-h3-md text-white">
                  Affordable Housing
                </h3>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50" />
                <p className="mt-6 font-serif text-body leading-relaxed text-white/60">
                  Through Low-Income Housing Tax Credit (LIHTC) partnerships,
                  we preserve affordable rental housing for the working
                  families and seniors who keep our communities running. The
                  federal LIHTC structure aligns long-term stewardship with
                  tax-advantaged yield for our investors.
                </p>
                <ul className="mt-8 space-y-4 md:space-y-5">
                  {affordableBullets.map((b) => (
                    <motion.li
                      key={b}
                      className="group flex gap-4 font-serif text-body leading-relaxed text-white/60 transition-colors duration-300 hover:text-white/85"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-[#cca885]/70 transition-all duration-300 group-hover:w-6 group-hover:bg-[#cca885] md:w-4 md:group-hover:w-8"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
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
          </motion.div>
        </section>

        {/* 3 · Tactical Opportunities */}
        <motion.section
          id="tactical-opportunities"
          className="w-full scroll-mt-28 px-[max(1.5rem,14vw)] pb-48 pt-24"
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
              Tactical Opportunities
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
                  <h3 className="font-serif text-h3-md text-white">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/50 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-5 font-serif text-body leading-relaxed text-white/60">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <p className="pb-10 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
