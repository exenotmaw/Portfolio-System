// src/components/VisualGallery.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function VisualGallery() {
  const containerRef = useRef();
  const trackRef = useRef();

  // Your GUI showcases mapped out
  const guis = [
    { title: "SIGNATURA", category: "E-Commerce Archive" },
    { title: "HOUSE SIGHT TANZA", category: "Telemetry & Map Render" },
    { title: "LUMINARYX", category: "Creative System" },
    { title: "CONTINUUM", category: "AI Command Center" },
    { title: "FERROHEART", category: "Dating Surprise" },
    { title: "OCULAR", category: "Exam Generator" }
  ];

  useGSAP(() => {
    const track = trackRef.current;
    
    // Calculate how far the track needs to slide to the left
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    gsap.to(track, {
      x: getScrollAmount,
      ease: "none", // Must be "none" so the speed matches the scroll wheel perfectly
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Lock the screen when the top of this container hits the top of the viewport
        end: () => `+=${getScrollAmount() * -1}`, // Keep it locked for the exact pixel width of the track
        pin: true, // This is the magic command that locks vertical scrolling
        scrub: 1, // Adds a 1-second smoothing delay so it feels expensive
        invalidateOnRefresh: true, // Recalculates math if the user resizes their browser window
      }
    });
  }, { scope: containerRef });

  return (
    // The Outer Container: Takes up exactly one full screen height and hides overflow
    <section 
      ref={containerRef} 
      className="h-screen w-full bg-[#0a0a0a] overflow-hidden relative flex flex-col justify-center border-t border-zinc-900"
    >
      
      {/* Background Section Title (Optional, but looks cool) */}
      <div className="absolute top-12 left-12 z-10 mix-blend-difference">
        <h2 className="text-sm font-mono tracking-widest text-[#FF0033] uppercase font-bold">

        </h2>
      </div>

      {/* The Sliding Track: This div contains all the images side-by-side */}
      <div ref={trackRef} className="flex h-[60vh] md:h-[70vh] w-max px-[10vw] md:px-[5vw] gap-12 md:gap-24 items-center">
        
        {/* Intro Text Card before the images start */}
        <div className="w-[80vw] md:w-[30vw] flex flex-col justify-center shrink-0 pr-12">
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Visual <br/> Architecture
          </h3>
          <p className="text-zinc-400 font-sans text-sm leading-relaxed">
            A closer look at the interfaces, data dashboards, and command centers that power the architecture. Scroll down to navigate the gallery.
          </p>
        </div>

        {/* Map through your GUI placeholders */}
        {guis.map((gui, index) => (
          <div key={index} className="w-[85vw] md:w-[60vw] h-full shrink-0 flex flex-col justify-center group relative">
            
            {/* The Image Container */}
            <div className="w-full h-[85%] bg-zinc-900 border border-zinc-800 relative overflow-hidden">
               
               {/* Your actual screenshots */}
               <img 
                 src={`/gui-${index + 1}.png`} 
                 alt={gui.title} 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
               />
            </div>
            
            {/* The Label under the image */}
            <div className="mt-6 flex justify-between items-end border-b border-zinc-800 pb-4">
              <div>
                <p className="text-[10px] font-mono text-[#FF0033] uppercase tracking-widest mb-1">
                  {gui.category}
                </p>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                  {gui.title}
                </h4>
              </div>
              <span className="text-zinc-600 font-mono text-sm group-hover:text-white transition-colors duration-300">
                0{index + 1}
              </span>
            </div>

          </div>
        ))}

        {/* Spacer at the end so the last image sits nicely before unlocking */}
        <div className="w-[10vw] shrink-0"></div>

      </div>
    </section>
  );
}