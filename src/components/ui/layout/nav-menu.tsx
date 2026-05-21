"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Investments", href: "/investments" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Team", href: "/about" },
];

const HIDE_AFTER_PX = 80;

export default function NavMenu() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < HIDE_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  const inactiveClass = "text-white/45 hover:text-white/85";
  const activeClass = "text-[#cca885]";

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-[clamp(1.75rem,2.25vw,3rem)]"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-serif uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 text-[clamp(14px,0.95vw,20px)] ${
                  active ? activeClass : inactiveClass
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
