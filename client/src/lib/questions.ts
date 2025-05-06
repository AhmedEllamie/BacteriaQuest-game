
import * as XLSX from 'xlsx';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function loadQuestionsFromExcel(): Question[] {
  try {
    const workbook = XLSX.readFile('./attached_assets/questions.xlsx');
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    return data.map((row: any, index: number) => ({
      id: index + 1,
      text: row.Question || row.question || '',
      options: [
        row.Option1 || row.option1,
        row.Option2 || row.option2,
        row.Option3 || row.option3,
        row.Option4 || row.option4
      ].filter(Boolean), // Remove empty options
      correctAnswer: (parseInt(row.CorrectAnswer || row.correctAnswer) || 1) - 1,
      explanation: row.Explanation || row.explanation || ''
    }));
  } catch (error) {
    console.error('Error loading questions:', error);
    // Return some default questions if Excel file can't be loaded
    return [
      {
        id: 1,
        text: "Sample question (Excel file not loaded)",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: 0,
        explanation: "Please check the Excel file format and try again"
      }
    ];
  }
}

export const questions = loadQuestionsFromExcel();
