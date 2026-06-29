// src/App.jsx
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import LiquidBackground from './components/LiquidBackground'; // <-- Import it here
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import VisualGallery from './components/VisualGallery';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import SocialGallery from './components/SocialGallery';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>

      {/* Removed bg-[#0a0a0a] from here so it is transparent. 
        The LiquidBackground handles the colors now.
      */}
      <div className="relative w-full min-h-screen selection:bg-[#FF0033] selection:text-black">
        <LiquidBackground /> {/* <-- Place it at the absolute top of the layout */}
        <BackgroundMusic />
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <VisualGallery />
        <SocialGallery />
        <Footer />
        <Analytics />
      </div>
    </ReactLenis>
  );
}