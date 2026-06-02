import { OrderPageTitle } from "../components/OrderPageTitle";
import { OrderSummary } from "../components/OrderSummary";
import { PatternBuilder } from "../components/PatternBuilder";
import { Payment } from "../components/Payment";
import { ShoppingTool } from "../components/ShoppingTool";
import { useIsMobile } from "../hooks/useIsMobile";
import type { Item } from "../types/Item";

const itemsInCart: Item[] = [
  {
    id: "1",
    collection: "Collection 1",
    itemImage: "Tile 1",
    quantity: 1,
    unitPrice: 10.0,
  },
];
const options: Item[] = [
  {
    id: "2",
    collection: "Collection 2",
    itemImage: "Tile 2",
    quantity: 1,
    unitPrice: 15.0,
  },
];

const cart = {
  id: "cart1",
  items: itemsInCart,
  subtotal: 0,
  shipping: 25, //or 25 if total < 500
  grandTotal: 0,
};

export const Main = () => {
  const isMobile = useIsMobile();

  //cart from store
  //options is constant

  return (
    <div className="flex flex-col items-center justify-start flex-1 gap-5 py-3 px-2 md:px-10 bg-parchment-100">
      <OrderPageTitle />
      <div className="order-form flex md:flex-row flex-col items-center gap-2 justify-between w-full flex-wrap">
        <ShoppingTool cart={cart} options={options} onSelect={() => {}} />
        {!isMobile && <PatternBuilder />}
        <div className="flex flex-col gap-2">
          <OrderSummary />
          <Payment />
        </div>
      </div>
    </div>
  );
};
