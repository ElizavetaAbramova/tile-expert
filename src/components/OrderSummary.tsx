import type { Item } from "../types/Item";
import { Input } from "./Input";
import { OrderTotal } from "./OrderTotal";
import { TextArea } from "./TextArea";

const itemsInCart: Item[] = [
  {
    id: "1",
    collection: "Collection 1",
    itemImage: "Tile 1",
    quantity: 1,
    unitPrice: 10.0,
  },
];

const cart = {
  id: "cart1",
  items: itemsInCart,
  subtotal: 0,
  shipping: 25, //or 25 if total < 500
  grandTotal: 0,
};

export const OrderSummary = () => {
  //cart from store
  const { subtotal, shipping, grandTotal } = cart;

  return (
    <div className="order-summary max-w-[300px] flex flex-col items-end">
      <div className="title bg-parchment-200 flex w-full rounded-t-sm">
        <div className="font-heading text-lg md:text-xl uppercase bg-parchment-200 border-l-2 border-t-2 border-r-2 px-2 rounded-t-sm mb-1 mr-[-1px]">
          Order Summary
        </div>
        <div className="flex-1 rounded-bl-sm border-b-2 border-l-2 mt-1 ml-[-1px]"></div>
      </div>
      <div className="order-info flex flex-col gap-1 w-full">
        <Input name="name" type="text" label="Customer Name :" />
        <div className="flex">
          <Input name="phone" type="text" label="phone :" />
          <Input name="email" type="text" label="email :" />
        </div>
        <Input name="shipping-address" type="text" label="shipping address :" />
        <TextArea name="notes" rows={3} cols={50} label="projects Notes :" />
      </div>
      <OrderTotal
        subtotal={subtotal}
        shipping={shipping}
        grandTotal={grandTotal}
      />
    </div>
  );
};
