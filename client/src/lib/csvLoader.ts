
import { Question } from './questions';
import Papa from 'papaparse';

export async function loadQuestionsFromCSV(file: File): Promise<Question[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const questions: Question[] = results.data.map((row: any, index: number) => ({
          id: parseInt(row.id) || index + 1,
          text: row.text || '',
          options: [
            row.option1,
            row.option2,
            row.option3,
            row.option4
          ].filter(option => option), // Remove empty options
          correctAnswer: parseInt(row.correct_option) - 1,
          explanation: row.explanation || ''
        }));
        resolve(questions);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}
