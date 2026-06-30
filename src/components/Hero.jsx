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

    // 1. Shrink the new side-by-side container on scroll
    tl.to(posterRef.current, {
      scale: 0.75,
      yPercent: -10, 
      opacity: 0.3,
      ease: "power2.inOut",
      duration: 1
    }, 0); 

    // 2. Slide the scroll indicator up from the bottom
    tl.fromTo(bioRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0, 
      opacity: 1,
      ease: "power2.out",
      duration: 0.8
    }, 0.2); 

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 pt-20">

      {/* --- THE SPLIT LAYOUT (Scales as one unit on scroll) --- */}
      <div ref={posterRef} className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between origin-center gap-12 md:gap-8">
        
        {/* LEFT COLUMN: The Image & Spinning Badge */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          
          {/* Main Image Container */}
          <div className="w-72 h-72 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group z-10">
            <img 
              src="/profile.jpg" 
              alt="Raizel Velasquez Profile" 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Spinning "Hire Me" Badge (Replicating your reference image) */}
          <div className="absolute -bottom-4 -left-4 md:bottom-4 md:left-4 z-20 w-32 h-32 flex items-center justify-center">
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="text-[14.5px] font-mono font-bold fill-white uppercase tracking-widest">
                  <textPath href="#circlePath">
                    Prompt Engineer • Software Engineer • 
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Inner Dark Circle */}
            <div className="absolute w-16 h-16 bg-[#0a0a0a] rounded-full border border-zinc-700 flex items-center justify-center text-xs font-bold text-[#FF0033] uppercase">
              Hire Me
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Typography & Call to Actions */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-20">
          
          <h2 className="text-[#FF0033] font-mono text-sm md:text-base tracking-widest uppercase mb-4 font-bold">
            John Mar Fulton // BS Computer Science
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            Web Developer <br/>
            Video Editor <br/>
            AI Automation.
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-sans">
            Specializing in bridging the gap between robust backend engineering and high-end frontend execution. From real-time inventory ecosystems to predictive environmental telemetry, my work focuses on precision, performance, and uncompromising design.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 font-mono font-bold uppercase text-sm">
            <a 
              href="/Raizel_Velasquez_CV.pdf" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF0033] text-white px-8 py-4 rounded hover:bg-white hover:text-[#FF0033] transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-[#FF0033]/20"
            >
              Resume ↗
            </a>
            <a 
              href="mailto:anonymous.raizel@gmail.com" 
              className="bg-transparent text-white border border-zinc-700 px-8 py-4 rounded hover:bg-zinc-800 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

        </div>

      </div>

      {/* --- THE REVEALED SCROLL INDICATOR --- */}
      <div ref={bioRef} className="absolute bottom-12 left-0 w-full flex justify-center items-center z-10 pointer-events-none">
        <p className="text-[#FF0033] font-mono text-xs md:text-sm tracking-widest uppercase font-bold bg-[#0a0a0a] px-6 py-2 rounded-full border border-zinc-800">
          Scroll to explore archives ↓
        </p>
      </div>

    </div>
  );
}