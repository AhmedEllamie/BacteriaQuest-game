import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Landing() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWelcome = () => {
    setIsPlaying(true);

    // Play the welcome audio file
    const audio = new Audio('/assets/welcome.mp3');
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
      // Continue to next page even if audio fails
      setLocation("/welcome");
    });

    // Navigate after audio finishes or after a minimum time
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
          disabled={isPlaying}
          className="text-xl px-8 py-6 bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600"
        >
          {isPlaying ? "Loading..." : "Welcome"}
        </Button>
      </motion.div>
    </div>
  );
}