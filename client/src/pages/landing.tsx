import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    // Preload the audio file
    const audio = new Audio();
    audio.src = '/welcome.mp3'; // Using root path

    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });

    audio.addEventListener('error', () => {
      console.error('Error loading audio file');
      setAudioError(true);
    });

    return () => {
      audio.removeEventListener('canplaythrough', () => {});
      audio.removeEventListener('error', () => {});
    };
  }, []);

  const handleWelcome = () => {
    setIsPlaying(true);

    // Create a new audio instance for playing
    const audio = new Audio('/welcome.mp3');

    audio.play().catch(error => {
      console.error('Error playing audio:', error);
      // Continue to next page even if audio fails
      setLocation("/welcome");
    });

    // Navigate after a minimum time
    setTimeout(() => {
      setLocation("/welcome");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
          WHO AWaRe
        </h1>
        <h2 className="text-4xl font-semibold mb-12 text-foreground">
          Antibiotics Game
        </h2>
        <Button
          size="lg"
          onClick={handleWelcome}
          disabled={isPlaying || (!audioLoaded && !audioError)}
          className="text-xl px-8 py-6 bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600"
        >
          {isPlaying ? "Loading..." : "Welcome"}
        </Button>
      </motion.div>
    </div>
  );
}