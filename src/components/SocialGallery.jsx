// src/components/SocialGallery.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SocialGallery() {
  const containerRef = useRef();
  const cardsRef = useRef([]);

  // Store the social data, images, and SVG icons in a single array
  const socials = [
    {
      id: "facebook",
      src: "/social-1.jpg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      id: "instagram",
      src: "/social-2.jpg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: "center-highlight",
      src: "/social-3.jpg",
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-[#FF0033] flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm">
           <span className="text-[#FF0033] font-bold text-xl">↗</span>
        </div>
      )
    },
    {
      id: "twitter",
      src: "/social-4.jpg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: "github",
      src: "/social-5.jpg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-white">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  useGSAP(() => {
    // Math to create the perfect fan spread
    // 0: Far Left, 1: Mid Left, 2: Center, 3: Mid Right, 4: Far Right
    const spreadConfigs = [
      { x: window.innerWidth < 768 ? -100 : -280, rotation: -16, y: 40, scale: 0.85, zIndex: 10 },
      { x: window.innerWidth < 768 ? -50 : -140, rotation: -8, y: 20, scale: 0.95, zIndex: 20 },
      { x: 0, rotation: 0, y: 0, scale: 1.05, zIndex: 30 }, // Center card pops up
      { x: window.innerWidth < 768 ? 50 : 140, rotation: 8, y: 20, scale: 0.95, zIndex: 20 },
      { x: window.innerWidth < 768 ? 100 : 280, rotation: 16, y: 40, scale: 0.85, zIndex: 10 },
    ];

    // 1. Initial State: Stack them all perfectly in the center (invisible)
    gsap.set(cardsRef.current, {
      x: 0,
      y: 100, // Starts slightly lowered
      rotation: 0,
      scale: 0.5,
      opacity: 0,
      transformOrigin: "center bottom"
    });

    // 2. The Animation: Spread them out like a deck of cards when scrolled into view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 60%", // Triggers when the top of the container hits 60% of the screen height
      onEnter: () => {
        cardsRef.current.forEach((card, index) => {
          gsap.to(card, {
            x: spreadConfigs[index].x,
            y: spreadConfigs[index].y,
            rotation: spreadConfigs[index].rotation,
            scale: spreadConfigs[index].scale,
            opacity: 1,
            zIndex: spreadConfigs[index].zIndex,
            duration: 1.2,
            ease: "back.out(1.4)", // Gives it that satisfying "spring" or "snap" into place
            delay: index * 0.05 // Slight stagger so they don't all shoot out at the exact same millisecond
          });
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 bg-[#0a0a0a] flex flex-col items-center overflow-hidden">
      
      {/* Premium Typography mimicking the image */}
      <h2 className="text-white text-5xl md:text-7xl font-serif font-black tracking-tighter mb-16 text-center leading-[0.9]">
        WHAT'S UP <br /> 
        <span className="font-light italic text-[#FF0033]">ON SOCIALS</span>
      </h2>

      {/* 
        The Fan Gallery Container 
        Must be relative with a fixed height so the absolute positioned cards have a space to live 
      */}
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center mt-12">
        {socials.map((social, index) => (
          <div 
            key={social.id}
            ref={el => cardsRef.current[index] = el}
            // Absolute positioning forces them to stack before the GSAP animation fires
            className="absolute w-44 h-64 md:w-72 md:h-[26rem] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl group cursor-pointer"
          >
            {/* The Image */}
            <img 
              src={social.src} 
              alt={`${social.id} feed`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            
            {/* Dark Overlay that appears on hover to make the icon pop */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>

            {/* The Social Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
              {social.icon}
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-24 text-white font-mono uppercase tracking-widest text-sm font-bold opacity-60">
        Follow the archive
      </p>
    </section>
  );
}