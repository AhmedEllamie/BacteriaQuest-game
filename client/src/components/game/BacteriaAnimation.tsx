import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BacteriaAnimationProps {
  isGrowing: boolean;
  size: number;
  mood: "happy" | "sad" | "neutral";
  customImage?: string;
}

export function BacteriaAnimation({ isGrowing, size, mood, customImage }: BacteriaAnimationProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(size);
  }, [size]);

  if (customImage) {
    return (
      <div className="w-48 h-48 mx-auto relative">
        <motion.img
          src={customImage}
          alt="Custom bacteria mascot"
          className="w-full h-full object-contain"
          animate={{
            scale,
            rotate: isGrowing ? [0, 5, -5, 0] : 0,
            filter: mood === "happy" ? "brightness(1.2)" : mood === "sad" ? "brightness(0.8)" : "brightness(1)",
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
            scale: {
              type: "spring",
              stiffness: 260,
              damping: 20
            },
            filter: {
              duration: 0.3
            }
          }}
        />
      </div>
    );
  }

  // Default SVG bacteria if no custom image
  return (
    <div className="w-48 h-48 mx-auto relative">
      <motion.svg
        viewBox="0 0 200 200"
        animate={{
          scale,
          rotate: isGrowing ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
          scale: {
            type: "spring",
            stiffness: 260,
            damping: 20
          }
        }}
        className="w-full h-full text-primary"
      >
        {/* Main bacteria body */}
        <motion.path
          d="M100,40 C140,40 160,70 160,100 C160,130 140,160 100,160 C60,160 40,130 40,100 C40,70 60,40 100,40"
          fill="currentColor"
          animate={{
            d: isGrowing
              ? "M100,30 C145,30 170,65 170,100 C170,135 145,170 100,170 C55,170 30,135 30,100 C30,65 55,30 100,30"
              : "M100,40 C140,40 160,70 160,100 C160,130 140,160 100,160 C60,160 40,130 40,100 C40,70 60,40 100,40"
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        />

        {/* Eyes */}
        <motion.g
          animate={{
            y: mood === "sad" ? 5 : 0
          }}
        >
          <circle cx="70" cy="90" r="8" fill="white" />
          <circle cx="130" cy="90" r="8" fill="white" />
          <circle cx="70" cy="90" r="4" fill="black" />
          <circle cx="130" cy="90" r="4" fill="black" />
        </motion.g>

        {/* Mouth */}
        <motion.path
          d={
            mood === "happy"
              ? "M70,120 Q100,140 130,120" // Happy mouth
              : mood === "sad"
              ? "M70,130 Q100,110 130,130" // Sad mouth
              : "M70,125 L130,125" // Neutral mouth
          }
          stroke="white"
          strokeWidth="4"
          fill="none"
        />

        {/* Little flagella/antennae */}
        <motion.g
          animate={{
            rotate: isGrowing ? [0, 10, -10, 0] : 0
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <path
            d="M90,45 Q85,35 80,30"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M110,45 Q115,35 120,30"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}