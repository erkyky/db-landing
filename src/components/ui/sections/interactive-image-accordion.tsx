"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItemData {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
  onClick,
}: AccordionItemProps) => {
  return (
    <motion.button
      type="button"
      className={`relative h-[400px] overflow-hidden border border-white/10 bg-white/[0.03] text-left transition-[width,transform,border-color] duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cca885]/60 sm:h-[470px] lg:h-[520px] ${
        isActive
          ? "w-[320px] border-[#cca885]/40 sm:w-[440px] lg:w-[440px]"
          : "w-[90px] sm:w-[120px]"
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      aria-pressed={isActive}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-[#0d121a]/65 to-[#0d121a]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(204,168,133,0.22),transparent_35%)]" />

      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cca885]" />
      )}

      <span
        className={`absolute font-serif font-medium whitespace-nowrap text-white transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-5 text-xl sm:left-7 sm:text-[1.65rem]"
              : "bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left text-base text-white/72 sm:text-lg"
          }
        `}
      >
        {item.title}
      </span>

      {isActive && item.subtitle && (
        <span className="absolute bottom-6 left-5 rounded-full border border-white/10 bg-white/8 px-3 py-1 font-serif text-sm text-[#cca885] backdrop-blur-sm transition-opacity duration-500 sm:left-7 sm:text-base">
          {item.subtitle}
        </span>
      )}

      {isActive && (
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm sm:right-6 sm:top-6">
          Active
        </div>
      )}
    </motion.button>
  );
};

interface InteractiveImageAccordionProps {
  items?: AccordionItemData[];
  className?: string;
}

const defaultItems: AccordionItemData[] = [
  {
    id: "office",
    title: "Office / Mixed-Use",
    imageUrl: "/office.jpg",
  },
  {
    id: "multifamily",
    title: "Multifamily",
    imageUrl: "/multifamily.png",
  },
  {
    id: "sfr",
    title: "Single Family Rental",
    imageUrl: "/single-family.png",
  },
  {
    id: "value-add",
    title: "Value-Add Renovation",
    imageUrl: "/value.jpg",
  },
];

export function InteractiveImageAccordion({
  items = defaultItems,
  className = "",
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <div className="flex flex-row items-center justify-start gap-3 overflow-x-auto px-1 py-4">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default InteractiveImageAccordion;
