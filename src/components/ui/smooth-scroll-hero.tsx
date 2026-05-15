"use client";
import * as React from "react";

import {
    motion,
    animate,
    useMotionValue,
    useMotionTemplate,
    useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
    scrollHeight?: number;
    desktopImage?: string;
    mobileImage?: string;
    initialClipPercentage?: number;
    finalClipPercentage?: number;
    duration?: number;
    delay?: number;
    children?: React.ReactNode;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
    desktopImage = "/hero_image.jpg",
    mobileImage = "/hero_image.jpg",
    initialClipPercentage = 25,
    finalClipPercentage = 75,
    duration = 2.2,
    delay = 0.3,
    children,
}) => {
    const progress = useMotionValue(0);

    React.useEffect(() => {
        const controls = animate(progress, 1, {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
        });
        return () => controls.stop();
    }, [progress, duration, delay]);

    const clipStart = useTransform(progress, [0, 1], [initialClipPercentage, 0]);
    const clipEnd = useTransform(progress, [0, 1], [finalClipPercentage, 100]);
    const backgroundSize = useTransform(progress, [0, 1], ["170%", "100%"]);

    const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

    return (
        <div className="relative h-screen w-full">
            <motion.div
                className="absolute inset-0 bg-[#0d121a]"
                style={{
                    clipPath,
                    willChange: "clip-path",
                }}
            >
                <motion.div
                    className="absolute inset-0 md:hidden"
                    style={{
                        backgroundImage: `url(${mobileImage})`,
                        backgroundSize,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <motion.div
                    className="absolute inset-0 hidden md:block"
                    style={{
                        backgroundImage: `url(${desktopImage})`,
                        backgroundSize,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d121a]/40 via-[#0d121a]/15 to-[#0d121a]/70" />
            </motion.div>

            {children && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: duration + delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default SmoothScrollHero;
