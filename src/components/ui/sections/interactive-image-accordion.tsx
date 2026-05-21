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
      className={`relative h-[400px] overflow-hidden border border-transparent text-left transition-[width,border-color] duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cca885]/60 sm:h-[470px] lg:h-[520px] ${
        isActive
          ? "w-[320px] sm:w-[440px] lg:w-[440px]"
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

      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cca885]" />
      )}

      <span
        className={`absolute font-serif font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-6 left-5 text-xl text-white sm:left-7 sm:text-[1.65rem]"
            : "bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left text-base text-white/72 sm:text-lg"
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
      <div className="flex flex-row items-center justify-start gap-3 px-1 py-4">
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
