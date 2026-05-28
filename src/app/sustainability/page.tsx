"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BeamsBackground } from "@/components/ui/layout/beams-background";
import { CountUp } from "@/components/ui/animation/count-up";
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

const accentRule = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

// Hero text overlay: kicks off mid-image-reveal so the letters cascade in
// while the bottom-up clip-path is still finishing.
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

const pillars: Array<{ title: string; desc: string }> = [
  {
    title: "Environmental stewardship",
    desc: "Energy efficiency, embodied carbon, and long-term resilience evaluated before capital is committed.",
  },
  {
    title: "Community impact",
    desc: "Investments that strengthen neighborhoods with quality housing, local employment, and shared spaces that endure.",
  },
  {
    title: "Responsible governance",
    desc: "Transparent reporting, ethical decision-making, accountability to investors and communities alike.",
  },
];

const commitments: Array<{ stat: string; label: string; detail: string }> = [
  {
    stat: "100%",
    label: "ESG-screened deals",
    detail: "Every acquisition passes environmental, social, and governance review during underwriting.",
  },
  {
    stat: "Net Zero",
    label: "Operational target",
    detail: "Working toward net-zero carbon across the managed portfolio via efficiency upgrades and renewables.",
  },
  {
    stat: "30%",
    label: "Water reduction goal",
    detail: "Smart-system retrofits and drought-tolerant landscaping driving measurable water savings.",
  },
];

export default function SustainabilityPage() {
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

  // Pillars section parallax (THE STANDARD)
  const pillarsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: pillarsProgress } = useScroll({
    target: pillarsRef,
    offset: ["start end", "end start"],
  });
  const pillarsTitleY = useTransform(pillarsProgress, [0, 1], ["0%", "-8%"]);
  const pillarsTitleOpacity = useTransform(pillarsProgress, [0.05, 0.18, 0.82, 0.95], [0, 1, 1, 0]);
  const pillarY0 = useTransform(pillarsProgress, [0, 1], ["0%", "-16%"]);
  const pillarY1 = useTransform(pillarsProgress, [0, 1], ["0%", "-16%"]);
  const pillarY2 = useTransform(pillarsProgress, [0, 1], ["0%", "-16%"]);
  const pillarO0 = useTransform(pillarsProgress, [0.10, 0.22, 0.82, 0.95], [0, 1, 1, 0]);
  const pillarO1 = useTransform(pillarsProgress, [0.13, 0.25, 0.82, 0.95], [0, 1, 1, 0]);
  const pillarO2 = useTransform(pillarsProgress, [0.16, 0.28, 0.82, 0.95], [0, 1, 1, 0]);
  const pillarsTitleStyle = reduceMotion ? undefined : { y: pillarsTitleY, opacity: pillarsTitleOpacity };
  const pillarYs = [pillarY0, pillarY1, pillarY2];
  const pillarOs = [pillarO0, pillarO1, pillarO2];

  // Commitments section parallax (THE EVIDENCE)
  const commitsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: commitsProgress } = useScroll({
    target: commitsRef,
    offset: ["start end", "end start"],
  });
  const commitsTitleY = useTransform(commitsProgress, [0, 1], ["0%", "-8%"]);
  const commitsTitleOpacity = useTransform(commitsProgress, [0.05, 0.18, 0.82, 0.95], [0, 1, 1, 0]);
  const commitsImageY = useTransform(commitsProgress, [0, 1], ["0%", "-6%"]);
  const commitsImageOpacity = useTransform(commitsProgress, [0.05, 0.18, 0.82, 0.95], [0, 1, 1, 0]);
  const commitY0 = useTransform(commitsProgress, [0, 1], ["0%", "-16%"]);
  const commitY1 = useTransform(commitsProgress, [0, 1], ["0%", "-16%"]);
  const commitY2 = useTransform(commitsProgress, [0, 1], ["0%", "-16%"]);
  const commitO0 = useTransform(commitsProgress, [0.10, 0.22, 0.82, 0.95], [0, 1, 1, 0]);
  const commitO1 = useTransform(commitsProgress, [0.13, 0.25, 0.82, 0.95], [0, 1, 1, 0]);
  const commitO2 = useTransform(commitsProgress, [0.16, 0.28, 0.82, 0.95], [0, 1, 1, 0]);
  const commitsTitleStyle = reduceMotion ? undefined : { y: commitsTitleY, opacity: commitsTitleOpacity };
  const commitsImageStyle = reduceMotion ? undefined : { y: commitsImageY, opacity: commitsImageOpacity };
  const commitYs = [commitY0, commitY1, commitY2];
  const commitOs = [commitO0, commitO1, commitO2];

  return (
    <>
      <NavMenu />
      <TopLeftLogo />

      <BeamsBackground intensity="subtle" className="min-h-0">
        {/* Hero — image with text overlay (investments-pattern reveal) */}
        <motion.section
          ref={heroRef}
          className="flex w-full flex-col px-[max(1.5rem,14vw)] pb-24 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroTextContainer}>
            <motion.div
              className="relative aspect-[2.34/1] w-full overflow-hidden"
              initial={{ clipPath: "polygon(-1% 100%, 101% 100%, 101% 100%, -1% 100%)" }}
              animate={{ clipPath: "polygon(-1% -1%, 101% -1%, 101% 101%, -1% 101%)" }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
              style={imageStyle}
            >
              <div
                className="absolute -inset-px bg-cover bg-center"
                style={{
                  backgroundImage: "url(/sustainability/newsus.jpg)",
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
                aria-label="Investing with care for the world we share."
              >
                {"Investing with care for the world we share.".split(" ").map((word, wi, words) => (
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
                className="ml-auto max-w-xl self-start font-serif text-body leading-relaxed text-white/60"
                variants={itemVariants}
              >
                Responsibility lives inside underwriting, not in a separate
                department. Every decision answers to the same standard of care.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Pillars */}
        <section
          ref={pillarsRef}
          className="w-full px-[max(1.5rem,14vw)] pb-24 pt-24"
        >
          <motion.div style={pillarsTitleStyle}>
            <div className="mb-4 flex items-center gap-6">
              <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-nowrap text-[#cca885]">
                THE STANDARD
              </p>
              <div className="h-px flex-1 bg-[#cca885]/40" />
            </div>
            <h2 className="max-w-5xl font-serif text-h2 leading-[1.08] text-white">
              Three pillars of sustainable investment.
            </h2>
            <div className="mt-6 h-px w-24 bg-[#cca885]/60 md:w-32" />
          </motion.div>

          <div className="mt-14 grid gap-16 md:grid-cols-3 md:gap-0">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                style={reduceMotion ? undefined : { y: pillarYs[i], opacity: pillarOs[i] }}
              >
                <motion.div
                  className={`group px-0 md:px-10 ${i > 0 ? "md:border-l md:border-[#cca885]/15" : ""}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-h3-sm text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                  <p className="mt-4 font-serif text-body-sm leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commitments */}
        <section
          ref={commitsRef}
          className="w-full px-[max(1.5rem,14vw)] pb-48 pt-24"
        >
          <motion.div style={commitsTitleStyle}>
            <div className="mb-4 flex items-center gap-6">
              <p className="font-sans text-eyebrow uppercase tracking-[0.32em] whitespace-nowrap text-[#cca885]">
                THE EVIDENCE
              </p>
              <div className="h-px flex-1 bg-[#cca885]/40" />
            </div>
            <h2 className="max-w-5xl font-serif text-h2 leading-[1.08] text-white">
              Measurable targets, not just intentions.
            </h2>
            <div className="mt-6 h-px w-24 bg-[#cca885]/60 md:w-32" />
          </motion.div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              className="relative h-[280px] overflow-hidden md:h-[380px] lg:h-auto"
              style={commitsImageStyle}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/sustainability/industry.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/30 to-transparent" />
            </motion.div>

            <div className="space-y-12 md:space-y-14">
              {commitments.map((item, i) => (
                <motion.div
                  key={item.label}
                  style={reduceMotion ? undefined : { y: commitYs[i], opacity: commitOs[i] }}
                >
                  <motion.div
                    className="group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
                      <p
                        className="font-serif text-stat text-[#cca885]"
                        style={item.stat === "Net Zero" ? { fontSize: "clamp(1.3rem, 2.6vw, 2.6rem)" } : undefined}
                      >
                        <CountUp value={item.stat} delay={0.2 + i * 0.15} />
                      </p>
                      <p className="font-serif text-body text-white">
                        {item.label}
                      </p>
                    </div>
                    <div className="mt-4 h-px w-10 bg-[#cca885]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[#cca885]" />
                    <p className="mt-4 max-w-3xl font-serif text-body-sm leading-relaxed text-white/55">
                      {item.detail}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <p className="pb-8 text-center font-serif text-base text-white/22">
          &copy; 2026 Deepblue Capital Partners. All rights reserved.
        </p>
      </BeamsBackground>
    </>
  );
}
