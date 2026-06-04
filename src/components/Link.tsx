interface LinkProps {
  href: string;
  label: string;
  separator?: boolean;
}

export const Link = ({ href, label, separator }: LinkProps) => {
  const separatorClass = separator
    ? "relative pr-3 after:absolute after:right-0 after:top-1/2 after:h-4 after:w-px after:-translate-y-1/2 after:bg-ink-400 after:content-['']"
    : "";

  return (
    <a
      key={label}
      href={href}
      className={`font-heading md:hover:text-terracotta-600 transition-colors duration-300 text-xs md:text-xl ${separatorClass}`}
    >
      {label.toUpperCase()}
    </a>
  );
};
