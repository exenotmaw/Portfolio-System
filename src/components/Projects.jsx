// src/components/Projects.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const containerRef = useRef();

  const onTrackProjects = [
    {
      title: "HOUSE SIGHT TANZA",
      category: "Telemetry & Valuation",
      stack: "Python / Figma",
      description: "An advanced telemetry suite and real estate valuation platform engineered for Tanza, Cavite. It utilizes predictive machine learning models alongside an automated data pipeline that interpolates PM2.5 to AQI metrics across 21 barangays.",
      link: "https://house-sight-tanza.vercel.app/"
    },
    {
      title: "SIGNATURA",
      category: "E-Commerce Archive",
      stack: "JavaScript",
      description: "A secure, classified tech-noir archive where users navigate, inspect, and acquire limited-edition, creator-forged assets using a custom terminal-driven interface.",
      link: "https://signatura-clothing.pages.dev/"
    },
    {
      title: "CONTINUUM",
      category: "AI Command Center",
      stack: "TypeScript",
      description: "An AI-driven content management and drafting platform. It acts as a centralized command center where users can instantly generate, organize, and streamline the creation of digital content.",
      link: "https://github.com/exenotmaw/Continuum-Website"
    }
  ];

  const offTrackProjects = [
    {
      title: "Ferroheart",
      category: "Dating Site",
      stack: "JavaScript",
      description: "FerroHeart is a secure, personal e-commerce archive designed for creator-forged assets. It serves as a tech-noir platform that enables users to curate, archive, and manage limited-edition artisan items through a secure digital environment.",
      link: "https://ferroheart-app.vercel.app/"
    },
    {
      title: "OCULAR",
      category: "Digital Archive",
      stack: "JavaScript",
      description: "Ocular is an AI-powered study companion that transforms any document, note, or text into a sophisticated, academic assessment—all wrapped in the timeless elegance of a classical library.",
      link: "https://github.com/exenotmaw/Ocular"
    },
    {
      title: "LUMIMARYX",
      category: "Creative Systems",
      stack: "JavaScript",
      description: "An exploratory repository focused on creative coding systems and visual experimentation, pushing the boundaries of interface design and digital aesthetics.",
      link: "https://github.com/exenotmaw/Lumimaryx"
    }
  ];

  useGSAP(() => {
    // 1. LEFT COLUMN CARDS: Grab them individually and slide from the left
    gsap.utils.toArray('.left-col .project-card').forEach((card) => {
      gsap.fromTo(card, 
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card, // The trigger is now the specific card, not the whole container
            start: "top 90%", // Starts sliding when the card enters the bottom 10% of the screen
            end: "top 50%",   // Fully in place by the time it hits the middle of the screen
            scrub: 1
          }
        }
      );
    });

    // 2. RIGHT COLUMN CARDS: Grab them individually and slide from the right
    gsap.utils.toArray('.right-col .project-card').forEach((card) => {
      gsap.fromTo(card, 
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: 1 
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* ================= ON TRACK COLUMN ================= */}
        <div className="left-col flex flex-col space-y-12">
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="text-sm font-mono tracking-widest text-[#FF0033] uppercase">
              // 01. Core Engineering
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter mt-1">
              ON TRACK
            </h3>
          </div>

          <div className="space-y-12">
            {onTrackProjects.map((project, i) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={i} 
                className="project-card block bg-zinc-900 bg-opacity-40 p-8 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300 rounded-sm group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-zinc-600 group-hover:text-[#FF0033] transition-colors duration-300 text-xl">
                    ↗
                  </span>
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tight mt-2 group-hover:text-[#FF0033] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-400 mt-4 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-zinc-500">
                    {project.stack}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= OFF TRACK COLUMN ================= */}
        <div className="right-col flex flex-col space-y-12 lg:mt-24">
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
              // 02. Systems & Concepts
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tighter mt-1">
              OFF TRACK
            </h3>
          </div>

          <div className="space-y-12">
            {offTrackProjects.map((project, i) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={i} 
                className="project-card block bg-zinc-900 bg-opacity-40 p-8 border border-zinc-900 hover:border-zinc-800 transition-colors duration-300 rounded-sm group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-zinc-600 group-hover:text-[#FF0033] transition-colors duration-300 text-xl">
                    ↗
                  </span>
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tight mt-2 group-hover:text-[#FF0033] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-400 mt-4 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-zinc-500">
                    {project.stack}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}