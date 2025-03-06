import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const gameResults = pgTable("game_results", {
  id: serial("id").primaryKey(),
  playerName: text("player_name").notNull(),
  score: integer("score").notNull(),
  resistanceLevel: integer("resistance_level").notNull(),
  completed: boolean("completed").notNull(),
});

export const insertGameResultSchema = createInsertSchema(gameResults).pick({
  playerName: true,
  score: true,
  resistanceLevel: true,
  completed: true,
});

export type InsertGameResult = z.infer<typeof insertGameResultSchema>;
export type GameResult = typeof gameResults.$inferSelect;
