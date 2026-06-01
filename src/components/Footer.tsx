import { useIsMobile } from "../hooks/useIsMobile";
import type { NavLink } from "../types/NavLink";
import { Link } from "./Link";

interface FooterProps {
  navigationLinks: NavLink[];
  children?: React.ReactNode;
}

export const Footer = ({ navigationLinks, children }: FooterProps) => {
  const isMobile = useIsMobile();
  return (
    <footer className="footer text-start md:text-center p-2 md:p-4 font-heading uppercase text-xs md:text-xs bg-parchment-100 gap-2 flex flex-col">
      <nav className="flex gap-2 w-full justify-center md:flex-row flex-col">
        {navigationLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            label={link.label}
            separator={!isMobile && index < navigationLinks.length - 1}
          />
        ))}
      </nav>
      <p className="text-[8px] md:text-xs text-center">
        &copy; 2026 THE ARTISAN KILN. All rights reserved.
      </p>
      {children}
    </footer>
  );
};
