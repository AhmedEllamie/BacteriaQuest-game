import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  resistance: number;
}

export function ProgressBar({ resistance }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Resistance Level</span>
        <span className="text-sm font-medium">{resistance}%</span>
      </div>
      <Progress value={resistance} className="h-2" />
    </div>
  );
}
