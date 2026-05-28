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

const SCROLL_THRESHOLD = 80;
const CLOSE_DELAY_MS = 180;

export default function NavMenu() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const y0 = window.scrollY;
    lastScrollY.current = y0;
    setAtTop(y0 < SCROLL_THRESHOLD);
    const onScroll = () => {
      const y = window.scrollY;
      const isAtTop = y < SCROLL_THRESHOLD;
      const isScrollingUp = y < lastScrollY.current;
      setAtTop(isAtTop);
      setVisible(isAtTop || isScrollingUp);
      lastScrollY.current = y;
    };
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

  const inactiveClass = "text-white hover:text-[#cca885]";
  const activeClass = "text-[#cca885]";
  const baseTrigger =
    "font-serif uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 text-[clamp(14px,0.95vw,20px)]";

  const showBg = !atTop && visible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <motion.div
            className="relative border-b backdrop-blur-md"
            animate={{
              backgroundColor: showBg ? "rgba(13,18,26,0.78)" : "rgba(13,18,26,0)",
              borderBottomColor: showBg ? "rgba(204,168,133,0.18)" : "rgba(204,168,133,0)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Soft bottom fade — only visible when surface is on */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-[#0d121a]/40 to-transparent"
              animate={{ opacity: showBg ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <div className="flex items-start pl-[max(1.5rem,14vw)] pr-6 pt-3 md:pt-4">
              {/* Logo on the left */}
              <a
                href="/"
                aria-label="Deepblue Capital Partners - Home"
                className="shrink-0"
              >
                <img
                  src="/small-logo.png"
                  alt="Deepblue Capital Partners"
                  className="h-9 w-auto md:h-10"
                />
              </a>

              {/* Centered nav cluster — items-start so the Investments column can grow downward */}
              <div className="flex flex-1 items-start justify-center gap-[clamp(1.75rem,2.25vw,3rem)] pt-2 md:pt-3 pb-3 md:pb-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const open = openKey === item.href;
                  const hasChildren = Boolean(item.children);
                  const triggerColor = active || open ? activeClass : inactiveClass;

                  return (
                    <div
                      key={item.href}
                      className="flex flex-col items-start"
                      onMouseEnter={hasChildren ? () => openMenu(item.href) : undefined}
                      onMouseLeave={hasChildren ? closeMenuSoon : undefined}
                      onFocus={hasChildren ? () => openMenu(item.href) : undefined}
                      onBlur={hasChildren ? closeMenuSoon : undefined}
                    >
                      <a
                        href={item.href}
                        aria-haspopup={hasChildren ? "true" : undefined}
                        aria-expanded={hasChildren ? open : undefined}
                        className={`${baseTrigger} ${triggerColor}`}
                      >
                        {item.label}
                      </a>

                      {hasChildren && (
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              key="panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 pt-4 pb-1">
                                {item.children!.map((child) => (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    className="group flex items-center gap-3 py-1"
                                  >
                                    <span
                                      aria-hidden
                                      className="h-px w-3 shrink-0 bg-[#cca885]/40 transition-all duration-300 group-hover:w-6 group-hover:bg-[#cca885]"
                                    />
                                    <span className="font-serif uppercase tracking-[0.12em] text-[clamp(12px,0.85vw,16px)] text-white transition-colors duration-300 group-hover:text-[#cca885]">
                                      {child.label}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right-side mirror of the logo — keeps the nav cluster optically centered */}
              <div aria-hidden className="invisible shrink-0">
                <img
                  src="/small-logo.png"
                  alt=""
                  className="h-9 w-auto md:h-10"
                />
              </div>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
