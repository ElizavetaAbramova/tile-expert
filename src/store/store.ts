import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCart";
import userReducer from "./user";
import designerReducer from "./designerGrid";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    designer: designerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
