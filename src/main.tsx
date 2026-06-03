import { StrictMode } from "react";
import "./globals.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound.tsx";
import { Main } from "./pages/Main.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { saveCart } from "./store/shoppingCart.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
);

store.subscribe(() => {
  saveCart(store.getState().cart);
});
