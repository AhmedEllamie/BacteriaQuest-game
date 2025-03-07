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
    <div className="w-32 h-32 relative">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        {/* Lab coat */}
        <rect x="70" y="90" width="60" height="80" fill="#fff" rx="5" />

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
          style={{ originX: "100", originY: "70" }}
        >
          <circle cx="100" cy="70" r="20" fill="#FFD3B6" /> {/* Face */}

          {/* Eyes with glasses */}
          <motion.g
            animate={{
              y: mood === "sad" ? 2 : 0
            }}
          >
            <rect x="85" y="65" width="10" height="6" rx="2" fill="#666" /> {/* Left lens */}
            <rect x="105" y="65" width="10" height="6" rx="2" fill="#666" /> {/* Right lens */}
            <line x1="95" y1="68" x2="105" y2="68" stroke="#666" strokeWidth="1" /> {/* Bridge */}
          </motion.g>

          {/* Mouth */}
          <motion.path
            d={
              mood === "happy"
                ? "M90,75 Q100,80 110,75" // Happy mouth
                : mood === "sad"
                ? "M90,78 Q100,73 110,78" // Sad mouth
                : "M90,76 L110,76" // Neutral mouth
            }
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
          />
        </motion.g>

        {/* Pointing hand */}
        <motion.g
          animate={{
            x: [-2, 2, -2],
            rotate: isCorrect ? [0, -10, 0] : [0, 2, 0]
          }}
          transition={{
            x: {
              duration: 2,
              repeat: Infinity
            },
            rotate: {
              duration: 0.5
            }
          }}
        >
          <rect x="120" y="100" width="20" height="5" fill="#FFD3B6" rx="2" /> {/* Arm */}
          <circle cx="140" cy="102" r="3" fill="#FFD3B6" /> {/* Hand */}
        </motion.g>

        {/* Stethoscope */}
        <motion.path
          d="M80,100 Q70,110 80,120"
          stroke="#4B9CD3"
          strokeWidth="2"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}