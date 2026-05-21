"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
  numberClassName?: string;
  suffixClassName?: string;
}

export function CountUp({
  value,
  duration = 2.8,
  delay = 0,
  className,
  numberClassName,
  suffixClassName,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";
  const [numDisplay, setNumDisplay] = useState<string>(() => {
    if (!match) return value;
    const numStr = match[2];
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    return (0).toFixed(decimals);
  });

  useEffect(() => {
    if (!inView || !match) return;
    const numStr = match[2];
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setNumDisplay(v.toFixed(decimals));
      },
      onComplete: () => {
        setNumDisplay(numStr);
      },
    });
    return () => controls.stop();
  }, [value, duration, delay, inView]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {numDisplay}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix && <span>{prefix}</span>}
      <span className={numberClassName}>{numDisplay}</span>
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
