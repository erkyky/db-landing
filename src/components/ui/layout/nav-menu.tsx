"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Investments", href: "/investments" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Sign In", href: "/sign-in" },
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

  // Hide nav on the home page while it's being finished.
  // To show it on home too: remove this conditional.
  if (pathname === "/") return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  const onLightBackdrop = pathname === "/sustainability";

  const inactiveClass = onLightBackdrop
    ? "text-[#0d121a] hover:text-black"
    : "text-white/45 hover:text-white/85";

  const activeClass = onLightBackdrop
    ? "text-[#5a3e1c]"
    : "text-[#cca885]";

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-10"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-serif text-base uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 ${
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
