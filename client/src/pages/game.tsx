import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { questions } from "@/lib/questions";
import { BacteriaAnimation } from "@/components/game/BacteriaAnimation";
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
  const [gameOver, setGameOver] = useState(false);

  const saveMutation = useMutation({
    mutationFn: async (result: any) => {
      return apiRequest("POST", "/api/game/results", result);
    }
  });

  const handleAnswer = (answerIndex: number) => {
    const correct = questions[currentQuestion].correctAnswer === answerIndex;

    if (correct) {
      playCorrectSound();
      setScore(score + 1);
      // Decrease resistance when correct (we're defeating the bacteria)
      setResistance(Math.max(0, resistance - 5));
      setBacteriaSize(Math.max(0.5, bacteriaSize - 0.1));
      setIsGrowing(false);
      setMood("sad"); // Bacteria is sad when we get it right
    } else {
      playWrongSound();
      // Increase resistance when wrong (bacteria is winning)
      setResistance(Math.min(100, resistance + 5));
      setBacteriaSize(Math.min(2, bacteriaSize + 0.1));
      setIsGrowing(true);
      setMood("happy"); // Bacteria is happy when we get it wrong
    }

    // Reset mood to neutral after a delay
    setTimeout(() => {
      setMood("neutral");
    }, 2000);

    if (currentQuestion === questions.length - 1) {
      setGameOver(true);
      playGameOverSound();
      saveMutation.mutate({
        playerName: "Player",
        score,
        resistanceLevel: resistance,
        completed: true
      });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Bacteria Battle</h1>
          <p className="text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <BacteriaAnimation 
          isGrowing={isGrowing} 
          size={bacteriaSize} 
          mood={mood} 
        />
        <ProgressBar resistance={resistance} />

        {!gameOver ? (
          <QuestionCard
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            disabled={gameOver}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
            <p className="text-xl">Final Score: {score}</p>
            <p className="text-xl">Resistance Level: {resistance}%</p>
          </div>
        )}
      </div>
    </div>
  );
}