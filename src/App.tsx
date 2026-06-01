import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { UserBadge } from "./components/UserBadge";
import { HEADER_LINKS, FOOTER_LINKS } from "./constants/NavigationLinks";
import { CartBadge } from "./components/CartBadge";
import { Footer } from "./components/Footer";

function App() {
  const state = {
    user: { name: "John", surname: "Doe" },
    cart: { amountOfItems: 10 },
  };

  return (
    <div className="app flex flex-col min-h-screen justify-between">
      <Header navigationLinks={HEADER_LINKS}>
        <div className="flex gap-5">
          <CartBadge amountOfItems={state.cart.amountOfItems} />
          <UserBadge name={state.user.name} surname={state.user.surname} />
        </div>
      </Header>
      <Outlet />
      <Footer navigationLinks={FOOTER_LINKS} />
    </div>
  );
}

export default App;
