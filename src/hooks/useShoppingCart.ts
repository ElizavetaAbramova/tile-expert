import { useEffect, useState } from "react";

export const useShoppingCart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("shoppingCart");
    if (storedItems) {
      // setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  }, [items]);

  return { items, setItems };
};
