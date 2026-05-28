"use client";

import Link from "next/link";
import { BeamsBackground } from "@/components/ui/layout/beams-background";

export default function NotFound() {
  return (
    <BeamsBackground intensity="subtle" className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 font-sans text-base uppercase tracking-[0.32em] text-[#cca885] md:text-lg">
          404
        </p>
        <h1 className="font-serif text-6xl font-semibold text-white md:text-7xl lg:text-8xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-normal text-white/60 md:text-2xl">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-12 rounded-2xl border border-[#cca885]/30 px-10 py-4 font-serif text-base text-[#cca885] transition-colors hover:bg-[#cca885]/10 md:text-lg"
        >
          Return Home
        </Link>
      </div>
    </BeamsBackground>
  );
}
