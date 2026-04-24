"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUp({
  value,
  duration = 1.8,
  delay = 0,
  className,
}: CountUpProps) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState<string>(() => {
    if (!match) return value;
    const [, prefix, numStr, suffix] = match;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    return `${prefix}${(0).toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
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
  }, [value, duration, delay]);

  return <span className={className}>{display}</span>;
}
