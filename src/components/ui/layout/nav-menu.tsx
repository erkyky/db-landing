"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Our Approach", href: "/sustainability#the-standard" },
    ],
  },
  {
    label: "Team",
    href: "/about",
    children: [
      { label: "Executive Officers", href: "/about#executive-officers" },
      { label: "Asset Class Experience", href: "/about#asset-class-experience" },
    ],
  },
];

// The dropdown items for a nav entry — its in-page section links.
const dropdownChildren = (item: NavItem) => item.children ?? [];

const SCROLL_THRESHOLD = 80;
// Dropdowns open instantly on hover. The old hover-intent open delay existed to
// protect the parent-label click, but the "Overview" row now gives a clear path
// to the section page from inside the menu — so a snappy open is the better call.
const CLOSE_DELAY_MS = 180;
const DROPDOWN_BASE_PAD = 50;
const DROPDOWN_PER_ITEM = 28;

const dropdownContainerVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Mobile full-screen menu: items cascade up on open.
const mobileListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Edge gutter that matches .section-px (mobile fluid inset; 14vw from md up),
// so the logo lines up with page content on every screen.
const EDGE_INSET_L = "left-[clamp(1.25rem,6vw,2.5rem)] md:left-[14vw]";
const EDGE_INSET_R = "right-[clamp(1.25rem,6vw,2.5rem)]";

export default function NavMenu() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<number | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedKey(null);
  };

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

  // Close the mobile menu on route change (covers cross-page nav; same-page
  // anchor taps are closed via each link's onClick).
  useEffect(() => {
    setMobileOpen(false);
    setExpandedKey(null);
  }, [pathname]);

  // While the mobile menu is open: lock body scroll, trap focus on the close
  // button, close on Escape, and restore focus to the hamburger on close.
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      hamburgerRef.current?.focus();
    };
  }, [mobileOpen]);

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
    "font-sanomat uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 text-[clamp(12px,0.82vw,17px)]";

  const showBg = !atTop && visible;
  const activeDropdownItem = openKey
    ? navItems.find((i) => i.href === openKey) ?? null
    : null;
  const dropdownOpen = Boolean(activeDropdownItem?.children?.length);
  const dropdownPad = dropdownOpen
    ? DROPDOWN_BASE_PAD +
      dropdownChildren(activeDropdownItem!).length * DROPDOWN_PER_ITEM
    : 0;
  // Show the bar surface either when scrolled-revealed OR when any dropdown is
  // open (so dropdown text doesn't sit on raw page content).
  const surfaceVisible = showBg || dropdownOpen;

  return (
    <>
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
            animate={{ paddingBottom: dropdownPad }}
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
                  className={`absolute top-1/2 -translate-y-1/2 ${EDGE_INSET_L}`}
                >
                  <img
                    src="/small-logo.svg"
                    alt="Deepblue Capital Partners"
                    className="h-9 w-auto md:h-10"
                  />
                </a>
              )}

              {/* Mobile bar — provides row height + hamburger (desktop row is hidden below md) */}
              <div className="section-px flex items-center justify-end py-4 md:hidden">
                <button
                  ref={hamburgerRef}
                  type="button"
                  aria-label="Open menu"
                  aria-haspopup="true"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setMobileOpen(true)}
                  className="-mr-2 p-2 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-colors hover:text-[#cca885]"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </svg>
                </button>
              </div>

              {/* 4 nav items, centered in the viewport regardless of logo (desktop only) */}
              <div className="hidden justify-center gap-[clamp(2.25rem,2.9vw,3.75rem)] py-4 md:flex md:py-5">
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
                              variants={dropdownContainerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="absolute left-0 top-full mt-4 flex flex-col items-start gap-1 whitespace-nowrap"
                            >
                              {dropdownChildren(item).map((child) => (
                                <motion.a
                                  key={child.href}
                                  href={child.href}
                                  variants={dropdownItemVariants}
                                  whileHover={{ x: 6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                                  className="group flex items-center gap-3 py-1"
                                >
                                  <span
                                    aria-hidden
                                    className="h-px w-3 shrink-0 bg-[#cca885]/40 transition-all duration-300 ease-out group-hover:w-10 group-hover:bg-[#cca885]"
                                  />
                                  <span className="font-sanomat uppercase tracking-[0.12em] text-[clamp(11px,0.78vw,14px)] text-white transition-colors duration-300 ease-out group-hover:text-[#cca885]">
                                    {child.label}
                                  </span>
                                </motion.a>
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

    {/* Mobile full-screen menu overlay */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#0d121a]/95 backdrop-blur-xl md:hidden"
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close menu"
            onClick={closeMobile}
            className={`absolute top-5 z-10 p-2 text-white transition-colors hover:text-[#cca885] ${EDGE_INSET_R}`}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          <motion.nav
            variants={mobileListVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="section-px flex h-full flex-col justify-center gap-1 overflow-y-auto py-24"
          >
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children);
              const expanded = expandedKey === item.href;
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  variants={mobileItemVariants}
                  className="border-b border-white/10"
                >
                  {hasChildren ? (
                    // Split row: tapping the label navigates to the section page
                    // and closes the menu; the separate + button toggles the
                    // dropdown so both the page and its sub-sections are reachable.
                    <div className="flex w-full items-center justify-between">
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        className={`flex-1 py-4 font-sanomat uppercase tracking-[0.12em] text-[clamp(1.1rem,5.5vw,1.6rem)] transition-colors ${active ? "text-[#cca885]" : "text-white hover:text-[#cca885]"}`}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                        onClick={() => setExpandedKey(expanded ? null : item.href)}
                        className="flex items-center py-4 pl-6"
                      >
                        <span
                          aria-hidden
                          className={`text-2xl font-light leading-none text-[#cca885] transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </button>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobile}
                      className={`block py-4 font-sanomat uppercase tracking-[0.12em] text-[clamp(1.1rem,5.5vw,1.6rem)] transition-colors ${active ? "text-[#cca885]" : "text-white hover:text-[#cca885]"}`}
                    >
                      {item.label}
                    </a>
                  )}

                  {hasChildren && (
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-4 pl-1">
                            {dropdownChildren(item).map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={closeMobile}
                                className="group flex items-center gap-3 py-2"
                              >
                                <span
                                  aria-hidden
                                  className="h-px w-4 shrink-0 bg-[#cca885]/50 transition-all duration-300 group-hover:w-8 group-hover:bg-[#cca885]"
                                />
                                <span className="font-sanomat uppercase tracking-[0.12em] text-[clamp(0.85rem,4vw,1.05rem)] text-white/75 transition-colors group-hover:text-[#cca885]">
                                  {child.label}
                                </span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
