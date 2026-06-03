import type { Item } from "./Item";

export type ShoppingCart = {
  id: string;
  items: Item[];
  subtotal: number;
  shipping: number;
  grandTotal: number;
};
