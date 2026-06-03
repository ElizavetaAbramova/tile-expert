import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GRID_SIZE } from "../constants/GridDesignerSize";

export interface DesignerState {
  grid: (string | null)[][];
  selectedTileId: string | null;
}

const STORAGE_KEY = "pattern-grid";

export const saveGrid = (grid: (string | null)[][]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grid));
};

export const loadGrid = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
};

export const clearGrid = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const initialState: DesignerState = {
  grid:
    loadGrid() ??
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null)),
  selectedTileId: null,
};

const designerSlice = createSlice({
  name: "designer",
  initialState,
  reducers: {
    placeTile(
      state,
      action: PayloadAction<{
        row: number;
        col: number;
        tileId: string;
      }>,
    ) {
      const { row, col, tileId } = action.payload;

      state.grid[row][col] = tileId;
    },

    removeTile(
      state,
      action: PayloadAction<{
        row: number;
        col: number;
      }>,
    ) {
      const { row, col } = action.payload;

      state.grid[row][col] = null;
    },

    clear: () => {
      clearGrid();
      return {
        ...{
          grid: Array.from({ length: GRID_SIZE }, () =>
            Array(GRID_SIZE).fill(null),
          ),
          selectedTileId: null,
        },
      };
    },
  },
});

export const { placeTile, removeTile, clear } = designerSlice.actions;
export default designerSlice.reducer;
