import type { ChangeEvent } from "react";
import { TILE_OPTIONS } from "../constants/TileOptions";
import { useCart } from "../hooks/useShoppingCart";
import { useAppSelector } from "../store/hooks";
import { OrderTotal } from "./OrderTotal";

export const ShoppingTool = () => {
  const cart = useAppSelector((state) => state.cart);
  const itemsInCart = cart.items;

  const { addToCart, removeFromCart, changeQuantity } = useCart();

  const onSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const item = TILE_OPTIONS.find((o) => o.id === event.target.value);
    if (!item) return;
    addToCart(item);
  };

  const onDelete = (id: string) => {
    removeFromCart(id);
  };

  const onAdd = (id: string) => {
    const item = cart.items.find((itemInCart) => itemInCart.id === id);

    if (!item) return;

    changeQuantity(id, item.quantity + 1);
  };

  return (
    <div className="shopping-cart flex flex-col md:max-w-[350px]">
      <h3 className="font-heading text-lg md:text-xl uppercase mb-2">
        shopping cart & design tool
      </h3>
      <div className="overflow-hidden w-full rounded-t-md border border-ink-400">
        <table className="w-full border-collapse">
          <thead className="bg-parchment-200 font-body uppercase text-xs">
            <tr>
              <th className="border-r border-b border-ink-400">
                Tile Collection
              </th>
              <th className="border-r border-b border-ink-400">Item</th>
              <th className="border-r border-b border-ink-400">
                Quantity
                <br />
                (sq.ft.)
              </th>
              <th className="border-r border-b border-ink-400">
                Unit Price <br />
                ($)
              </th>
              <th className="border-b border-ink-400 w-[80px]">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {itemsInCart.map((item) => (
              <tr key={`${item.id}-${item.collection}`}>
                <td className="border-r  border-ink-400 ">{item.collection}</td>
                <td className="border-r  border-ink-400 ">{item.itemImage}</td>
                <td className="border-r  border-ink-400 ">[{item.quantity}]</td>
                <td className="border-r  border-ink-400 ">
                  [${item.unitPrice.toFixed(2)}]
                </td>
                <td className="border-ink-400">
                  <div className=" flex-1 flex gap-2 justify-center items-center">
                    <button onClick={() => onAdd(item.id)}>
                      <img
                        src="/src/assets/add-icon.png"
                        alt="Add"
                        className="h-5 w-5"
                      />
                    </button>
                    <button onClick={() => onDelete(item.id)}>
                      <img
                        src="/src/assets/remove-icon.png"
                        alt="Remove"
                        className="h-5 w-5"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-1 justify-between items-start w-full">
        <img
          src="/src/assets/shopping-tile-hand.png"
          alt="Shopping Tile Hand"
          className="mt-2 h-10 w-14 md:block hidden"
        />
        <select
          onChange={onSelectHandler}
          className="bg-parchment-200 rounded-md border-2 mt-2 px-1 max-w-[120px] text-sm"
        >
          <option value="" className="">
            Add tile in card
          </option>
          {TILE_OPTIONS.map((option) => (
            <option key={`${option.id}-${option.collection}`} value={option.id}>
              {option.collection} - {option.itemImage}
            </option>
          ))}
        </select>
        <OrderTotal />
      </div>
    </div>
  );
};
