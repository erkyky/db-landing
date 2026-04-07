"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface MenuItem {
  label: string;
  href: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(120,171,175,0.15) 0%, transparent 70%)",
  },
  {
    label: "Investments",
    href: "/investments",
    gradient: "radial-gradient(circle, rgba(15,76,129,0.2) 0%, transparent 70%)",
  },
  {
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(204,168,133,0.15) 0%, transparent 70%)",
  },
  {
    label: "Contact",
    href: "mailto:investors+prosper@deepbluepartners.co?subject=Investment%20Interest",
    gradient: "radial-gradient(circle, rgba(120,171,175,0.15) 0%, transparent 70%)",
  },
  {
    label: "Sign In",
    href: "/sign-in",
    gradient: "radial-gradient(circle, rgba(204,168,133,0.2) 0%, transparent 70%)",
  },
];

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-1">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center gap-[5px] p-2 group z-10"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-5 h-[1.5px] bg-white/30 transition-all duration-300 group-hover:bg-white/60 ${
            isOpen ? "rotate-45 translate-y-[6.5px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-white/30 transition-all duration-300 group-hover:bg-white/60 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-white/30 transition-all duration-300 group-hover:bg-white/60 ${
            isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
          }`}
        />
      </button>

      {/* Horizontal floating menu items */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="relative overflow-visible group"
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                    variants={glowVariants}
                    style={{ background: item.gradient, opacity: 0 }}
                  />

                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-1.5 relative z-10 font-serif text-white/35 tracking-[0.08em] uppercase text-sm transition-colors duration-300 group-hover:text-white whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
