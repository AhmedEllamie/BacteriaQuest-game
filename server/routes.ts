import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameResultSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/game/results", async (req, res) => {
    try {
      const result = insertGameResultSchema.parse(req.body);
      const savedResult = await storage.saveGameResult(result);
      res.json(savedResult);
    } catch (error) {
      res.status(400).json({ error: "Invalid game result data" });
    }
  });

  app.get("/api/game/top-scores", async (_req, res) => {
    const scores = await storage.getTopScores();
    res.json(scores);
  });

  const httpServer = createServer(app);
  return httpServer;
}
