import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  disabled?: boolean;
}

export function QuestionCard({ question, onAnswer, disabled }: QuestionCardProps) {
  return (
    <Card className="w-full bg-white shadow-lg border-2 border-[#e6d5a7] overflow-hidden">
      {/* Yellow header section */}
      <div className="bg-[#f4d03f] p-3 border-b-2 border-[#e6d5a7]">
        <h3 className="text-lg font-medium text-[#5d4037]">Patient Case #{question.id}</h3>
      </div>
      <CardContent className="p-6 space-y-4 bg-[#fff9e6]">
        <div className="border-b border-[#e6d5a7] pb-4">
          <p className="text-base font-serif leading-relaxed">{question.text}</p>
        </div>
        <div className="space-y-3 pt-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto py-3 px-4 bg-white hover:bg-[#f5f5f5] border-[#e6d5a7]"
              onClick={() => onAnswer(index)}
              disabled={disabled}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}