import * as React from "react";

interface SmoothScrollHeroProps {
    desktopImage?: string;
    mobileImage?: string;
    duration?: number;
    delay?: number;
    children?: React.ReactNode;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
    desktopImage = "/hero_image.jpg",
    mobileImage = "/hero_image.jpg",
    duration = 2.2,
    delay = 0.2,
    children,
}) => {
    const textDelay = delay + duration * 0.25;

    return (
        <>
            <style>{`
@keyframes ssh-reveal { from { clip-path: inset(100% 0 0 0); } to { clip-path: inset(0 0 0 0); } }
@keyframes ssh-text-in { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
.ssh-img-mobile { display: block; }
.ssh-img-desktop { display: none; }
@media (min-width: 768px) {
  .ssh-img-mobile { display: none; }
  .ssh-img-desktop { display: block; }
}
`}</style>

            <div
                style={{
                    maxWidth: 1440,
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "8rem",
                }}
                className="md:px-12 lg:px-20"
            >
                <div
                    style={{
                        position: "relative",
                        height: 696,
                        width: "100%",
                        overflow: "hidden",
                        borderRadius: "0.5rem",
                        background: "#0d121a",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            clipPath: "inset(100% 0 0 0)",
                            animation: `ssh-reveal ${duration}s ${EASE} ${delay}s forwards`,
                            willChange: "clip-path",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={mobileImage}
                            alt=""
                            aria-hidden="true"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className="ssh-img-mobile"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={desktopImage}
                            alt=""
                            aria-hidden="true"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className="ssh-img-desktop"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to bottom, rgba(13,18,26,0.65), rgba(13,18,26,0.35) 50%, rgba(13,18,26,0.8))",
                            }}
                        />
                    </div>

                    {children && (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: "1.5rem",
                                paddingRight: "1.5rem",
                                opacity: 0,
                                transform: "translateY(24px)",
                                animation: `ssh-text-in 0.9s ${EASE} ${textDelay}s forwards`,
                            }}
                            className="md:px-12 lg:px-20"
                        >
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SmoothScrollHero;
