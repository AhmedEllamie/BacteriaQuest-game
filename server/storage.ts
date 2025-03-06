import { gameResults, type GameResult, type InsertGameResult } from "@shared/schema";

export interface IStorage {
  saveGameResult(result: InsertGameResult): Promise<GameResult>;
  getTopScores(): Promise<GameResult[]>;
}

export class MemStorage implements IStorage {
  private results: Map<number, GameResult>;
  private currentId: number;

  constructor() {
    this.results = new Map();
    this.currentId = 1;
  }

  async saveGameResult(result: InsertGameResult): Promise<GameResult> {
    const id = this.currentId++;
    const gameResult: GameResult = { ...result, id };
    this.results.set(id, gameResult);
    return gameResult;
  }

  async getTopScores(): Promise<GameResult[]> {
    return Array.from(this.results.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }
}

export const storage = new MemStorage();
