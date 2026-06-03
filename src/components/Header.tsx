import { useIsMobile } from "../hooks/useIsMobile";
import type { NavLink } from "../types/NavLink";
import { Link } from "./Link";
import { CartBadge } from "./CartBadge";
import { UserBadge } from "./UserBadge";
import { useAppSelector } from "../store/hooks";

interface HeaderProps {
  navigationLinks: NavLink[];
}

export const Header = ({ navigationLinks }: HeaderProps) => {
  const { name, surname } = useAppSelector((state) => state.user);
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
      <div className="flex gap-5">
        <CartBadge />
        <UserBadge name={name} surname={surname} />
      </div>
    </header>
  );
};
