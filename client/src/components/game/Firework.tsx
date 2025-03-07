import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FireworkProps {
  x: number;
  y: number;
  color: string;
}

const Particle = ({ x, y, color }: FireworkProps) => (
  <motion.div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 4,
      height: 4,
      borderRadius: '50%',
      backgroundColor: color,
    }}
    animate={{
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      opacity: [1, 0],
      scale: [1, 0],
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  />
);

interface FireworksProps {
  isCorrect: boolean;
}

export function Fireworks({ isCorrect }: FireworksProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  useEffect(() => {
    if (isCorrect) {
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      
      setParticles(newParticles);

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isCorrect]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          color={particle.color}
        />
      ))}
    </div>
  );
}
