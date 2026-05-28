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
const DROPDOWN_PAD = 144;

export default function NavMenu() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
  const dropdownOpen = openKey === "/investments";
  // Show the bar surface either when scrolled-revealed OR when the dropdown is
  // open (so dropdown text doesn't sit on raw page content).
  const surfaceVisible = showBg || dropdownOpen;

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
            className="relative"
            animate={{ paddingBottom: dropdownOpen ? DROPDOWN_PAD : 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Bar surface — gradient fill + backdrop blur, fades in/out.
                Mask fades the last 14px of the element (color AND blur) to true
                transparent so there's no hard edge line at the bottom. */}
            <AnimatePresence>
              {surfaceVisible && (
                <motion.div
                  key="surface"
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="pointer-events-none absolute inset-0 backdrop-blur-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(13,18,26,0.65) 0%, rgba(13,18,26,0.60) 60%, rgba(13,18,26,0.35) 92%, rgba(13,18,26,0) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black calc(100% - 14px), transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black calc(100% - 14px), transparent 100%)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Nav row container — relative so the absolute logo + dropdown sit over the surface */}
            <div className="relative z-10">
              {/* Logo on left — hidden on home page */}
              {!isHome && (
                <a
                  href="/"
                  aria-label="Deepblue Capital Partners - Home"
                  className="absolute left-[max(1.5rem,14vw)] top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/small-logo.png"
                    alt="Deepblue Capital Partners"
                    className="h-9 w-auto md:h-10"
                  />
                </a>
              )}

              {/* 4 nav items, centered in the viewport regardless of logo */}
              <div className="flex justify-center gap-[clamp(1.75rem,2.25vw,3rem)] py-4 md:py-5">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  const open = openKey === item.href;
                  const hasChildren = Boolean(item.children);
                  const triggerColor = active || open ? activeClass : inactiveClass;

                  return (
                    <div
                      key={item.href}
                      className="relative"
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
                        <AnimatePresence>
                          {open && (
                            <motion.div
                              key="dropdown"
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute left-0 top-full mt-4 flex flex-col items-start gap-1 whitespace-nowrap"
                            >
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
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
