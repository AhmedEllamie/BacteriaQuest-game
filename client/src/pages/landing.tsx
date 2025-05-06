import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { playWelcomeAudio } from "@/lib/audio";
import { loadQuestionsFromCSV } from "@/lib/csvLoader"; // Added import
import { Input } from "@/components/ui/input"; // Added import
import { useToast } from "@/hooks/use-toast"; // Added import

export default function Landing() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [csvFile, setCsvFile] = useState(null);
  const { toast } = useToast();

  const handleWelcome = async () => {
    setIsPlaying(true);
    playWelcomeAudio();

    if (csvFile) {
      try {
        const questions = await loadQuestionsFromCSV(csvFile);
        //  Do something with the loaded questions, e.g., store them in global state
        console.log("Loaded questions:", questions);
      } catch (error) {
        toast({
          title: "Error loading CSV",
          description: error.message,
          variant: "destructive",
        });
      }
    }

    // Navigate after a minimum time
    setTimeout(() => {
      setLocation("/welcome");
    }, 2000);
  };

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-end p-6 pb-16"
      style={{ 
        backgroundImage: 'url(/assets/world.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#89CFF0'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-black/30 p-4 rounded-lg backdrop-blur-sm"
      >
        <Input type="file" onChange={handleFileChange} accept=".csv" /> {/* Added file upload input */}
        <Button
          size="default"
          onClick={handleWelcome}
          disabled={isPlaying}
          className="text-base px-4 py-1.5 bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600 mt-2"
        >
          {isPlaying ? "Loading..." : "Start"}
        </Button>
      </motion.div>
    </div>
  );
}