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
    // UPGRADED: min-h-[100svh] lets the container grow. justify-start pushes content down below the navbar on mobile.
    <div ref={containerRef} className="min-h-[100svh] md:h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-start md:justify-center max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-20 md:pb-0">

      {/* --- THE SPLIT LAYOUT --- */}
      <div ref={posterRef} className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between origin-center gap-8 md:gap-8 mt-4 md:mt-0">
        
        {/* LEFT COLUMN: Typography & Call to Actions */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-20">
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase">
            John Mar Fulton <br/>
            <span className="text-[#FF0033] text-2xl md:text-4xl lg:text-5xl tracking-tight">
              Bachelor of Science in Computer Science
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-sans text-justify">
            If you need your idea brought to life, this is the developer you want. I executed and deployed a comprehensive full-stack solution for you. By taking on every technical responsibility from frontend design to backend security, I will successfully turned your complex concept into a fully functioning, user-centric reality.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 font-mono font-bold uppercase text-sm">
            <a 
              href="/Curriculum_Vitae.pdf" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#FF0033] text-white px-8 py-4 rounded hover:bg-white hover:text-[#FF0033] transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-[#FF0033]/20"
            >
              Resume ↗
            </a>
            <a 
              href="#contact" 
              className="bg-transparent text-white border border-zinc-700 px-8 py-4 rounded hover:bg-zinc-800 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Image & Spinning Badge */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
          
          <div className="relative">
            
            {/* UPGRADED: Changed mobile width to w-56 so it fits better on small screens */}
            <div className="w-56 md:w-[22rem] lg:w-[26rem] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group z-10">
              <img 
                src="/me.jpg" 
                alt="John Mar Fulton Profile" 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Spinning "Hire Me" Badge */}
            <div className="absolute -bottom-10 -left-10 z-20 w-40 h-40 flex items-center justify-center scale-75 md:scale-100">
              <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
                  <path id="circlePath" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="transparent" />
                  <text className="text-[13.5px] font-mono font-bold fill-white uppercase tracking-[0.12em]">
                    <textPath href="#circlePath" startOffset="0%">
                      Web Developer • AI Automation •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute w-20 h-20 bg-[#0a0a0a] rounded-full border border-zinc-700 flex items-center justify-center text-xs font-bold text-[#FF0033] uppercase shadow-[0_0_20px_rgba(255,0,51,0.2)]">
                Hire Me
              </div>
            </div>
            
          </div>
        </div>

      </div>

      {/* --- THE REVEALED SCROLL INDICATOR --- */}
      <div ref={bioRef} className="absolute bottom-6 md:bottom-12 left-0 w-full flex justify-center items-center z-10 pointer-events-none hidden md:flex">
        <p className="text-[#FF0033] font-mono text-xs md:text-sm tracking-widest uppercase font-bold bg-[#0a0a0a] px-6 py-2 rounded-full border border-zinc-800">
          Scroll to explore archives ↓
        </p>
      </div>

    </div>
  );
}