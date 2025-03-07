import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/questions";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  onContinue?: () => void;
  disabled?: boolean;
  showExplanation?: boolean;
  isCorrect?: boolean;
}

export function QuestionCard({ 
  question, 
  onAnswer, 
  onContinue, 
  disabled, 
  showExplanation,
  isCorrect 
}: QuestionCardProps) {
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
          <div className={`${isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4 mb-4`}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-blue-600" />
              )}
              <h4 className={`${isCorrect ? 'text-green-800' : 'text-blue-800'} font-medium`}>
                {isCorrect ? 'Correct!' : 'Let\'s Learn More'}
              </h4>
            </div>
            <p className={`${isCorrect ? 'text-green-700' : 'text-blue-700'} text-sm`}>{question.explanation}</p>
            <Button 
              onClick={onContinue}
              className={`mt-4 ${isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            >
              {isCorrect ? 'Next Question' : 'Try Next Question'}
            </Button>
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