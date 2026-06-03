import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { HEADER_LINKS, FOOTER_LINKS } from "./constants/NavigationLinks";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app flex flex-col min-h-screen justify-between">
      <Header navigationLinks={HEADER_LINKS} />
      <Outlet />
      <Footer navigationLinks={FOOTER_LINKS} />
    </div>
  );
}

export default App;
