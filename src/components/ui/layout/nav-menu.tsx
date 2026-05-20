"use client";

import { useEffect, useState } from "react";
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

export default function NavMenu() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  const alwaysVisible = pathname?.startsWith("/investments") ?? false;

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY < HIDE_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);


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
          className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-10"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const linkClass = `font-serif text-base uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 ${
              active ? activeClass : inactiveClass
            }`;

            if (!item.children) {
              return (
                <a key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
                <div
                  className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                >
                  <div className="flex min-w-[240px] flex-col border-l border-[#cca885]/50 bg-[#0d121a]/90 py-4 pl-5 pr-8 backdrop-blur-sm">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="py-1.5 font-serif text-sm uppercase tracking-[0.12em] whitespace-nowrap text-white/55 transition-colors duration-300 hover:text-[#cca885]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
