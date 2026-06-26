// src/components/Marquee.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Marquee() {
  const trackRef = useRef();

  // The tech stack array
  const techStack = [
    "PROMPT ENGINEER", "EDITOR", "AI AUTOMATION", "WEB DEVELOPER"
  ];

  useGSAP(() => {
    // We move the track exactly -50% of its width. 
    // Since the track contains two identical lists, -50% puts the second list 
    // exactly where the first list started, creating a flawless invisible loop.
    gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,         // Infinite loop
      duration: 15,       // Adjust for speed (higher = slower)
      ease: "none",       // "none" is critical here so it doesn't speed up or slow down
    });
  });

  return (
    // The outer container hides anything that overflows outside the viewport
    <div className="w-full bg-[#FF0033] py-4 overflow-hidden flex items-center border-y-4 border-black border-opacity-10">
      
      {/* The track that actually moves. We use w-max so it stretches as long as it needs to */}
      <div ref={trackRef} className="flex w-max items-center whitespace-nowrap">
        
        {/* First List */}
        <div className="flex px-4 items-center">
          {techStack.map((tech, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="text-black font-black text-4xl md:text-6xl uppercase tracking-tighter mx-8">
                {tech}
              </span>
              <span className="text-black text-4xl mx-4">✺</span> {/* A cool separator icon */}
            </div>
          ))}
        </div>

        {/* Second List (Exact Duplicate) */}
        <div className="flex px-4 items-center">
          {techStack.map((tech, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="text-black font-black text-4xl md:text-6xl uppercase tracking-tighter mx-8">
                {tech}
              </span>
              <span className="text-black text-4xl mx-4">✺</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}