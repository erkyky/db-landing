"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HIDE_AFTER_PX = 80;

export default function TopLeftLogo() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < HIDE_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
          <div className="mx-auto flex max-w-[1440px] px-6 pt-4 md:px-12 md:pt-5 lg:px-20">
            <motion.div
              key="top-left-logo"
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
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
