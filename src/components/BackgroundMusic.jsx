import { useState, useRef } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/batman.mp3')); // Put your mp3 in the public folder

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
      className="fixed bottom-6 left-6 z-[60] bg-[#FF0033] text-white p-3 rounded-full shadow-lg"
    >
      {isPlaying ? "⏸️" : "🔊"}
    </button>
  );
}