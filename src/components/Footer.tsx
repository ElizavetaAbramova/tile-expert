import { useIsMobile } from "../hooks/useIsMobile";
import type { NavLink } from "../types/NavLink";
import { Link } from "./Link";
import bgImageBL from "../assets/angle-bl.png";
import bgImageBR from "../assets/angle-br.png";

interface FooterProps {
  navigationLinks: NavLink[];
}

export const Footer = ({ navigationLinks }: FooterProps) => {
  const isMobile = useIsMobile();
  return (
    <footer className="footer text-start md:text-center p-2 md:p-4 font-heading uppercase text-xs md:text-xs bg-parchment-100 gap-2 flex flex-col relative">
      <nav className="flex gap-2 w-full justify-center md:flex-row flex-col z-10">
        {navigationLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            label={link.label}
            separator={!isMobile && index < navigationLinks.length - 1}
          />
        ))}
      </nav>
      <p className="text-[8px] md:text-xs text-center z-10">
        &copy; 2026 THE ARTISAN KILN. All rights reserved.
      </p>
      {!isMobile && (
        <>
          <img src={bgImageBL} className="absolute bottom-0 left-0" />
          <img src={bgImageBR} className="absolute bottom-0 right-0" />
        </>
      )}
    </footer>
  );
};
