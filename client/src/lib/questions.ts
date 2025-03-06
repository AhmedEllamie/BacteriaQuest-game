export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is antibiotic resistance?",
    options: [
      "When bacteria become immune to antibiotics",
      "When humans become immune to bacteria",
      "When antibiotics stop working completely",
      "When bacteria multiply faster"
    ],
    correctAnswer: 0
  },
  // Add remaining 30 questions here with proper content
  {
    id: 31,
    text: "Which of these practices helps prevent antibiotic resistance?",
    options: [
      "Taking antibiotics for viral infections",
      "Completing the full course of prescribed antibiotics",
      "Sharing antibiotics with others",
      "Taking antibiotics without prescription"
    ],
    correctAnswer: 1
  }
];
