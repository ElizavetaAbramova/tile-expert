import type { NavLink } from "../types/NavLink";

export const HEADER_LINKS: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About Us", href: "https://tile.expert/ru-us/docs/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Gallery", href: "https://www.instagram.com/tile.expert/" },
  { label: "Blog", href: "https://www.facebook.com/tile.expert" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Info", href: "https://tile.expert/ru-us/docs/payment" },
  { label: "Contact Us", href: "https://tile.expert/ru-us/contacts" },
];
