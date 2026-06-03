import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCart";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // patternBuilder: patternBuilderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
