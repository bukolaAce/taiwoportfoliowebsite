import { HashLink as Link } from "react-router-hash-link";
import { IoArrowUp } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1C2531] bg-[#0A0E14] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-xs text-[#5B6472] sm:flex-row">
        <span>© {year} DevTee. All rights reserved.</span>

        <Link
          to="#header"
          smooth
          className="flex items-center gap-1.5 text-[#5B6472] transition-colors hover:text-[#7EE0C3]"
        >
          back to top
          <IoArrowUp className="h-3.5 w-3.5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;