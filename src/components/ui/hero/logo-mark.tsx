"use client";

import { motion, useReducedMotion } from "framer-motion";

// The logo's frame, traced as an explicit path in the source SVG's coordinate
// space (company_logo.svg's <g> uses transform "translate(0,757) scale(0.1,-0.1)",
// which flips Y). Points are ordered so the stroke STARTS at the on-screen
// top-left corner and runs clockwise to the right. Coords are the centerline of
// the frame band; FRAME_STROKE ≈ the band thickness, so it fills the frame.
//   top-left → top-right → bottom-right → bottom-left → close
const FRAME_PATH = "M332 7277 L16507 7277 L16507 2107 L332 2107 Z";
const FRAME_STROKE = 90;
const GOLD = "#cca885"; // same as the "Managing Investments. and life" slogan

// One-time intro: the frame draws itself from the top-left corner to the right
// in gold, turns white, and the full white wordmark fades in underneath so the
// hand-off is seamless. Letters are the SVG art (font unchanged); only the
// frame is animated. Honors reduced-motion (static logo, no animation).
export function LogoMark({
  className,
  alt,
}: {
  className?: string;
  alt: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={className} style={{ position: "relative" }}>
      {/* Final logo (frame + wordmark) in white — fades in gently underneath. */}
      <motion.img
        src="/company_logo.svg"
        alt={alt}
        className="block h-auto w-full opacity-90"
        initial={reduce ? { opacity: 0.9 } : { opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={
          reduce ? { duration: 0 } : { delay: 1.1, duration: 1.0, ease: "easeInOut" }
        }
      />

      {/* Gold frame drawing on (top-left → right), turning white, then fading
          out once the white logo above has fully settled in. */}
      {!reduce && (
        <svg
          aria-hidden
          viewBox="0 0 1681 757"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(0,757) scale(0.1,-0.1)" fill="none">
            <motion.path
              d={FRAME_PATH}
              strokeWidth={FRAME_STROKE}
              strokeLinejoin="miter"
              initial={{ pathLength: 0, stroke: GOLD, opacity: 1 }}
              animate={{
                pathLength: [0, 1, 1, 1, 1],
                stroke: [GOLD, GOLD, "#ffffff", "#ffffff", "#ffffff"],
                opacity: [1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 2.3,
                times: [0, 0.43, 0.57, 0.83, 1],
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      )}
    </div>
  );
}
