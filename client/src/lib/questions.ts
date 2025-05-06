import * as XLSX from 'xlsx';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function loadQuestionsFromExcel(): Question[] {
  const workbook = XLSX.readFile('attached_assets/questions.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);

  return data.map((row: any, index: number) => ({
    id: index + 1,
    text: row.Question || '',
    options: [
      row.Option1,
      row.Option2,
      row.Option3,
      row.Option4
    ].filter(Boolean), // Remove empty options
    correctAnswer: parseInt(row.CorrectAnswer) - 1, // Convert 1-based to 0-based index
    explanation: row.Explanation || ''
  }));
}

export const questions = loadQuestionsFromExcel();