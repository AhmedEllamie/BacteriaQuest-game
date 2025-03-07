import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DoctorAvatarProps {
  mood: "happy" | "sad" | "neutral";
  isCorrect: boolean;
}

export function DoctorAvatar({ mood, isCorrect }: DoctorAvatarProps) {
  const [headRotation, setHeadRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadRotation(prev => prev === 2 ? -2 : 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-48 h-48 mx-auto relative">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        {/* Doctor's body */}
        <rect x="80" y="100" width="40" height="60" fill="#fff" />
        
        {/* Doctor's head */}
        <motion.g
          animate={{
            rotate: [headRotation, -headRotation],
            y: mood === "happy" ? -2 : mood === "sad" ? 2 : 0
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            },
            y: {
              duration: 0.5
            }
          }}
          style={{ originX: "100", originY: "85" }}
        >
          <circle cx="100" cy="85" r="25" fill="#FFD3B6" /> {/* Face */}
          
          {/* Eyes */}
          <motion.g
            animate={{
              y: mood === "sad" ? 2 : 0
            }}
          >
            <circle cx="90" cy="80" r="3" fill="#000" />
            <circle cx="110" cy="80" r="3" fill="#000" />
          </motion.g>
          
          {/* Mouth */}
          <motion.path
            d={
              mood === "happy"
                ? "M85,90 Q100,100 115,90" // Happy mouth
                : mood === "sad"
                ? "M85,95 Q100,85 115,95" // Sad mouth
                : "M85,90 L115,90" // Neutral mouth
            }
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
        </motion.g>

        {/* Doctor's hand with syringe */}
        <motion.g
          animate={{
            rotate: isCorrect ? [0, -10, 0] : 0,
            x: isCorrect ? [0, -5, 0] : 0
          }}
          transition={{
            duration: 0.5,
            repeat: isCorrect ? 1 : 0
          }}
          style={{ originX: "120", originY: "120" }}
        >
          <rect x="120" y="120" width="30" height="8" fill="#fff" /> {/* Arm */}
          <rect x="150" y="118" width="15" height="4" fill="#3B82F6" /> {/* Syringe */}
        </motion.g>

        {/* Stethoscope */}
        <motion.path
          d="M90,110 Q80,120 90,130"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
