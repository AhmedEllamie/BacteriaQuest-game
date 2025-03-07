import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { questions } from "@/lib/questions";
import { BacteriaAnimation } from "@/components/game/BacteriaAnimation";
import { DoctorAvatar } from "@/components/game/DoctorAvatar";
import { ProgressBar } from "@/components/game/ProgressBar";
import { QuestionCard } from "@/components/game/QuestionCard";
import { playCorrectSound, playWrongSound, playGameOverSound } from "@/lib/audio";
import { apiRequest } from "@/lib/queryClient";

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [resistance, setResistance] = useState(50);
  const [bacteriaSize, setBacteriaSize] = useState(1);
  const [isGrowing, setIsGrowing] = useState(false);
  const [mood, setMood] = useState<"happy" | "sad" | "neutral">("neutral");
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const saveMutation = useMutation({
    mutationFn: async (result: any) => {
      return apiRequest("POST", "/api/game/results", {
        ...result,
        playerName: "Player"
      });
    }
  });

  const handleAnswer = (answerIndex: number) => {
    const correct = questions[currentQuestion].correctAnswer === answerIndex;
    setIsCorrect(correct);

    if (correct) {
      playCorrectSound();
      setScore(score + 1);
      setResistance(Math.max(0, resistance - 5));
      setBacteriaSize(Math.max(0.5, bacteriaSize - 0.1));
      setIsGrowing(false);
      setMood("sad"); 
    } else {
      playWrongSound();
      setResistance(Math.min(100, resistance + 5));
      setBacteriaSize(Math.min(2, bacteriaSize + 0.1));
      setIsGrowing(true);
      setMood("happy"); 
    }

    setTimeout(() => {
      setMood("neutral");
      setIsCorrect(false);
    }, 2000);

    if (currentQuestion === questions.length - 1) {
      setGameOver(true);
      playGameOverSound();
      saveMutation.mutate({
        score,
        resistanceLevel: resistance,
        completed: true
      });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div 
      className="min-h-screen w-full p-4 md:p-6"
      style={{ 
        backgroundImage: 'url(/assets/game1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white text-shadow">Bacteria Battle</h1>
          <p className="text-white text-shadow">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center justify-center relative flex-col md:flex-row">
            <div className="flex-shrink-0 z-10 w-full md:w-auto">
              <DoctorAvatar 
                mood={mood === "happy" ? "sad" : mood === "sad" ? "happy" : "neutral"}
                isCorrect={isCorrect}
              />
            </div>
            {!gameOver ? (
              <div className="w-full md:w-[450px] md:absolute md:top-24 md:-right-32 md:transform md:-rotate-6 z-20">
                <QuestionCard
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                  disabled={gameOver}
                />
              </div>
            ) : (
              <div className="text-center bg-white/90 rounded-lg p-8 backdrop-blur">
                <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
                <p className="text-xl">Final Score: {score}</p>
                <p className="text-xl">Resistance Level: {resistance}%</p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <BacteriaAnimation 
              isGrowing={isGrowing} 
              size={bacteriaSize} 
              mood={mood}
            />
          </div>

          <ProgressBar resistance={resistance} />
        </div>
      </div>
    </div>
  );
}