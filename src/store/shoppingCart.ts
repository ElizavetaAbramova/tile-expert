import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShoppingCart } from "../types/Cart";
import type { Item } from "../types/Item";
import { DEFAULT_OPTIONS } from "../constants/TileOptions";

const STORAGE_KEY = "shopping-cart";

export const defaultCart: ShoppingCart = {
  id: crypto.randomUUID(),
  items: DEFAULT_OPTIONS,
  subtotal: 0,
  shipping: 25,
  grandTotal: 25,
};

export const loadCart = (): ShoppingCart | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const saveCart = (cart: ShoppingCart) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

const calculateTotals = (cart: ShoppingCart) => {
  cart.subtotal = cart.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0,
  );

  cart.shipping = cart.subtotal >= 500 ? 0 : 25;

  cart.grandTotal = cart.subtotal + cart.shipping;
};

const cartSlice = createSlice({
  name: "cart",

  initialState: defaultCart,

  reducers: {
    initializeCart: (_, action: PayloadAction<ShoppingCart>) => {
      return action.payload;
    },

    addItem: (state, action: PayloadAction<Item>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      calculateTotals(state);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      calculateTotals(state);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        quantity: number;
      }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (!item) {
        return;
      }

      item.quantity = action.payload.quantity;

      calculateTotals(state);
    },

    clearCart: () => {
      return {
        ...defaultCart,
        id: crypto.randomUUID(),
      };
    },
  },
});

export const {
  initializeCart,
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
