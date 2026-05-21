"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Investments",
    href: "/investments",
    children: [
      { label: "What We Do", href: "/investments#what-we-do" },
      { label: "Private Transactions", href: "/investments#private-transactions" },
      { label: "Tactical Opportunities", href: "/investments#tactical-opportunities" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Team", href: "/about" },
];

const HIDE_AFTER_PX = 80;
const CLOSE_DELAY_MS = 180;

export default function NavMenu() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < HIDE_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenKey(key);
  };
  const closeMenuSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), CLOSE_DELAY_MS);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  const inactiveClass = "text-white/45 hover:text-white/85";
  const activeClass = "text-[#cca885]";
  const baseTrigger =
    "font-serif uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 text-[clamp(14px,0.95vw,20px)]";

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
            const open = openKey === item.href;
            const triggerColor = active || open ? activeClass : inactiveClass;

            if (!item.children) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${baseTrigger} ${triggerColor}`}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => openMenu(item.href)}
                onMouseLeave={closeMenuSoon}
                onFocus={() => openMenu(item.href)}
                onBlur={closeMenuSoon}
              >
                <a
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={open}
                  className={`${baseTrigger} ${triggerColor}`}
                >
                  {item.label}
                </a>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      key="panel"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      onMouseEnter={() => openMenu(item.href)}
                      onMouseLeave={closeMenuSoon}
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 flex items-center gap-7 whitespace-nowrap rounded-sm border-t border-[#cca885]/40 bg-[#0d121a]/85 px-6 py-3 backdrop-blur-sm"
                    >
                      {item.children!.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="font-serif uppercase tracking-[0.12em] text-[clamp(12px,0.85vw,16px)] text-white/55 transition-colors duration-300 hover:text-[#cca885]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
