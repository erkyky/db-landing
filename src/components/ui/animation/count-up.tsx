"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUp({
  value,
  duration = 2.8,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState<string>(() => {
    if (!match) return value;
    const [, prefix, numStr, suffix] = match;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    return `${prefix}${(0).toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!inView || !match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
      },
      onComplete: () => {
        setDisplay(value);
      },
    });
    return () => controls.stop();
  }, [value, duration, delay, inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
