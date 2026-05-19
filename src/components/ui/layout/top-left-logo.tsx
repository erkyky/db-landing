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
        <motion.div
          key="top-left-logo"
          className="fixed left-6 top-4 z-40 md:left-12 md:top-5 lg:left-20"
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
        >
          <img
            src="/small-logo.png"
            alt="Deepblue Capital Partners"
            className="h-9 w-auto md:h-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
