import { useDraggable } from "@dnd-kit/core";
import type { Tile } from "../types/Tile";

interface PaletteProps {
  tiles: Tile[];
}

type PaletteTileProps = {
  id: string;
  image: string;
};

export const Palette = ({ tiles }: PaletteProps) => {
  return (
    <div className="flex flex-wrap p-2 gap-2">
      {tiles.map((tile) => (
        <PaletteTitle image={tile.imageUrl} key={tile.id} id={tile.id} />
      ))}
    </div>
  );
};

export const PaletteTitle = ({ id, image }: PaletteTileProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: {
      tileId: id,
    },
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-16 h-16"
    >
      <img src={image} />
    </div>
  );
};
