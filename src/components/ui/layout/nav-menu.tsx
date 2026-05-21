"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -10, scaleX: 0.9, scaleY: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleX: 0.96,
    scaleY: 0.96,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const accentRuleVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { scaleX: 0, transition: { duration: 0.18, ease: "easeIn" } },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -4, transition: { duration: 0.12 } },
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
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: "0% 0%" }}
                      onMouseEnter={() => openMenu(item.href)}
                      onMouseLeave={closeMenuSoon}
                      className="absolute left-0 top-full mt-3 flex items-center gap-7 whitespace-nowrap rounded-sm bg-[#0d121a]/85 px-5 py-3 backdrop-blur-sm shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
                    >
                      <motion.span
                        aria-hidden
                        variants={accentRuleVariants}
                        style={{ transformOrigin: "0% 50%" }}
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#cca885]/60"
                      />
                      {item.children!.map((child) => (
                        <motion.a
                          key={child.href}
                          href={child.href}
                          variants={childVariants}
                          className="font-serif uppercase tracking-[0.12em] text-[clamp(12px,0.85vw,16px)] text-white/55 transition-colors duration-300 hover:text-[#cca885]"
                        >
                          {child.label}
                        </motion.a>
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
