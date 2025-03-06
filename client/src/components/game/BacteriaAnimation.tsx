import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BacteriaAnimationProps {
  isGrowing: boolean;
  size: number;
}

export function BacteriaAnimation({ isGrowing, size }: BacteriaAnimationProps) {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    setScale(size);
  }, [size]);

  return (
    <div className="w-48 h-48 mx-auto">
      <motion.svg
        viewBox="0 0 200 200"
        animate={{
          scale,
          rotate: isGrowing ? 10 : -10
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="w-full h-full text-primary"
      >
        <motion.path
          d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20"
          fill="currentColor"
        />
        {/* Add additional bacteria details */}
      </motion.svg>
    </div>
  );
}
