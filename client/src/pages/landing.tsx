import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { playWelcomeAudio } from "@/lib/audio";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWelcome = () => {
    setIsPlaying(true);
    playWelcomeAudio();

    // Navigate after a minimum time
    setTimeout(() => {
      setLocation("/welcome");
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-end p-6 pb-16"
      style={{ 
        backgroundImage: 'url(/assets/world.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#89CFF0' //Updated background color
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-black/30 p-6 rounded-lg backdrop-blur-sm"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          WHO AWaRe
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
          Antibiotics Game
        </h2>
        <Button
          size="default"
          onClick={handleWelcome}
          disabled={isPlaying}
          className="text-lg px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600"
        >
          {isPlaying ? "Loading..." : "Welcome"}
        </Button>
      </motion.div>
    </div>
  );
}