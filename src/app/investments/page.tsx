"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
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

// Hero wrapper: delays text descendants so the image clip-path reveal is
// clearly the first thing the audience sees, then the text cascades in.
const heroTextContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.55, staggerChildren: 0.12 },
  },
};

const headlineContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025 },
  },
};

const headlineLetter = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
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
    desc: "Discipline compounds over time. Every investment is examined through market fundamentals, local realities, operational feasibility, and downside resilience before capital is committed.",
  },
  {
    title: "Operational Alpha",
    desc: "Alpha in real estate is realized through execution. Institutional analysis is paired with firsthand local insight to guide capital improvements, portfolio positioning, and operational decision-making shaped by how communities actually live and function.",
  },
  {
    title: "Strategic Conviction",
    desc: "We value preparation, patience, and independent thinking when markets become emotional. The name Deepblue was inspired by the historic 1997 match in which IBM's Deep Blue defeated world chess champion Garry Kasparov through strategic precision and measured execution under pressure.",
  },
];

const multifamilyBullets = [
  "Focused on markets supported by migration, employment expansion, and sustained housing demand.",
  "Asset improvements informed by on-the-ground observation, practical usage patterns, and day-to-day property experience.",
  "Partners, financing, and vendors selected with an emphasis on durability, alignment, and consistency through changing market conditions.",
];

const affordableBullets = [
  {
    label: "Defensive Cash Flow",
    desc: "Predictable income supported by essential housing demand, public-private structures, and disciplined expense management across market cycles.",
  },
  {
    label: "Stability",
    desc: "Enduring housing fundamentals reinforced by resident continuity, operational consistency, and assets designed for sustained performance.",
  },
  {
    label: "Responsible Ownership",
    desc: "Stewardship-driven ownership that respects the character of each community, supports resident well-being, and aligns investor outcomes with lasting social impact.",
  },
];

const strategicOperations = [
  {
    title: "Long-term Industry Relationships",
    desc: "Deepblue partners with brokers, lenders, and joint-venture sponsors built over twenty-five years. We see opportunities before they're listed and price them with conviction.",
  },
  {
    title: "Ground-level Operating Expertise",
    desc: "Every deal pairs Deepblue's underwriting with on-the-ground operators who know their submarket, with leasing, construction, and property management run by people who live where we invest.",
  },
  {
    title: "Institutional Service Standards",
    desc: "Quarterly investor updates, clear capital account reporting, and a communication cadence aligned with the expectations of sophisticated limited partners.",
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
    title: "Resident-Centered Repositioning",
    desc: "We improve assets in ways residents notice and value over time.",
  },
  {
    title: "Growth Shaped by Migration",
    desc: "We invest where migration and employment continue to support housing demand.",
  },
  {
    title: "Thoughtful Basis Selection",
    desc: "We avoid pricing disconnected from replacement cost and local fundamentals.",
  },
  {
    title: "Institutional Risk Controls",
    desc: "We see inflection before others see surprise.",
  },
];

const tacticalPillars = [
  {
    title: "Boundless",
    desc: "Our strategy is unconstrained by asset class, capital structure, or geography within U.S. real estate. The mandate is the underwriting, not the category.",
  },
  {
    title: "Opportunistic",
    desc: "Every market environment, stable or dislocated, produces opportunities for capital with the conviction to underwrite them. Windows of dislocation open and close without warning. We move selectively and decisively when market dislocation creates opportunities that disciplined capital is positioned to capture.",
  },
  {
    title: "Asymmetric",
    desc: "We pursue transactions that traditional platforms cannot, whether by sourcing, structure, or speed. The result is a portfolio of asymmetric return profiles with lower correlation to broader markets and resilience across cycles.",
  },
];

export default function InvestmentsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);
  const imageStyle = reduceMotion ? undefined : { y: imageY, opacity: imageOpacity };
  const textStyle = reduceMotion ? undefined : { y: textY, opacity: textOpacity };

  // Investment Thesis — pinned scroll choreography (desktop only). Stats reveal
  // first, then on continued scroll they slide down/out while the tenets rise
  // up/in; the title stays fixed as the anchor.
  const thesisRef = useRef<HTMLElement>(null);
  // Compute scroll progress through the section directly from layout on every
  // scroll. framer's useScroll({target}) caches the target's offset and the
  // heavy content above this section (hero + background images + font swap)
  // shifts it after measurement, leaving the progress stuck — so we read
  // getBoundingClientRect live, which always reflects the true position.
  const thesisProgress = useMotionValue(0);
  useEffect(() => {
    const el = thesisRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      thesisProgress.set(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [thesisProgress]);
  // Smooth the raw scroll progress through a gentle spring so the reveals glide
  // in and settle with a faint follow-through instead of tracking the scrollbar
  // 1:1 (which read as a rigid "magnetic" snap). Low-ish stiffness + damping ~20
  // = smooth with a barely-there overshoot.
  const smoothProgress = useSpring(thesisProgress, { stiffness: 90, damping: 20, mass: 0.7 });
  // Stats: slow fade+rise in (0.05→0.18), sit a long while (→0.46), then fade
  // out sinking down. Tenets: rise+fade in (0.54→0.70) and stay to the end so
  // there's no dead "nothing happening" tail before the section closes.
  const statsOpacity = useTransform(smoothProgress, [0.05, 0.18, 0.46, 0.56], [0, 1, 1, 0]);
  const statsY = useTransform(smoothProgress, [0.05, 0.18, 0.46, 0.56], [30, 0, 0, 50]);
  const tenetsOpacity = useTransform(smoothProgress, [0.54, 0.7, 1], [0, 1, 1]);
  const tenetsY = useTransform(smoothProgress, [0.54, 0.7], [60, 0]);
  const pinned = !reduceMotion;

  // Affordable Housing: pin the right image to the LEFT column's resting height
  // (desktop only) so it lines up with the third bullet and adapts to
  // zoom/resize. We measure ONLY on load and on window resize — never via a
  // ResizeObserver — so hovering a bullet (which expands a description and
  // grows the column) can't retrigger a measurement and resize the image.
  const affordableTextRef = useRef<HTMLDivElement>(null);
  const [affordableImgH, setAffordableImgH] = useState<number | null>(null);
  useEffect(() => {
    const el = affordableTextRef.current;
    if (!el) return;
    const measure = () => {
      const lg = window.matchMedia("(min-width: 1024px)").matches;
      setAffordableImgH(lg ? el.offsetHeight : null);
    };
    measure();
    const raf = requestAnimationFrame(measure);
    // Re-measure once webfonts settle (metrics can shift the resting height).
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Shared markup for the thesis content — reused by the pinned (desktop) and
  // stacked (mobile / reduced-motion) layouts. CSS hover so no motion wrapper
  // is needed on the items themselves.
  const statsGrid = (
    <div className="grid gap-12 sm:grid-cols-3 sm:gap-0">
      {marketSignals.map((s, i) => (
        <div
          key={s.label}
          className={`group relative px-0 transition-transform duration-300 hover:-translate-y-1 sm:px-8 ${i > 0 ? "sm:border-l sm:border-[#cca885]/15" : ""}`}
        >
          <p className="font-serif text-h2 leading-none text-[#cca885]">
            <CountUp
              value={s.value}
              delay={0.2 + i * 0.15}
              numberClassName="text-[1.4em] leading-none"
              suffixClassName="text-[0.7em] leading-none"
            />
          </p>
          <p className="mt-3 font-serif text-h3-sm text-white">{s.label}</p>
          <p className="mt-3 font-serif text-body leading-normal text-white/55">{s.detail}</p>
        </div>
      ))}
    </div>
  );

  const tenetsGrid = (
    <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
      {tenets.map((t, i) => (
        <div
          key={t.title}
          className="group flex gap-5 transition-transform duration-300 hover:translate-x-1.5"
        >
          <p className="font-serif text-h3-lg leading-none text-[#cca885]/35 transition-colors duration-300 group-hover:text-[#cca885]/80">
            {String(i + 1).padStart(2, "0")}
          </p>
          <div>
            <h4 className="font-serif text-h3-sm text-white">{t.title}</h4>
            <p className="mt-3 font-serif text-body leading-normal text-white/55">{t.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Hero — banner image + editorial headline */}
        <motion.section
          ref={heroRef}
          className="flex w-full flex-col section-px pb-24 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroTextContainer}>
          <motion.div
            className="relative h-[50svh] w-full overflow-hidden md:aspect-[2.34/1] md:h-auto"
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            style={imageStyle}
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

          <motion.div
            className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1.1fr_1fr] md:gap-20"
            style={textStyle}
          >
            <motion.h1
              className="font-serif text-stat leading-[1.05] text-white"
              variants={headlineContainer}
              aria-label="Real estate exposure built where America is growing."
            >
              {"Real estate exposure built where America is growing.".split(" ").map((word, wi, words) => (
                <span key={wi} className="inline-block whitespace-nowrap">
                  {Array.from(word).map((char, ci) => (
                    <motion.span
                      key={ci}
                      variants={headlineLetter}
                      className="inline-block"
                      aria-hidden="true"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wi < words.length - 1 ? " " : ""}
                </span>
              ))}
            </motion.h1>
            <motion.p
              className="max-w-xl self-start md:ml-auto font-serif text-body leading-normal text-white/60"
              variants={itemVariants}
            >
              Grounded in demographic inevitability, disciplined judgment, and
              a long-term perspective on where communities are growing.
            </motion.p>
          </motion.div>
          </motion.div>
        </motion.section>

        {/* 1 · What We Do — three-pillar hover-to-reveal */}
        <motion.section
          id="what-we-do"
          className="w-full scroll-mt-28 section-px pb-48 pt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={itemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-normal md:whitespace-nowrap text-[#cca885]">
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
            Every investment begins with understanding how people truly live.
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
                className="absolute inset-0 bg-cover bg-center"
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
                  <h3 className="font-serif text-h3-sm text-white">
                    {w.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/50 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-5 font-serif text-body leading-normal text-white/60">
                    {w.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 2 · Private Transactions — wraps Multifamily, Affordable, Strategic Ops, Investment Thesis */}
        <section id="private-transactions" className="w-full scroll-mt-28">
          {/* Block intro */}
          <motion.div
            className="w-full section-px pb-24 pt-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="mb-4 flex items-center gap-6"
              variants={itemVariants}
            >
              <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-normal md:whitespace-nowrap text-[#cca885]">
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
              Measured · Localized · Enduring
            </motion.h2>
            <motion.div
              className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32"
              variants={accentRule}
            />
          </motion.div>

          {/* 2a · Multifamily */}
          <motion.div
            className="w-full section-px pb-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <motion.div
                className="relative h-[400px] overflow-hidden lg:h-auto"
                variants={imageRevealLeft}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/investments/22.jpg)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
              </motion.div>
              <motion.div
                className="group"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-h2 text-white">
                  Multifamily
                </h3>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-300 group-hover:w-24 group-hover:bg-[#cca885]" />
                <p className="mt-6 font-serif text-body leading-normal text-white/60">
                  We invest in apartment communities supported by durable
                  demand, evolving demographics, and opportunities for
                  long-term value creation.
                </p>
                <ul className="mt-8 space-y-4 md:space-y-5">
                  {multifamilyBullets.map((b) => (
                    <li
                      key={b}
                      className="group/bullet flex gap-4 font-serif text-body leading-normal text-white/60 transition-colors duration-300 ease-out hover:text-white/90"
                    >
                      <span
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-[#cca885]/70 transition-all duration-300 ease-out group-hover/bullet:w-6 group-hover/bullet:bg-[#cca885] md:w-4"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* 2b · Affordable Housing */}
          <motion.div
            className="w-full section-px pb-32 pt-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <motion.div
                ref={affordableTextRef}
                className="order-2 group lg:order-1"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-h2 text-white">
                  Affordable Housing
                </h3>
                <div className="mt-5 h-px w-12 bg-[#cca885]/50 transition-all duration-300 group-hover:w-24 group-hover:bg-[#cca885]" />
                <p className="mt-6 font-serif text-body leading-normal text-white/60">
                  We invest in housing that serves working families, seniors,
                  and essential communities, often through Low-Income Housing
                  Tax Credit (LIHTC) partnerships, with an emphasis on
                  defensive cash flow, stability, and responsible ownership.
                </p>
                <ul className="mt-10 space-y-8 md:space-y-10">
                  {affordableBullets.map((b, i) => (
                    <li
                      key={b.label}
                      className="group/bullet flex gap-6"
                    >
                      <p className="font-serif text-h3-lg leading-none text-[#cca885]/35 transition-colors duration-500 ease-out group-hover/bullet:text-[#cca885]/80">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className="flex-1">
                        <h4 className="font-serif text-h3-sm text-white">
                          {b.label}
                        </h4>
                        <div className="mt-3 h-px w-10 bg-[#cca885]/40 transition-all duration-500 ease-out group-hover/bullet:w-20 group-hover/bullet:bg-[#cca885]" />
                        <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover/bullet:grid-rows-[1fr]">
                          <div className="min-h-0 overflow-hidden">
                            <p className="mt-4 font-serif text-body leading-normal text-white/55 opacity-100 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover/bullet:opacity-100">
                              {b.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="relative order-1 h-[400px] self-start overflow-hidden lg:order-2 lg:h-[520px]"
                style={affordableImgH ? { height: affordableImgH } : undefined}
                variants={imageRevealRight}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/investments/11.jpg)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* 2c · Strategic Operations */}
          <motion.div
            className="w-full section-px pb-20 pt-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="max-w-5xl font-serif text-h2 leading-[1.08] text-white"
              variants={itemVariants}
            >
              Relationships built over time. Standards carried through execution.
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
                  <h4 className="mt-6 font-serif text-h3-sm text-white">
                    {p.title}
                  </h4>
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                    <div className="min-h-0 overflow-hidden">
                      <p className="mt-4 font-serif text-body leading-normal text-white/55 opacity-100 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2d · Investment Thesis — desktop: pinned title with a stats→tenets
              swap on scroll. Mobile / reduced-motion: a normal stacked layout. */}
          {pinned && (
            <section ref={thesisRef} className="relative hidden w-full lg:block lg:h-[210vh]">
              {/* Soft snap catch-points: proximity-only (snap-normal) so the scroll
                  can glide past and the spring entrance reads — no hard "magnetic"
                  stop, just a gentle rest near the stats and the four points. */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 snap-start snap-normal" style={{ top: "35vh", height: 1 }} />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 snap-start snap-normal" style={{ top: "92vh", height: 1 }} />
              <div className="sticky top-0 flex h-screen flex-col section-px pt-[32vh]">
                <h3 className="max-w-5xl font-serif text-h2 leading-[1.08] text-white">
                  Demographic tailwinds. Thoughtful entry points.
                </h3>
                <div className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32" />
                <div className="relative mt-10 h-[42vh]">
                  <motion.div
                    style={{ y: statsY, opacity: statsOpacity }}
                    className="absolute inset-x-0 top-0"
                  >
                    {statsGrid}
                  </motion.div>
                  <motion.div
                    style={{ y: tenetsY, opacity: tenetsOpacity }}
                    className="absolute inset-x-0 top-0"
                  >
                    {tenetsGrid}
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {/* Stacked fallback — phones always; everyone when reduced-motion */}
          <motion.div
            className={`w-full section-px pb-48 pt-24 ${pinned ? "lg:hidden" : ""}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <h3 className="max-w-5xl font-serif text-h2 leading-[1.08] text-white">
              Demographic tailwinds. Thoughtful entry points.
            </h3>
            <div className="mt-6 h-px w-24 origin-left bg-[#cca885]/60 md:w-32" />
            <div className="mt-16">{statsGrid}</div>
            <div className="mt-16">{tenetsGrid}</div>
          </motion.div>
        </section>

        {/* 3 · Tactical Opportunities */}
        <motion.section
          id="tactical-opportunities"
          className="w-full scroll-mt-28 section-px pb-48 pt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            className="mb-4 flex items-center gap-6"
            variants={itemVariants}
          >
            <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-normal md:whitespace-nowrap text-[#cca885]">
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
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/investments/newtactical.jpg)" }}
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
                  <h3 className="font-serif text-h3-sm text-white">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/50 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-5 font-serif text-body leading-normal text-white/60">
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
