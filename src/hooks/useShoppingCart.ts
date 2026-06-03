import { useAppDispatch } from "../store/hooks";
import {
  addItem,
  removeItem,
  clearCart,
  updateQuantity,
} from "../store/shoppingCart";

import type { Item } from "../types/Item";

export const useCart = () => {
  const dispatch = useAppDispatch();

  return {
    addToCart: (item: Item) => dispatch(addItem(item)),

    removeFromCart: (id: string) => dispatch(removeItem(id)),

    changeQuantity: (id: string, quantity: number) =>
      dispatch(
        updateQuantity({
          id,
          quantity,
        }),
      ),

    clearCart: () => dispatch(clearCart()),
  };
};
