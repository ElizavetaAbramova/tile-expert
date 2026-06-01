import { useIsMobile } from "../hooks/useIsMobile";
import type { NavLink } from "../types/NavLink";
import { Link } from "./Link";

interface HeaderProps {
  navigationLinks: NavLink[];
  children?: React.ReactNode;
}

export const Header = ({ navigationLinks, children }: HeaderProps) => {
  const isMobile = useIsMobile();
  const formattedLinks = isMobile
    ? navigationLinks.slice(0, 3)
    : navigationLinks;

  return (
    <header className="bg-parchment-200 flex justify-between py-2 px-1 md:px-5 items-center border-2 border-ink-400 rounded-t-lg">
      <img
        src="src/assets/Logo.png"
        alt="Tile Expert Logo"
        className="h-5"
        onClick={() => (window.location.href = "/")}
      />
      <nav className="flex md:gap-5 gap-2">
        {formattedLinks.map(({ label, href }) => (
          <Link key={href} href={href} label={label} />
        ))}
      </nav>
      {children}
    </header>
  );
};
