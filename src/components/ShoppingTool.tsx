import { TILE_OPTIONS } from "../constants/TileOptions";
import { useCart } from "../hooks/useShoppingCart";
import { OrderTotal } from "./OrderTotal";
import { Dropdown } from "./Dropdown";
import { CustomTileOption } from "./CustomTileOption";
import type { Item } from "../types/Item";
import { CartTable } from "./CartTable";
import { useIsMobile } from "../hooks/useIsMobile";

export const ShoppingTool = () => {
  const { addToCart } = useCart();
  const isMobile = useIsMobile();

  const onSelectHandler = (item: Item) => {
    if (!item) return;
    addToCart(item);
  };

  return (
    <div className="shopping-cart flex flex-col w-full lg:w-[370px] ">
      <h3 className="font-heading text-lg md:text-3xl uppercase mb-2">
        shopping cart & design tool
      </h3>
      <CartTable />
      <div className="flex gap-1 justify-between items-start w-full">
        <Dropdown
          options={TILE_OPTIONS}
          onChange={(tile) => onSelectHandler(tile)}
          getKey={(tile) => tile.id}
          placeholder="Add tile in card"
          renderOption={(tile) => <CustomTileOption tile={tile} />}
        />
        {!isMobile && <OrderTotal />}
      </div>
    </div>
  );
};
