import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { questions } from "@/lib/questions";
import { BacteriaAnimation } from "@/components/game/BacteriaAnimation";
import { DoctorAvatar } from "@/components/game/DoctorAvatar";
import { ProgressBar } from "@/components/game/ProgressBar";
import { QuestionCard } from "@/components/game/QuestionCard";
import { playCorrectSound, playWrongSound, playGameOverSound } from "@/lib/audio";
import { apiRequest } from "@/lib/queryClient";
import { Fireworks } from "@/components/game/Firework";

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [resistance, setResistance] = useState(50);
  const [bacteriaSize, setBacteriaSize] = useState(1);
  const [isGrowing, setIsGrowing] = useState(false);
  const [mood, setMood] = useState<"happy" | "sad" | "neutral">("neutral");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
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

    // Show explanation for both correct and wrong answers
    setShowExplanation(true);
  };

  const handleContinue = () => {
    setShowExplanation(false);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setGameOver(true);
      playGameOverSound();
      saveMutation.mutate({
        score,
        resistanceLevel: resistance,
        completed: true
      });
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setMood("neutral");
        setIsCorrect(false);
      }, 500);
    }
  };

  return (
    <div 
      className="min-h-screen w-full p-4 md:p-6"
      style={{ backgroundColor: '#89CFF0' }}
    >
      <Fireworks isCorrect={isCorrect} />
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">Bacteria Battle</h1>
          <p className="text-black">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 items-center justify-items-center gap-4 mb-6">
            <div className="w-48">
              <DoctorAvatar 
                mood={mood === "happy" ? "sad" : mood === "sad" ? "happy" : "neutral"}
                isCorrect={isCorrect}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-48">
                <BacteriaAnimation 
                  isGrowing={isGrowing} 
                  size={bacteriaSize} 
                  mood={mood}
                />
              </div>
              <div className="w-48">
                <ProgressBar resistance={resistance} />
              </div>
            </div>
          </div>
          
          {!gameOver ? (
            <div className="w-full">
              <QuestionCard
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                onContinue={handleContinue}
                disabled={gameOver}
                showExplanation={showExplanation}
                  isCorrect={isCorrect}
                />
              </div>
            ) : (
              <div className="text-center bg-white/90 rounded-lg p-8 backdrop-blur">
                <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
                <p className="text-xl mb-4">Final Score: {score}</p>
                <p className="text-xl mb-6">Resistance Level: {resistance}%</p>

                <div className="prose prose-lg mx-auto space-y-6">
                  <p>
                    Excellent work! That brings us to the end of our game on the WHO AWaRe classification of antibiotics.
                  </p>

                  <p>
                    You've shown incredible enthusiasm and knowledge in tackling these questions. Remember, the AWaRe classification isn't just about understanding categories—it's about making informed choices to fight antimicrobial resistance and safeguard patient health.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Key Takeaways:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use Access antibiotics as the first choice for common infections.</li>
                      <li>Be cautious with Watch antibiotics to prevent resistance.</li>
                      <li>Reserve antibiotics for critical, multidrug-resistant infections.</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Your Achievement</h3>
                    {score >= 25 && resistance <= 30 ? (
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <p className="text-lg font-medium text-blue-800">🏅 Gold Medal</p>
                        <p className="text-sm">Outstanding knowledge of the AWaRe classification!</p>
                      </div>
                    ) : score >= 20 && resistance <= 40 ? (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-lg font-medium text-blue-700">🥈 Silver Medal</p>
                        <p className="text-sm">Great understanding of antibiotic stewardship principles!</p>
                      </div>
                    ) : (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-lg font-medium text-blue-600">🥉 Bronze Medal</p>
                        <p className="text-sm">Excellent engagement and enthusiasm!</p>
                      </div>
                    )}
                  </div>

                  <p className="mt-6">
                    Thank you for your dedication, and let's continue to apply what we've learned today in our daily practice.
                  </p>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold">For your certificate:</p>
                    <a 
                      href="https://forms.gle/7Ma2hy5quaGtG6wY9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Click here to get your certificate
                    </a>
                  </div>
                </div>
              </div>
            )}
          
          </div>
      </div>
    </div>
  );
}