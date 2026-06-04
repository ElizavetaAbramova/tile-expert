import type { Item } from "../types/Item";

interface CustomTileOptionProps {
  tile: Item;
}

export const CustomTileOption = ({ tile }: CustomTileOptionProps) => {
  return (
    <div className="flex items-center gap-2">
      <img src={tile.itemImage} alt={tile.collection} className="h-6 w-6" />
      <span>{tile.collection}</span>
    </div>
  );
};
