import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FireworkProps {
  x: number;
  y: number;
  color: string;
  size?: number;
  delay?: number;
}

const Particle = ({ x, y, color, size = 4, delay = 0 }: FireworkProps) => (
  <motion.div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
    }}
    initial={{ scale: 0 }}
    animate={{
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
    }}
    transition={{
      duration: 1 + Math.random() * 0.5,
      ease: "easeOut",
      delay: delay,
    }}
  />
);

interface FireworksProps {
  isCorrect: boolean;
}

export function Fireworks({ isCorrect }: FireworksProps) {
  const [fireworks, setFireworks] = useState<Array<{
    id: number;
    particles: Array<{
      id: number;
      x: number;
      y: number;
      color: string;
      size: number;
      delay: number;
    }>;
  }>>([]);

  useEffect(() => {
    if (isCorrect) {
      const colors = [
        '#FFD700', // Gold
        '#FF6B6B', // Red
        '#4ECDC4', // Turquoise
        '#45B7D1', // Blue
        '#96CEB4', // Green
        '#FFEEAD', // Yellow
        '#FF9999', // Pink
        '#88D8B0', // Mint
      ];

      // Create multiple firework bursts
      const newFireworks = Array.from({ length: 3 }, (_, fireworkIndex) => ({
        id: Date.now() + fireworkIndex,
        particles: Array.from({ length: 50 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * window.innerHeight * 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 2, // Random size between 2-8px
          delay: Math.random() * 0.3 + fireworkIndex * 0.2, // Stagger the fireworks
        })),
      }));

      setFireworks(newFireworks);

      // Clear fireworks after animation
      const timer = setTimeout(() => {
        setFireworks([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCorrect]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50 }}>
      {fireworks.map((firework) => (
        <div key={firework.id}>
          {firework.particles.map((particle) => (
            <Particle
              key={particle.id}
              x={particle.x}
              y={particle.y}
              color={particle.color}
              size={particle.size}
              delay={particle.delay}
            />
          ))}
        </div>
      ))}
    </div>
  );
}