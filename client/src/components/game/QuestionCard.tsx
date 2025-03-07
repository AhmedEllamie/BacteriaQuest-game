import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  disabled?: boolean;
  showExplanation?: boolean;
}

export function QuestionCard({ question, onAnswer, disabled, showExplanation }: QuestionCardProps) {
  return (
    <Card className="w-full bg-white shadow-lg border-2 border-[#e6d5a7] overflow-hidden">
      {/* Yellow header section */}
      <div className="bg-[#f4d03f] p-2 md:p-3 border-b-2 border-[#e6d5a7]">
        <h3 className="text-base md:text-lg font-medium text-[#5d4037]">Patient Case #{question.id}</h3>
      </div>
      <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 bg-[#fff9e6] max-h-[70vh] overflow-y-auto">
        <div className="border-b border-[#e6d5a7] pb-3 md:pb-4">
          <p className="text-sm md:text-base font-serif leading-relaxed break-words whitespace-pre-wrap">{question.text}</p>
        </div>

        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="text-blue-800 font-medium mb-2">Explanation:</h4>
            <p className="text-blue-700 text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="space-y-2 md:space-y-3 pt-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto min-h-[2.5rem] py-2 md:py-3 px-3 md:px-4 text-sm md:text-base bg-white hover:bg-[#f5f5f5] border-[#e6d5a7] whitespace-normal break-words"
              onClick={() => onAnswer(index)}
              disabled={disabled || showExplanation}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}