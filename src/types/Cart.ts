import type { Item } from "./Item";

export type Cart = {
  id: string;
  items: Item[];
  subtotal: number;
  shipping: number;
  grandTotal: number;
};
