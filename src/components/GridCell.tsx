import { useDroppable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { TILE_MAP } from "../constants/DesignPalette";

interface GridCellProps {
  row: number;
  col: number;
  tileId: string | null;
}

export const GridCell = ({ row, col, tileId }: GridCellProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${row}-${col}`,
    data: {
      row,
      col,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-16 h-16 border-1 transition-colors
        ${isOver ? "bg-sage-200" : "transparent"}
      `}
    >
      {tileId && (
        <motion.img
          src={TILE_MAP[tileId]}
          className="w-full h-full object-cover"
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.15,
          }}
        />
      )}
    </div>
  );
};
