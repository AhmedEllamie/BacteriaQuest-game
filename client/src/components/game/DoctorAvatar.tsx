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
    <div className="w-48 h-48 relative">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        {/* Lab coat */}
        <path
          d="M60,90 L90,90 C100,90 110,95 110,105 L110,170 C110,175 105,180 100,180 L70,180 C65,180 60,175 60,170 Z"
          fill="#fff"
          stroke="#e2e2e2"
          strokeWidth="2"
        />

        {/* Coat collar */}
        <path
          d="M60,90 L75,105 L90,90"
          fill="none"
          stroke="#e2e2e2"
          strokeWidth="2"
        />

        {/* Pocket */}
        <rect x="75" y="130" width="20" height="25" rx="2" fill="none" stroke="#e2e2e2" strokeWidth="1" />

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
          {/* Face */}
          <circle cx="100" cy="70" r="25" fill="#FFD3B6" />

          {/* Hair */}
          <path
            d="M75,60 Q100,50 125,60"
            fill="#4A4A4A"
          />

          {/* Eyes with glasses */}
          <motion.g
            animate={{
              y: mood === "sad" ? 2 : 0
            }}
          >
            {/* Glasses frame */}
            <path
              d="M85,65 L115,65"
              stroke="#666"
              strokeWidth="1"
            />
            {/* Left lens */}
            <rect x="82" y="62" width="14" height="8" rx="4" fill="#f5f5f5" stroke="#666" strokeWidth="1" />
            {/* Right lens */}
            <rect x="104" y="62" width="14" height="8" rx="4" fill="#f5f5f5" stroke="#666" strokeWidth="1" />
            {/* Bridge */}
            <path
              d="M96,66 L104,66"
              stroke="#666"
              strokeWidth="1"
            />
          </motion.g>

          {/* Mouth */}
          <motion.path
            d={
              mood === "happy"
                ? "M90,80 Q100,85 110,80" // Happy mouth
                : mood === "sad"
                ? "M90,83 Q100,78 110,83" // Sad mouth
                : "M90,81 L110,81" // Neutral mouth
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
            rotate: isCorrect ? [0, -10, 0] : [0, 5, 0]
          }}
          transition={{
            x: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 0.5
            }
          }}
        >
          {/* Arm */}
          <path
            d="M120,100 L140,105"
            stroke="#FFD3B6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Hand */}
          <circle cx="145" cy="105" r="4" fill="#FFD3B6" />
        </motion.g>

        {/* Stethoscope */}
        <motion.g>
          {/* Tube */}
          <path
            d="M80,90 C70,100 65,110 70,120 C75,130 85,125 90,120"
            fill="none"
            stroke="#4B9CD3"
            strokeWidth="2"
          />
          {/* Earpieces */}
          <circle cx="80" cy="90" r="3" fill="#4B9CD3" />
          {/* Chest piece */}
          <circle cx="90" cy="120" r="5" fill="#4B9CD3" />
        </motion.g>
      </motion.svg>
    </div>
  );
}