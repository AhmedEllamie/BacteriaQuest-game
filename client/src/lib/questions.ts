
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

    if (!data || data.length === 0) {
      throw new Error('No data found in Excel file');
    }

    return data.map((row: any, index: number) => {
      // Validate required fields
      if (!row.Question && !row.question) {
        console.error(`Missing question text in row ${index + 1}`);
        throw new Error(`Invalid data format in row ${index + 1}`);
      }

      const options = [
        row.Option1 || row.option1,
        row.Option2 || row.option2,
        row.Option3 || row.option3,
        row.Option4 || row.option4
      ].filter(Boolean);

      if (options.length < 2) {
        console.error(`Not enough options in row ${index + 1}`);
        throw new Error(`Invalid options in row ${index + 1}`);
      }

      return {
        id: index + 1,
        text: row.Question || row.question,
        options: options,
        correctAnswer: Math.max(0, Math.min(options.length - 1, (parseInt(row.CorrectAnswer || row.correctAnswer) || 1) - 1)),
        explanation: row.Explanation || row.explanation || 'No explanation provided'
      };
    });
  } catch (error) {
    console.error('Error loading questions:', error);
    // Return a sample question so the game can still function
    return [{
      id: 1,
      text: "Sample question - Please check the Excel file format",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
      explanation: "Please ensure the Excel file is properly formatted with columns: Question, Option1-4, CorrectAnswer, and Explanation"
    }];
  }
}

export const questions = loadQuestionsFromExcel();
