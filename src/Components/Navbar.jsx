import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

import Contact from "./Contact";

const navLinks = [
  { id: 1, label: "home", route: "#header" },
  { id: 2, label: "projects", route: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleModal = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    setOpenModal((v) => !v);
  };

  return (
    <>
      <div id="header" />
      <header
        className={`sticky top-0 z-50 w-full font-mono transition-colors duration-300 ${
          scrolled
            ? "border-b border-[#1C2531] bg-[#0A0E14]/90 backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-5xl px-4 py-4 mx-auto sm:px-10">
          {/* logo / prompt */}
          <Link
            to="#header"
            smooth
            className="text-sm text-[#E6EDF3] transition-colors hover:text-[#7EE0C3] sm:text-base"
          >
            <span className="text-[#7EE0C3]">devtee</span>
            <span className="text-[#5B6472]">@portfolio ~ $</span>
          </Link>

          {/* desktop links */}
          <ul className="items-center hidden gap-8 text-sm md:flex">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  to={nav.route}
                  smooth
                  className="group relative text-[#9DA7B3] transition-colors hover:text-[#E6EDF3]"
                >
                  ./{nav.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7EE0C3] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleModal}
                className="rounded-lg border border-[#7EE0C3]/40 bg-[#7EE0C3]/10 px-4 py-2 text-[#7EE0C3] transition-colors hover:bg-[#7EE0C3]/20"
              >
                ./contact
              </button>
            </li>
          </ul>

          {/* mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-[#E6EDF3] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose className="w-6 h-6" /> : <IoIosMenu className="w-6 h-6" />}
          </button>
        </nav>

        {/* mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-[#1C2531] bg-[#0A0E14] md:hidden"
            >
              {navLinks.map((nav) => (
                <li key={nav.id} className="border-b border-[#1C2531]">
                  <Link
                    to={nav.route}
                    smooth
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-4 text-sm text-[#9DA7B3] hover:text-[#E6EDF3]"
                  >
                    ./{nav.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleModal}
                  className="block w-full px-6 py-4 text-left text-sm text-[#7EE0C3]"
                >
                  ./contact
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>

      {openModal && <Contact openModal={openModal} handleModal={handleModal} />}
    </>
  );
};

export default Navbar;