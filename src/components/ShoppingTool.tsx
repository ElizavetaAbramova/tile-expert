import type { Cart } from "../types/Cart";
import { type Item } from "../types/Item";
import { OrderTotal } from "./OrderTotal";

interface ShoppingToolProps {
  cart: Cart;
  options: Item[];
  onSelect: (item?: Item) => void;
}

export const ShoppingTool = ({
  cart,
  options,
  onSelect,
}: ShoppingToolProps) => {
  const itemsInCart = cart.items;
  const { subtotal, shipping, grandTotal } = cart;
  //or here onSelect, add and delete

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
              <tr key={item.id}>
                <td className="border-r  border-ink-400 ">{item.collection}</td>
                <td className="border-r  border-ink-400 ">{item.itemImage}</td>
                <td className="border-r  border-ink-400 ">[{item.quantity}]</td>
                <td className="border-r  border-ink-400 ">
                  [${item.unitPrice.toFixed(2)}]
                </td>
                <td className="border-ink-400">
                  <div className=" flex-1 flex gap-2 justify-center items-center">
                    <button>
                      <img
                        src="/src/assets/add-icon.png"
                        alt="Add"
                        className="h-5 w-5"
                      />
                    </button>
                    <button>
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
          onChange={(e) =>
            onSelect(options.find((o) => o.id === e.target.value))
          }
          className="bg-parchment-200 rounded-md border-2 mt-2 px-1 max-w-[120px] text-sm"
        >
          <option value="" className="">
            Add tile in card
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.collection} - {option.itemImage}
            </option>
          ))}
        </select>
        <OrderTotal
          subtotal={subtotal}
          shipping={shipping}
          grandTotal={grandTotal}
        />
      </div>
    </div>
  );
};
