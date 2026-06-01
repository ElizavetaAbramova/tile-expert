import { type Item } from "../types/Item";

interface ShoppingToolProps {
  items: Item[];
}

export const ShoppingTool = ({ items }: ShoppingToolProps) => {
  return (
    <div className="shopping-cart flex flex-col gap-2">
      <h3 className="font-heading text-lg md:text-xl uppercase">
        shopping cart & design tool
      </h3>
      <div className="overflow-hidden rounded-md border border-ink-400">
        <table className="w-full border-collapse">
          <thead className="bg-parchment-200 font-body uppercase text-xs">
            <tr>
              <th className="border-r border-b border-ink-400 p-2">
                Tile Collection
              </th>
              <th className="border-r border-b border-ink-400 p-2">Item</th>
              <th className="border-r border-b border-ink-400 p-2">
                Quantity
                <br />
                (sq.ft.)
              </th>
              <th className="border-r border-b border-ink-400 p-2">
                Unit Price <br />
                ($)
              </th>
              <th className="border-b border-ink-400 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border-r border-b border-ink-400 p-2">
                  {item.collection}
                </td>
                <td className="border-r border-b border-ink-400 p-2">
                  {item.itemImage}
                </td>
                <td className="border-r border-b border-ink-400 p-2">
                  [{item.quantity}]
                </td>
                <td className="border-r border-b border-ink-400 p-2">
                  [${item.unitPrice.toFixed(2)}]
                </td>
                <td className="border-r border-b border-ink-400 p-2">
                  <button>+</button>
                  <button>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
