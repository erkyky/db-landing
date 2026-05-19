"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface SmoothScrollHeroProps {
    desktopImage?: string;
    mobileImage?: string;
    duration?: number;
    delay?: number;
    children?: React.ReactNode;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
    desktopImage = "/hero_image.jpg",
    mobileImage = "/hero_image.jpg",
    duration = 2.2,
    delay = 0.2,
    children,
}) => {
    return (
        <div className="mx-auto max-w-[1440px] px-6 pt-32 md:px-12 lg:px-20">
            <div className="relative h-[696px] w-full overflow-hidden rounded-lg bg-[#0d121a]">
                <motion.div
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: "clip-path" }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={mobileImage}
                        alt=""
                        aria-hidden="true"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={desktopImage}
                        alt=""
                        aria-hidden="true"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0d121a]/65 via-[#0d121a]/35 to-[#0d121a]/80" />
                </motion.div>

                {children && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: delay + duration * 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SmoothScrollHero;
