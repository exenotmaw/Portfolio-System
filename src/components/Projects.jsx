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
      category: "Prediction & Suggestion",
      stack: "Python",
      description: "An advanced telemetry suite and real estate valuation platform engineered for Tanza, Cavite. It utilizes predictive machine learning models alongside an automated data pipeline that interpolates PM2.5 to AQI metrics across 21 barangays.",
      link: "https://house-sight-tanza.vercel.app/"
    },
    {
      title: "SIGNATURA",
      category: "E-Commerce Archive",
      stack: "JavaScript",
      description: "Architected and deployed a secure, full-stack cryptographic e-commerce platform using React and Supabase, establishing an immutable Physical and Digital Handshake that definitively authenticates limited-edition physical assets and eliminates counterfeit vulnerabilities.",
      link: "https://signatura-clothing.pages.dev/"
    },
    {
      title: "CONTINUUM",
      category: "AI Command Center",
      stack: "TypeScript",
      description: "An AI-driven content management and drafting platform. It acts as a centralized command center where users can instantly generate, organize, and streamline the creation of digital content.",
      link: "https://continuum-two-beta.vercel.app/"
    }
  ];

  const offTrackProjects = [
    {
      // --- UPGRADED FERROHEART STRUCTURE ---
      title: "FERROHEART",
      category: "Premium Digital Archiving & Cinematic Timeline Generation",
      stack: "React / Supabase / GSAP",
      description: "A full-stack SaaS platform designed to curate and generate secure digital memory timelines. FerroHeart transforms user-uploaded media and textual narratives into highly interactive, shareable web experiences, merging robust backend architecture with a minimalist, high-fashion visual aesthetic.",
      link: "https://ferroheart-app.vercel.app/",
      
      technicalBreakdown: [
        "Architected a React-based SaaS application utilizing Supabase for PostgreSQL database management and secure user authentication, resulting in a robust, scalable foundation for a premium digital asset platform.",
        "Orchestrated complex front-end interactions integrating GSAP and ScrollTrigger to build dynamic timeline interfaces, yielding a seamless, immersive user journey featuring zero-latency media rendering and 3D parallax effects.",
        "Executed comprehensive production-security protocols—including environmental variable masking, strict MIME-type file-upload limiters, and GDPR/DMCA compliance features—achieving a fully protected, commercial-ready platform hosted on Vercel."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React, React Router, Tailwind CSS, GSAP" },
        { domain: "Backend / BaaS", tech: "Supabase, Edge API" },
        { domain: "Database", tech: "PostgreSQL" },
        { domain: "Integrations", tech: "Supabase Auth, Storage Buckets" },
        { domain: "Infrastructure", tech: "Vercel (Client)" },
      ],
      keyFeatures: [
        { name: "Cinematic Timeline Engine", desc: "Engineered complex ScrollTrigger animations, including asynchronous parallax rain and dynamic film strips, coupled with a custom ResizeObserver implementation to guarantee layout stability during dynamic media loading." },
        { name: "Secure Media Hosting", desc: "Built a protected storage infrastructure enforcing strict 5MB file-size limits, image-only MIME types, and secure Cross-Origin Resource Sharing (CORS) bound exclusively to the production domain to prevent unauthorized database access." },
        { name: "Commercial Compliance Integration", desc: "Developed native client-side routing safeguards, global cookie consent states via localStorage, and an automated DMCA/Abuse reporting pipeline to ensure immediate commercial viability and host protection." }
      ]
    },
    {
      title: "OCULAR ARCHIVES",
      category: "Cognitive Architecture & Automated Intel",
      stack: "React / FastAPI / PostgreSQL",
      description: "A full-stack, AI-powered terminal designed for rigorous academic synthesis. Ocular bypasses manual data entry by extracting intelligence from multimodal manuscripts and generating structured, high-fidelity examinations.",
      link: "https://ocular-six.vercel.app/",
      
      technicalBreakdown: [
        "Architected a multimodal, AI-driven terminal that instantly transforms raw text, PDFs, and images into structured academic examinations using the Google Gemini 2.5 Flash engine.",
        "Engineered a secure, full-stack infrastructure utilizing a React frontend and a Python/FastAPI backend, anchored by a PostgreSQL database to manage secure credential hashing, session tokens, and user generation metrics.",
        "Deployed a production-ready, dark-utility platform featuring asynchronous API email verification (Resend), JWT-based routing guardrails, and automated .docx file compilation for native document exports."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React, Tailwind CSS (Brutalist UI)" },
        { domain: "Backend", tech: "Python, FastAPI, Uvicorn" },
        { domain: "Database", tech: "PostgreSQL (Neon), psycopg2" },
        { domain: "Integrations", tech: "Google GenAI API, Resend, PyMuPDF" },
      ],
      keyFeatures: [
        { name: "Secure Identity Enlistment", desc: "Custom-built authentication flow with salted password hashing, asynchronous email link verification, and secure database migrations." },
        { name: "Multimodal Extraction", desc: "Native parsing of PDFs, DOCX files, and raw images directly in the browser via backend pipeline processing." },
        { name: "Dynamic Prompt Engineering", desc: "Programmable rigor levels (Novice to Master) that dynamically adjust the AI's vocabulary, syntax, and distractor plausibility on the fly." }
      ]
    },
    {
      title: "LUMIMARYX",
      category: "Creative Systems",
      stack: "JavaScript",
      description: "An exploratory repository focused on creative coding systems and visual experimentation, pushing the boundaries of interface design and digital aesthetics.",
      link: "https://luminaryx-rho.vercel.app/"
    }
  ];

  useGSAP(() => {
    // 1. LEFT COLUMN CARDS
    gsap.utils.toArray('.left-col .project-card').forEach((card) => {
      gsap.fromTo(card, 
        { x: -150, opacity: 0 },
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

    // 2. RIGHT COLUMN CARDS
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

  const renderProjectCard = (project, i) => (
    <a 
      href={project.link}
      target="_blank"
      rel="noreferrer"
      key={i} 
      className="project-card flex flex-col bg-zinc-900 bg-opacity-40 p-8 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300 rounded-sm group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-mono text-[#FF0033] uppercase tracking-wider font-bold">
          {project.category}
        </span>
        <span className="text-zinc-600 group-hover:text-white transition-colors duration-300 text-xl">
          ↗
        </span>
      </div>
      
      <h4 className="text-3xl font-black uppercase tracking-tight group-hover:text-white transition-colors duration-300">
        {project.title}
      </h4>
      
      <p className="text-zinc-400 mt-4 text-sm leading-relaxed font-sans text-justify">
        {project.description}
      </p>

      {/* --- EXTENDED DATA SECTION --- */}
      {project.technicalBreakdown && (
        <div className="mt-8 flex flex-col gap-8">
          
          <div>
            <h5 className="text-white text-xs font-mono uppercase tracking-widest mb-3 border-b border-zinc-800 pb-2">
              Technical Breakdown (ARR)
            </h5>
            <ul className="space-y-2 list-none">
              {project.technicalBreakdown.map((point, idx) => (
                <li key={idx} className="text-zinc-400 text-sm font-sans leading-relaxed relative pl-4 text-justify">
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#FF0033] rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {project.keyFeatures && (
            <div>
              <h5 className="text-white text-xs font-mono uppercase tracking-widest mb-3 border-b border-zinc-800 pb-2">
                Key Engineering Features
              </h5>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="text-sm font-sans leading-relaxed text-justify">
                    <span className="text-white font-bold mr-2">{feature.name}:</span>
                    <span className="text-zinc-400">{feature.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.detailedStack && (
            <div>
              <h5 className="text-white text-xs font-mono uppercase tracking-widest mb-3 border-b border-zinc-800 pb-2">
                The Stack
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.detailedStack.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-zinc-500 text-xs font-mono uppercase">{item.domain}</span>
                    <span className="text-zinc-300 text-sm font-sans font-medium">{item.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-auto pt-6 border-t border-zinc-800/50 flex flex-wrap gap-2 w-full">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          {project.stack}
        </span>
      </div>
    </a>
  );

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
            {onTrackProjects.map((project, i) => renderProjectCard(project, i))}
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
            {offTrackProjects.map((project, i) => renderProjectCard(project, i))}
          </div>
        </div>

      </div>
    </div>
  );
}