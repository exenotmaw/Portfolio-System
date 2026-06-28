// src/components/Footer.jsx
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef();
  const contentRef = useRef();
  
  // State for the contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useGSAP(() => {
    gsap.fromTo(contentRef.current, 
      { y: -100 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", 
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, { scope: footerRef });

  // UPGRADED: Handles the form submission in the background using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sends the data to Formspree as a properly formatted JSON object
      const response = await fetch("https://formspree.io/f/mnjkvllb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a network error.");
    }
  };

  return (
    <footer 
      ref={footerRef} 
      className="relative w-full bg-[#FF0033] text-[#0a0a0a] pt-24 pb-12 px-6 md:px-12 overflow-hidden flex flex-col justify-between min-h-screen z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto w-full flex flex-col z-10 flex-1">
        
        {/* ================= MASSIVE HEADER ================= */}
        <div className="flex flex-col items-center text-center w-full mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest uppercase mb-6 font-bold opacity-70">
            // 03. Initialization
          </h2>
          
          <h1 className="w-full text-[11vw] font-black uppercase tracking-tighter leading-none text-[#0a0a0a] mb-6 hover:text-white transition-colors duration-500 cursor-default whitespace-nowrap">
            LET'S TALK
          </h1>
          
          <p className="text-lg md:text-xl font-sans font-medium opacity-80 max-w-3xl">
            Have an interesting project, design idea, or want to collaborate? Send a message directly.
          </p>
        </div>

        {/* ================= SPLIT FORM LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="flex flex-col">
            <p className="text-lg font-sans leading-relaxed mb-12 font-medium opacity-90 max-w-md">
              I'm always open to discussing new opportunities, frontend development projects, and custom web designs.
            </p>

            <div className="flex flex-col gap-8 font-sans text-[#0a0a0a] font-bold">
              <div className="flex items-center gap-6">
                <span className="text-2xl">📍</span>
                <span className="text-lg">Tanza, Cavite</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl">✉️</span>
                <span className="text-lg">anoymous.raizel@gmail.com</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl">📞</span>
                <span className="text-lg">+63 --- --- ----</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl">👥</span>
                <span className="text-lg">facebook.com/defnotmaw</span>
              </div>
            </div>

            <a 
              href="https://github.com/exenotmaw" 
              target="_blank" 
              rel="noreferrer"
              className="mt-12 bg-[#0a0a0a] text-[#FF0033] py-4 px-8 rounded-md font-black uppercase tracking-tight hover:bg-zinc-800 transition-colors text-center w-max shadow-xl"
            >
              Connect on GitHub
            </a>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          {/* Restored the onSubmit handler and flex classes for proper layout spacing */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="p-4 rounded-md border-2 border-[#0a0a0a] bg-transparent focus:outline-none focus:bg-[#0a0a0a] focus:text-[#FF0033] transition-colors placeholder:text-[#0a0a0a]/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="p-4 rounded-md border-2 border-[#0a0a0a] bg-transparent focus:outline-none focus:bg-[#0a0a0a] focus:text-[#FF0033] transition-colors placeholder:text-[#0a0a0a]/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows="4" 
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="p-4 rounded-md border-2 border-[#0a0a0a] bg-transparent focus:outline-none focus:bg-[#0a0a0a] focus:text-[#FF0033] transition-colors resize-none placeholder:text-[#0a0a0a]/50"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-[#0a0a0a] text-white py-4 px-8 rounded-md font-black uppercase tracking-tight hover:bg-[#e67e22] transition-colors flex items-center justify-center gap-2 shadow-lg mt-2 w-max"
            >
              Send Message <span className="text-xl">↗</span>
            </button>
          </form>

        </div>
      </div>

      {/* ================= BOTTOM UTILITIES ================= */}
      <div className="mt-24 border-t border-[#0a0a0a]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-sm uppercase font-bold z-10 relative">
        <div className="flex gap-8">
          <a href="https://github.com/exenotmaw" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            GitHub
          </a>
          <a href="#" className="hover:opacity-50 transition-opacity">
            Resume
          </a>
        </div>
        
        <p className="opacity-70">
          © 2026 John Mar Fulton. All Rights Reserved.
        </p>
      </div>
      
      <div className="absolute -bottom-20 -right-20 text-[30vw] text-[#0a0a0a] opacity-5 pointer-events-none select-none z-0">
        ✺
      </div>
    </footer>
  );
}