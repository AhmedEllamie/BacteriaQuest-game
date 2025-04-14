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
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#89CFF0'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-black/30 p-4 rounded-lg backdrop-blur-sm"
      >
        <Button
          size="default"
          onClick={handleWelcome}
          disabled={isPlaying}
          className="text-base px-4 py-1.5 bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600"
        >
          {isPlaying ? "Loading..." : "Start"}
        </Button>
      </motion.div>
    </div>
  );
}