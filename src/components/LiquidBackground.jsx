// src/components/LiquidBackground.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// src/components/LiquidBackground.jsx
export default function LiquidBackground() {
  return (
    // Fixed to the back of the screen (z-[-1]) permanently in dark mode
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* The floating liquid blobs */}
      <div className="liquid-blob blob-1 bg-zinc-900"></div>
      <div className="liquid-blob blob-2 bg-zinc-800"></div>
      <div className="liquid-blob blob-3 bg-zinc-900"></div>
    </div>
  );
}