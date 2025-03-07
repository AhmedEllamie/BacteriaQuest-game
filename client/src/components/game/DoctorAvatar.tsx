import { motion } from "framer-motion";

interface DoctorAvatarProps {
  mood: "happy" | "sad" | "neutral";
  isCorrect: boolean;
}

export function DoctorAvatar({ mood, isCorrect }: DoctorAvatarProps) {
  return (
    <motion.div
      className="w-48 h-48 relative"
      style={{
        backgroundImage: 'url(/attached_assets/doctor-removebg-preview.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      animate={{
        rotate: isCorrect ? [0, -2, 0] : [0, 2, 0],
        y: mood === "happy" ? -5 : mood === "sad" ? 5 : 0
      }}
      transition={{
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        },
        y: {
          duration: 0.3
        }
      }}
    />
  );
}