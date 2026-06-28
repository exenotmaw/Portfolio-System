// src/components/SocialGallery.jsx
export default function SocialGallery() {
  const images = [
    '/social-1.jpg',
    '/social-2.jpg',
    '/social-3.jpg',
    '/social-4.jpg',
    '/social-5.jpg',
  ];

  return (
    <section className="w-full py-24 bg-[#0a0a0a] flex flex-col items-center">
      <h2 className="text-white text-4xl md:text-6xl font-serif mb-16 text-center">
        WHAT'S UP <br /> ON SOCIALS
      </h2>

      {/* The Fan Gallery Container */}
      <div className="flex -space-x-12 md:-space-x-20 overflow-hidden px-4">
        {images.map((src, index) => {
          // Calculate rotation for the "fan" effect
          const rotations = ["-rotate-12", "-rotate-6", "rotate-0", "rotate-6", "rotate-12"];
          
          return (
            <div 
              key={index}
              className={`w-40 md:w-64 h-64 md:h-96 rounded-2xl overflow-hidden border-4 border-[#0a0a0a] transition-transform hover:z-20 hover:scale-105 duration-300 ${rotations[index]}`}
            >
              <img 
                src={src} 
                alt="Social feed" 
                className="w-full h-full object-cover" 
              />
            </div>
          );
        })}
      </div>
      
      <p className="mt-16 text-white font-mono uppercase tracking-widest text-sm opacity-60">
        Follow on social media
      </p>
    </section>
  );
}