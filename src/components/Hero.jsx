// src/components/Hero.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const containerRef = useRef();
  const posterRef = useRef();
  const bioRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=120%", 
        pin: true,     
        scrub: 1,      
      }
    });

    // 1. Shrink the massive poster container (Image AND Text scale together)
    tl.to(posterRef.current, {
      scale: 0.6,
      yPercent: -15, // Pushes the whole block up to make room for the bio
      ease: "power2.inOut",
      duration: 1
    }, 0); 

    // 2. Slide the bio text up from the bottom
    tl.fromTo(bioRef.current, {
      y: 150,
      opacity: 0
    }, {
      y: 0, 
      opacity: 1,
      ease: "power2.out",
      duration: 0.8
    }, 0.2); 

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12">

      {/* --- THE POSTER LAYOUT (Scales as one unit) --- */}
      <div ref={posterRef} className="relative z-20 w-full h-[75vh] md:h-[85vh] flex flex-col items-center justify-between origin-center py-4">
        
        {/* Top Text: Your Name */}
        <h1 className="text-5xl md:text-[8vw] font-black text-white uppercase tracking-tighter leading-none z-30 drop-shadow-2xl">
          EXENOTMAW
        </h1>

        {/* Center: The Massive Landscape Image (No outside borders!) */}
        <div className="w-full aspect-video md:aspect-[21/9] max-h-[60vh] my-6 md:my-10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black relative group">
          <img 
            src="/profile.jpg" 
            alt="Raizel Velasquez Profile" 
            /* object-cover ensures it fills the space, object-center keeps your face in the middle */
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Bottom Text: Your Degree */}
        <h2 className="text-center text-lg md:text-2xl font-mono text-[#FF0033] uppercase tracking-widest font-bold z-30 drop-shadow-lg">
          Bachelor of Science in Computer Science
        </h2>

      </div>

      {/* --- THE REVEALED BIO --- */}
      <div ref={bioRef} className="absolute bottom-12 md:bottom-24 left-0 w-full flex flex-col items-center justify-center text-center z-10 px-6 md:px-24 pointer-events-none">
        <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6 max-w-4xl">

        </h3>
        <p className="text-base md:text-lg text-zinc-400 font-sans leading-relaxed max-w-3xl mx-auto">
          Specializing in bridging the gap between robust backend engineering and high-end frontend execution. From real-time inventory ecosystems to predictive environmental telemetry, my work focuses on precision, performance, and uncompromising design.
        </p>
        <p className="mt-8 text-[#FF0033] font-mono text-xs tracking-widest uppercase font-bold opacity-70">
          Scroll to explore archives ↓
        </p>
      </div>

    </div>
  );
}