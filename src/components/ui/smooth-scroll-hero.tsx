import * as React from "react";

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
    const heroStyle = {
        "--hero-reveal-duration": `${duration}s`,
        "--hero-reveal-delay": `${delay}s`,
        "--hero-text-delay": `${delay + duration * 0.25}s`,
    } as React.CSSProperties;

    return (
        <div className="mx-auto max-w-[1440px] px-6 pt-32 md:px-12 lg:px-20">
            <div
                className="relative h-[696px] w-full overflow-hidden rounded-lg bg-[#0d121a]"
                style={heroStyle}
            >
                <div
                    className="hero-reveal absolute inset-0"
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
                </div>

                {children && (
                    <div className="hero-text-in absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SmoothScrollHero;
