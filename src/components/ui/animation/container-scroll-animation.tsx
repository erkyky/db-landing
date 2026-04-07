"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
  innerClassName?: string;
}

export function ContainerScroll({
  titleComponent,
  children,
  className,
  cardClassName,
  innerClassName,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [16, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : isMobile ? [0.86, 0.96] : [1.04, 1]
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -72]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[56rem] items-center justify-center p-3 md:h-[74rem] md:p-10 lg:p-20",
        className
      )}
    >
      <div
        className="relative w-full py-8 md:py-32"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <ScrollCard
          rotate={rotate}
          scale={scale}
          className={cardClassName}
          innerClassName={innerClassName}
        >
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

export function Header({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

export function ScrollCard({
  rotate,
  scale,
  children,
  className,
  innerClassName,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "mx-auto -mt-10 h-[28rem] w-full max-w-5xl rounded-[30px] border border-white/10 bg-[#131d2c]/95 p-2 shadow-2xl shadow-black/40 md:h-[40rem] md:p-6",
        className
      )}
    >
      <div
        className={cn(
          "h-full w-full overflow-hidden rounded-[1.2rem] bg-[#0d121a] md:p-4",
          innerClassName
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
