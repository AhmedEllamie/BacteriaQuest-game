import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  disabled?: boolean;
}

export function QuestionCard({ question, onAnswer, disabled }: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Question {question.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg mb-6">{question.text}</p>
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto py-4 px-6"
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
