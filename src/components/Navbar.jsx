// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-50 pointer-events-none">
      {/* Top Left: Portfolio Text */}
      <div className="pointer-events-auto">
        <a 
          href="/" 
          className="text-white font-mono text-sm tracking-widest uppercase hover:text-[#FF0033] transition-colors duration-300"
        >
          Portfolio
        </a>
      </div>
      
      {/* Optional: Add other links here if needed */}
      <div className="pointer-events-auto">
        <span className="text-zinc-600 font-mono text-xs uppercase">
          2026 // RAZ
        </span>
      </div>
    </nav>
  );
}