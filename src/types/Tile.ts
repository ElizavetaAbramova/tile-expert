export type TileId = string;

export interface Tile {
  id: TileId;
  imageUrl: string;
}

export interface GridCell {
  row: number;
  col: number;
  tileId: TileId | null;
}
