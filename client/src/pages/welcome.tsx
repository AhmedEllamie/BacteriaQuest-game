import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    // Play welcome sound
    const audio = new Audio("/welcome.mp3");
    audio.play();
    setIsPlaying(true);

    // Navigate to game after sound plays
    setTimeout(() => {
      setLocation("/game");
    }, 2000); // Adjust timing based on your audio length
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2">
              Welcome to Bacteria Battle!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg mx-auto text-center">
              {/* Placeholder for welcome text */}
              <p>Learn about antibiotic resistance through an interactive game!</p>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleStart}
                disabled={isPlaying}
                className="w-48"
              >
                {isPlaying ? "Starting..." : "Start Game"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
