// src/components/BackgroundMusic.jsx
import { useState, useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize the audio object once when the component mounts
  useEffect(() => {
    audioRef.current = new Audio('/batman.mp3');
    audioRef.current.loop = true; // This forces the track to loop infinitely
    
    // Cleanup function to stop music if the component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-[60] bg-[#FF0033] text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-[#FF0033] transition-colors duration-300"
    >
      {isPlaying ? "⏸" : "🔊"}
    </button>
  );
}