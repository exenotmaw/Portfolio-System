// src/components/Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to trigger the frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your internal section links
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Visuals', href: '#visuals' },
    { name: 'Socials', href: '#socials' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-zinc-900 shadow-2xl' 
          : 'bg-transparent py-8 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center pointer-events-auto">
        
        {/* ================= LOGO ================= */}
        <a 
          href="/" 
          className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase group flex items-center gap-3"
        >
          {/* Animated Red Status Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0033] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF0033]"></span>
          </span>
          Portfolio
        </a>

        {/* ================= DESKTOP LINKS ================= */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors duration-300 relative group flex items-center"
            >
              {/* Tech-noir hover slash */}
              <span className="text-[#FF0033] absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                //
              </span>
              {link.name}
            </a>
          ))}
          
          <a 
            href="/Curriculum_Vitae.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="ml-4 bg-white text-[#0a0a0a] px-6 py-2.5 text-xs font-black font-mono uppercase tracking-widest hover:bg-[#FF0033] hover:text-white transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,51,0.4)]"
          >
            Resume
          </a>
        </div>

        {/* ================= MOBILE HAMBURGER BUTTON ================= */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            {/* Top Line */}
            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`}></span>
            {/* Middle Line */}
            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`}></span>
            {/* Bottom Line (Red accent) */}
            <span className={`h-[2px] bg-[#FF0033] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-zinc-900 transition-all duration-500 overflow-hidden pointer-events-auto flex flex-col ${
          isOpen ? 'max-h-[500px] py-10 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-8 px-6">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-white font-black text-4xl uppercase tracking-tighter hover:text-[#FF0033] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="/Curriculum_Vitae.pdf" 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => setIsOpen(false)}
            className="mt-6 border border-[#FF0033] text-[#FF0033] px-12 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-[#FF0033] hover:text-white transition-colors w-full text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}