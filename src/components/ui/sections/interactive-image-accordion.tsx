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
      className="relative min-h-[150px] w-full overflow-hidden border border-transparent text-left transition-[flex-grow,border-color] duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cca885]/60 md:min-h-0 md:h-[400px] md:w-auto lg:h-[520px]"
      style={{
        flexGrow: isActive ? 4 : 1,
        flexShrink: 1,
        flexBasis: 0,
        minWidth: isActive ? undefined : "60px",
      }}
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a]/80 via-[#0d121a]/45 to-[#0d121a]/5" />

      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cca885]" />
      )}

      <span
        className={`absolute bottom-6 left-5 font-serif font-medium whitespace-nowrap text-lg transition-all duration-300 ease-in-out ${
          isActive
            ? "text-white md:left-7 md:text-[1.65rem]"
            : "text-white/70 md:bottom-24 md:left-1/2 md:-translate-x-1/2 md:rotate-90 md:text-base md:text-white/72"
        }`}
      >
        {item.title}
      </span>
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
    id: "hotel",
    title: "Hotel",
    imageUrl: "/1hotel.jpg",
  },
  {
    id: "retail",
    title: "Retail",
    imageUrl: "/westfield.jpg",
  },
];

export function InteractiveImageAccordion({
  items = defaultItems,
  className = "",
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <div className="flex w-full flex-col gap-3 px-1 py-4 md:flex-row md:items-center">
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
