import pattern1 from "../assets/var1.png";
import pattern2 from "../assets/var2.png";
import pattern3 from "../assets/var3.png";
import pattern4 from "../assets/var4.png";
import pattern5 from "../assets/var5.png";
import { useAppSelector } from "../store/hooks";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { Tile } from "../types/Tile";
import { Palette } from "./Palette";
import { GridCell } from "./GridCell";
import { useAppDispatch } from "../store/hooks";
import { placeTile } from "../store/designerGrid";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { clear } from "../store/designerGrid";
import { useState } from "react";
import { tileMap } from "../constants/tileMap";

export const VisualizerGrid = () => {
  const grid = useAppSelector((state) => state.designer.grid);

  return (
    <div className="grid grid-cols-6 border w-fit mx-auto">
      {grid.map((row, rowIndex) =>
        row.map((tileId, colIndex) => (
          <GridCell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            tileId={tileId}
          />
        )),
      )}
    </div>
  );
};

export const PatternBuilder = () => {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const options: Tile[] = [
    { id: "111", imageUrl: pattern1 },
    { id: "222", imageUrl: pattern2 },
    { id: "333", imageUrl: pattern3 },
    { id: "444", imageUrl: pattern4 },
    { id: "555", imageUrl: pattern5 },
  ];

  const handleDragStart = (event: DragStartEvent) => {
    const tileId = event.active.data.current?.tileId;

    setActiveTileId(tileId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTileId(null);
    const { active, over } = event;

    if (!over) return;

    const tileId = active.data.current?.tileId;

    const row = over.data.current?.row;

    const col = over.data.current?.col;

    dispatch(
      placeTile({
        row,
        col,
        tileId,
      }),
    );
  };

  return (
    <div className="pattern-builder grid grid-cols-[4fr_2fr] font-heading uppercase border-2 rounded-md bg-parchment-200 text-center max-w-[600px] mt-[35px]">
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="border-r-2">
          <h3 className="text-lg md:text-xl p-2">Visualize your order</h3>
          <p className="text-sm  p-2">
            Drag and drop tiles here to create patterns
          </p>
          <div className="overflow-scroll border-t-1">
            <VisualizerGrid />
          </div>
        </div>
        <div>
          <div className="text-lg md:text-xl border-b-2 p-2">Design plate</div>
          <Palette tiles={options} />
          <button onClick={() => dispatch(clear())}>Clear</button>
        </div>
        <DragOverlay dropAnimation={null}>
          {activeTileId ? (
            <img
              src={tileMap[activeTileId]}
              className="w-16 h-16 rounded shadow-2xl scale-110 pointer-events-none"
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};
