import Papa from 'papaparse';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const csvPath = '/attached_assets/Extracted_Questions_Data.csv';

export async function loadQuestionsFromFile(): Promise<Question[]> {
  const response = await fetch(csvPath);
  const csvText = await response.text();

  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        const questions: Question[] = results.data
          .filter((row: any) => row.question && row.correct_option) 
          .map((row: any, index: number) => ({
            id: parseInt(row.id) || index + 1,
            text: row.question || '',
            options: [
              row.option1,
              row.option2,
              row.option3,
              row.option4
            ].filter(option => option), 
            correctAnswer: parseInt(row.correct_option) - 1,
            explanation: row.explanation || ''
          }));
        resolve(questions);
      }
    });
  });
}

// For backwards compatibility, export an empty array as default
export const questions: Question[] = [];