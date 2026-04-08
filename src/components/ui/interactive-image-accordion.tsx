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
    <motion.div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-white/10
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d121a] via-[#0d121a]/50 to-transparent" />

      {/* Active indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cca885]" />
      )}

      {/* Caption Text */}
      <span
        className={`
          absolute text-white font-serif text-lg font-medium whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-12 left-6 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-white/70"
          }
        `}
      >
        {item.title}
      </span>

      {/* Subtitle - only visible when active */}
      {isActive && item.subtitle && (
        <span className="absolute bottom-6 left-6 font-serif text-sm text-[#cca885]/70 transition-opacity duration-500">
          {item.subtitle}
        </span>
      )}
    </motion.div>
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
    subtitle: "Anthony, Hines",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "multifamily",
    title: "Multifamily",
    subtitle: "Ying, Starwood",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sfr",
    title: "Single Family Rental",
    subtitle: "Ying, C-Star SFR",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "value-add",
    title: "Value-Add Renovation",
    subtitle: "Anthony, Hines",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sunbelt",
    title: "Sunbelt Markets",
    subtitle: "Deepblue Fund",
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  },
];

export function InteractiveImageAccordion({
  items = defaultItems,
  className = "",
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
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
