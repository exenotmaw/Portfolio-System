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
      category: "Localized Property Intelligence & Virtual Discovery",
      stack: "React / Next.js / Tailwind",
      description: "A high-performance digital real estate hub designed to streamline property discovery in the Tanza housing market. House Sight bypasses fragmented, traditional listing methods by delivering an immersive, highly responsive interface that instantly connects prospective buyers with localized, structured real estate data.",
      link: "https://house-sight-tanza.vercel.app/",
      
      technicalBreakdown: [
        "Architected an immersive, localized property-viewing platform that dynamically renders high-resolution real estate listings, architectural layouts, and market data tailored specifically to the Tanza district.",
        "Engineered a highly responsive, Vercel-deployed frontend architecture utilizing React and modern CSS frameworks to guarantee sub-second load times, fluid state management, and seamless cross-device compatibility.",
        "Orchestrated a streamlined data pipeline and user journey that transforms raw property metadata and multimedia into a centralized, navigable hub, accelerating the buyer discovery process and driving active market inquiries."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React, Next.js, Tailwind CSS" },
        { domain: "Backend", tech: "Node.js, Express / Serverless Functions" },
        { domain: "Database", tech: "PostgreSQL (Supabase) / MongoDB" },
        { domain: "Integrations", tech: "Cloudinary (Image Delivery), Mapbox API" },
        { domain: "Infrastructure", tech: "Vercel (Production Deployment)" }
      ],
      keyFeatures: [
        { name: "Dynamic Listing Rendering", desc: "Custom-built routing and component architecture that dynamically generates property pages, ensuring instantaneous transitions and SEO-optimized metadata for local market visibility." },
        { name: "Optimized Media Delivery", desc: "Implemented advanced image parsing and lazy-loading techniques to handle heavy architectural imagery and virtual tours without compromising the platform’s performance metrics." },
        { name: "Targeted Search & Filtering", desc: "Engineered an intuitive query system allowing users to instantly sift through local properties based on precise parameters (price, footprint, location), utilizing efficient state management for real-time UI updates." }
      ]
    },
    {
      title: "SIGNATURA",
      category: "Cryptographic E-Commerce Ledger & Edge Architecture",
      stack: "React / Supabase / PostgreSQL",
      description: "A high-fidelity, secure e-commerce platform that bridges physical streetwear with an immutable digital database. Signatura acts as a \"Phygital Handshake,\" authenticating creator-forged assets through a tech-noir interface backed by military-grade database security and automated edge-network defense.",
      link: "https://signatura-clothing.pages.dev/",
      
      technicalBreakdown: [
        "Architected and deployed a secure, full-stack cryptographic e-commerce platform using React and Supabase, establishing an immutable asset ledger that definitively authenticates limited-edition physical items and eliminates counterfeit vulnerabilities.",
        "Engineered a strictly typed Row Level Security (RLS) PostgreSQL database and automated edge-network defense perimeter, mathematically neutralizing unauthorized access attempts and ensuring zero data leakage of classified user dossiers.",
        "Spearheaded the development of a high-performance, tech-noir React interface utilizing Tailwind CSS and Framer Motion, delivering an immersive \"classified terminal\" experience that seamlessly synchronizes live database telemetry across all device types."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React, Vite, Tailwind CSS, Framer Motion, TanStack Query" },
        { domain: "Backend & Database", tech: "Supabase, PostgreSQL, Row Level Security (RLS)" },
        { domain: "Integrations", tech: "Supabase Auth (JWT Session Tokens)" },
        { domain: "Infrastructure", tech: "Cloudflare Pages, Cloudflare Turnstile (WAF), GitHub (CI/CD)" }
      ],
      keyFeatures: [
        { name: "Vault Isolation & RLS", desc: "Configured strict PostgreSQL policies directly at the database engine level, ensuring users can only mutate their own cryptographic dossiers while reserving ledger write-access strictly for verified administrator tokens." },
        { name: "Cinematic & Adaptive UI", desc: "Built a highly responsive, brutalist-luxury interface featuring passive video background layers, Framer Motion viewport transitions, and custom mobile breakpoints, maintaining 60fps performance without sacrificing thematic aesthetics." },
        { name: "Edge-Network Perimeter Defense", desc: "Deployed Cloudflare Turnstile for passive bot mitigation and enforced strict WAF (Web Application Firewall) rules, protecting the authentication endpoints from brute-force attacks and ledger scraping." }
      ]
    },
    {
      title: "CONTINUUM",
      category: "Editorial Synthesis & Automated Content Archival",
      stack: "React / FastAPI / GenAI",
      description: "A full-stack, AI-powered editorial dashboard designed for high-fidelity content synthesis. Continuum bridges the gap between raw ideation and production-ready publishing by autonomously generating, routing, and archiving editorial copy and visual asset prompts within a cinematic, state-driven interface.",
      link: "https://continuum-two-beta.vercel.app/",
      
      technicalBreakdown: [
        "Spearheaded the end-to-end development of a multi-tenant content management SaaS utilizing a Vite/React frontend and a Python/FastAPI backend, establishing a secure, CORS-protected production environment across Vercel and Render.",
        "Engineered an automated synthesis pipeline by integrating the Google GenAI SDK into a secure Python architecture, empowering operators to instantly generate, manually override, and finalize complex editorial assets directly from the dashboard.",
        "Orchestrated a state-driven, minimalist React front-end featuring a custom data routing workflow (Pending Cycle, Approved Grid, Rejected Vault), streamlining the editorial review process and delivering a frictionless user experience modeled on premium high-fashion brutalism."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React (Vite), Tailwind CSS" },
        { domain: "Backend", tech: "Python, FastAPI, Uvicorn" },
        { domain: "Database", tech: "PostgreSQL (Neon), SQLAlchemy, bcrypt" },
        { domain: "Integrations", tech: "Google GenAI API (Text & Prompt Synthesis)" },
        { domain: "Infrastructure", tech: "Vercel (Client), Render (Server)" }
      ],
      keyFeatures: [
        { name: "State-Driven Approval Workflow", desc: "Dynamic routing of generated assets through a Pending Cycle, Approved Grid, and Rejected Vault, featuring real-time UI updates and DOM manipulation without page reloads." },
        { name: "Automated Asset Synthesis", desc: "Direct backend integration with Google GenAI to simultaneously draft editorial body copy and conceptualize detailed visual asset prompts from a single, lightweight user input." },
        { name: "Secure Operator Enlistment", desc: "Custom-built JWT authentication flow with salted password hashing, ensuring that sensitive dashboard configurations, session tokens, and generated assets remain completely isolated and protected." },
        { name: "Dynamic API Resolution", desc: "Engineered a robust fetch-routing layer that intelligently resolves cross-origin resource requests, ensuring seamless data transmission between the live Vercel client and the Render server." }
      ]
    }
  ];

  const offTrackProjects = [
    {
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
      // --- UPGRADED LUMINARYX STRUCTURE ---
      title: "LUMINARYX",
      category: "Secure Supply Chain Intelligence & Analytics Core",
      stack: "React / FastAPI / PostgreSQL",
      description: "A highly secure, full-stack inventory management terminal designed for real-time catalog synchronization and predictive forecasting. Luminaryx empowers administrators with high-speed data entry, deep analytics, and uncompromising cryptographic security within a fluid, cinematic user interface.",
      link: "https://luminaryx-rho.vercel.app/",
      
      technicalBreakdown: [
        "Architected a decoupled, cloud-native application integrating a Vite/React frontend on Vercel with a Python/FastAPI backend on Render, achieving seamless, real-time synchronization between the user interface and a cloud-hosted Neon PostgreSQL database.",
        "Fortified the API infrastructure by implementing JWT-based authentication, Bcrypt password hashing, strict CORS policies, and IP-based rate limiting, neutralizing vulnerabilities to brute-force attacks and unauthorized cross-origin requests.",
        "Designed a responsive, cinematic user interface utilizing Tailwind CSS and Framer Motion for state-driven animations, yielding an intuitive, high-conversion administrative dashboard that accelerates data entry and complex analytics visualization."
      ],
      detailedStack: [
        { domain: "Frontend", tech: "React, Framer Motion, Tailwind CSS" },
        { domain: "Backend", tech: "Python, FastAPI, Uvicorn, Slowapi" },
        { domain: "Database", tech: "PostgreSQL (Neon), SQLAlchemy, psycopg2" },
        { domain: "Security", tech: "JWT (PyJWT), Bcrypt (Passlib)" },
        { domain: "Infrastructure", tech: "Vercel (Client), Render (Server)" }
      ],
      keyFeatures: [
        { name: "Cryptographic Access Control", desc: "Custom-built authentication flow featuring Bcrypt password hashing, secure JWT session tokens, and strict IP-based rate limiting to thwart brute-force intrusions." },
        { name: "Defensive API Architecture", desc: "Engineered a resilient backend utilizing dynamic CORS configuration, preflight OPTIONS management, and isolated environment variables to ensure secure cross-origin client-server handshakes." },
        { name: "Real-Time Data Mutability", desc: "Developed a high-speed, state-driven dashboard featuring instant search filtering, automated financial forecasting, and a fully integrated GDPR/CCPA-compliant permanent account deletion protocol." }
      ]
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