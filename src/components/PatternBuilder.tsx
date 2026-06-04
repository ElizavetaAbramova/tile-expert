import { useAppSelector } from "../store/hooks";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { Palette } from "./Palette";
import { GridCell } from "./GridCell";
import { useAppDispatch } from "../store/hooks";
import { placeTile } from "../store/designerGrid";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DESIGN_PALETTE, TILE_MAP } from "../constants/DesignPalette";

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
    <>
      <div className="pattern-builder grid grid-cols-[3fr_1fr] lg:grid-cols-[4fr_2fr] font-heading uppercase border-2 rounded-md bg-parchment-200 text-center w-full lg:w-[600px] lg:mt-[42px]">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className="border-r-2">
            <h3 className="text-lg md:text-xl p-2">Visualize your order</h3>
            <p className="text-sm  p-2">
              Drag and drop tiles here to create patterns
            </p>
            <div className="overflow-scroll border-t-1 scrollbar">
              <VisualizerGrid />
            </div>
          </div>
          <div>
            <div className="text-lg md:text-xl border-b-2 p-2">
              Design plate
            </div>
            <Palette tiles={DESIGN_PALETTE} />
          </div>
          <DragOverlay dropAnimation={null}>
            {activeTileId ? (
              <img
                src={TILE_MAP[activeTileId]}
                className="w-16 h-16 rounded shadow-2xl scale-110 pointer-events-none"
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </>
  );
};
