"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HIDE_AFTER_PX = 80;

export default function TopLeftLogo() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const isAtTop = y < HIDE_AFTER_PX;
      const isScrollingUp = y < lastScrollY.current;
      setVisible(isAtTop || isScrollingUp);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
          <div className="flex pl-[max(1.5rem,14vw)] pr-6 pt-3">
            <motion.a
              key="top-left-logo"
              href="/"
              aria-label="Deepblue Capital Partners - Home"
              className="pointer-events-auto"
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeOut" } }}
              transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            >
              <img
                src="/small-logo.png"
                alt="Deepblue Capital Partners"
                className="h-9 w-auto md:h-10"
              />
            </motion.a>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
