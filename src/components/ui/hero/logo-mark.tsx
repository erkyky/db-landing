"use client";

import { motion, useReducedMotion } from "framer-motion";

// Centerline of the logo's frame band, expressed in the source SVG's path
// coordinate space (company_logo.svg's <g> uses transform
// "translate(0,757) scale(0.1,-0.1)"). Animating a stroked rect along this
// centerline traces the frame exactly; strokeWidth ≈ the band thickness.
const FRAME = { x: 332, y: 2107, w: 16175, h: 5170, stroke: 90 } as const;

// One-time intro: the frame draws itself around in gold, turns white, then the
// full white logo (frame + wordmark) settles in. Keeps the logo's exact letter
// shapes (they come from the SVG art itself — only the frame is animated).
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
      {/* Final logo (frame + wordmark) in white — fades in after the draw. */}
      <motion.img
        src="/company_logo.svg"
        alt={alt}
        className="block h-auto w-full opacity-90"
        initial={reduce ? { opacity: 0.9 } : { opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={
          reduce ? { duration: 0 } : { delay: 1.2, duration: 0.6, ease: "easeOut" }
        }
      />

      {/* Gold frame that runs around once, then turns white and hands off to the
          settled white logo above. Skipped entirely under reduced-motion. */}
      {!reduce && (
        <svg
          aria-hidden
          viewBox="0 0 1681 757"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <g transform="translate(0,757) scale(0.1,-0.1)" fill="none">
            <motion.rect
              x={FRAME.x}
              y={FRAME.y}
              width={FRAME.w}
              height={FRAME.h}
              strokeWidth={FRAME.stroke}
              initial={{ pathLength: 0, stroke: "#cca885", opacity: 1 }}
              animate={{
                pathLength: [0, 1, 1, 1],
                stroke: ["#cca885", "#cca885", "#ffffff", "#ffffff"],
                opacity: [1, 1, 1, 0],
              }}
              transition={{
                duration: 1.9,
                times: [0, 0.62, 0.82, 1],
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      )}
    </div>
  );
}
