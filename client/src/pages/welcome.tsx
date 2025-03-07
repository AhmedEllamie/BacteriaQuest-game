import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { playWelcomeSound, speakWelcome } from "@/lib/audio";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  const welcomeText = `WHO AWaRe Antibiotics Game

Hello everyone, and welcome! Today, we're doing something a little different—and fun! We'll be playing a game to enhance our awareness of the WHO AWaRe classification of antibiotics. As you all know, antimicrobial resistance is a growing global health challenge, and understanding the AWaRe framework is key to using antibiotics responsibly.

This game is designed to be engaging, interactive, and educational. Before we begin, here's a quick recap of the AWaRe categories:

Access antibiotics: These are the first-line treatments for common infections.
Watch antibiotics: These require careful monitoring as they have higher resistance potential.
Reserve antibiotics: These are the last resort options, reserved for severe, multidrug-resistant infections.

Here's how it works:
I'll present different scenarios related to antibiotic use.
Your task is to identify which AWaRe category the antibiotics belong to and make recommendations for use.
We'll discuss the answers together, and I'll share some helpful tips along the way.

This is a great opportunity to collaborate, share insights, and strengthen our understanding of antibiotic stewardship. So, let's get started!`;

  const handleStart = () => {
    setIsPlaying(true);

    // Play welcome sound and speak welcome message
    speakWelcome(welcomeText);
    const soundDuration = playWelcomeSound();

    // Navigate after longer delay to allow for speech
    setTimeout(() => {
      setLocation("/game");
    }, 20000); // Give more time for the full welcome message
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-3xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2">
              WHO AWaRe Antibiotics Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl mb-6">
                Hello everyone, and welcome! Today, we're doing something a little different—and fun! We'll be playing a game to enhance our awareness of the WHO AWaRe classification of antibiotics. As you all know, antimicrobial resistance is a growing global health challenge, and understanding the AWaRe framework is key to using antibiotics responsibly.
              </p>

              <p className="mb-6">
                This game is designed to be engaging, interactive, and educational. Before we begin, here's a quick recap of the AWaRe categories:
              </p>

              <ul className="space-y-4 mb-6">
                <li><strong>Access antibiotics:</strong> These are the first-line treatments for common infections.</li>
                <li><strong>Watch antibiotics:</strong> These require careful monitoring as they have higher resistance potential.</li>
                <li><strong>Reserve antibiotics:</strong> These are the last resort options, reserved for severe, multidrug-resistant infections.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Here's how it works:</h3>
              <ul className="space-y-2 mb-6">
                <li>I'll present different scenarios related to antibiotic use.</li>
                <li>Your task is to identify which AWaRe category the antibiotics belong to and make recommendations for use.</li>
                <li>We'll discuss the answers together, and I'll share some helpful tips along the way.</li>
              </ul>

              <p className="text-lg">
                This is a great opportunity to collaborate, share insights, and strengthen our understanding of antibiotic stewardship. So, let's get started!
              </p>
            </div>

            <div className="flex justify-center mt-8">
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