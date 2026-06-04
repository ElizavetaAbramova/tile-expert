import type { Tile } from "../types/Tile";
import pattern1 from "../assets/var1.png";
import pattern2 from "../assets/var2.png";
import pattern3 from "../assets/var3.png";
import pattern4 from "../assets/var4.png";
import pattern5 from "../assets/var5.png";
import pattern6 from "../assets/var6.png";
import pattern7 from "../assets/var7.png";
import pattern8 from "../assets/var8.png";

export const DESIGN_PALETTE: Tile[] = [
  { id: "pattern1", imageUrl: pattern1 },
  { id: "pattern2", imageUrl: pattern2 },
  { id: "pattern3", imageUrl: pattern3 },
  { id: "pattern4", imageUrl: pattern4 },
  { id: "pattern5", imageUrl: pattern5 },
  { id: "pattern6", imageUrl: pattern6 },
  { id: "pattern7", imageUrl: pattern7 },
  { id: "pattern8", imageUrl: pattern8 },
];

export const TILE_MAP: Record<string, string> = {
  pattern1: pattern1,
  pattern2: pattern2,
  pattern3: pattern3,
  pattern4: pattern4,
  pattern5: pattern5,
  pattern6: pattern6,
  pattern7: pattern7,
  pattern8: pattern8,
};
