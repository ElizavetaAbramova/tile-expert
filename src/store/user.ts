import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/User";

const STORAGE_KEY = "user";

export const defaultUser: User = {
  id: crypto.randomUUID(),
  name: "John",
  surname: "Doe",
};

export const loadUser = (): User | null => {
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

export const saveUser = (user: User) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

const userSlice = createSlice({
  name: "user",

  initialState: defaultUser,

  reducers: {
    initializeUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },

    updateCredentials: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        surname: string;
      }>,
    ) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
  },
});

export const { initializeUser, updateCredentials } = userSlice.actions;

export default userSlice.reducer;
