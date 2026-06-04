import { useCart } from "../hooks/useShoppingCart";
import { useAppSelector } from "../store/hooks";
import AddIcon from "/src/assets/add-icon.png";
import RemoveIcon from "/src/assets/remove-icon.png";

export const CartTable = () => {
  const cart = useAppSelector((state) => state.cart);
  const items = cart.items;
  const { removeFromCart, changeQuantity } = useCart();

  const onDelete = (id: string) => {
    removeFromCart(id);
  };

  const onAdd = (id: string) => {
    const item = cart.items.find((itemInCart) => itemInCart.id === id);

    if (!item) return;

    changeQuantity(id, item.quantity + 1);
  };

  return (
    <div className="overflow-hidden w-full rounded-t-md border border-ink-400">
      <table className="w-full border-collapse">
        <thead className="bg-parchment-200 font-body uppercase text-xs">
          <tr className="p-1">
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
          {items.map((item) => (
            <tr key={`${item.id}-${item.collection}`} className="border-b-1">
              <td className="border-r  border-ink-400 ">{item.collection}</td>
              <td className="border-r  border-ink-400 p-1">
                <img
                  src={item.itemImage}
                  className="w-5 h-5 md:w-10 md:h-10 m-auto"
                />
              </td>
              <td className="border-r  border-ink-400 ">[{item.quantity}]</td>
              <td className="border-r  border-ink-400 ">
                [${item.unitPrice.toFixed(2)}]
              </td>
              <td className="border-ink-400 bg-parchment-100">
                <div className=" flex-1 flex gap-2 justify-center items-center ">
                  <button
                    onClick={() => onAdd(item.id)}
                    className="md:cursor-pointer"
                  >
                    <img
                      src={AddIcon}
                      alt="Add"
                      className="h-5 w-5 transition md:hover:brightness-80"
                    />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="md:cursor-pointer"
                  >
                    <img
                      src={RemoveIcon}
                      alt="Remove"
                      className="h-5 w-5 transition md:hover:brightness-80"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
