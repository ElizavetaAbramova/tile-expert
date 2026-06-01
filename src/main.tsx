import { StrictMode } from "react";
import "./globals.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound.tsx";
import { Main } from "./pages/Main.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
