"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const SUNBELT_MARKERS: Array<{ location: [number, number]; size: number }> = [
  { location: [30.2672, -97.7431], size: 0.06 },  // Austin
  { location: [32.7767, -96.797], size: 0.06 },   // Dallas
  { location: [29.7604, -95.3698], size: 0.06 },  // Houston
  { location: [35.2271, -80.8431], size: 0.06 },  // Charlotte
  { location: [35.7796, -78.6382], size: 0.06 },  // Raleigh
  { location: [33.749, -84.388], size: 0.06 },    // Atlanta
];

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = Math.min(canvas.clientWidth || 600, 900);
    const width = size;
    const height = size;

    // Static view on the Sunbelt — US Southeast roughly -85° longitude, 34° latitude.
    const phi = -0.1; // rotates globe so the Sunbelt faces the viewer (≈ longitude -85)
    const theta = 0.45; // tilts north pole toward viewer so the Sunbelt sits near vertical center

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi,
      theta,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 18000,
      mapBrightness: 5.2,
      baseColor: [0.22, 0.26, 0.32],
      markerColor: [0.8, 0.66, 0.52],
      glowColor: [0.32, 0.36, 0.44],
      markers: SUNBELT_MARKERS,
    });

    // cobe v2 has no built-in animation loop; drive one so the texture
    // appears once it finishes async-decoding, even for a static view.
    let raf = 0;
    const tick = () => {
      globe.update({ phi, theta });
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: "1 / 1",
        maxWidth: "900px",
        contain: "layout paint size",
        opacity: 0,
        animation: "fadeSlideIn 1.2s ease forwards",
      }}
    />
  );
}
