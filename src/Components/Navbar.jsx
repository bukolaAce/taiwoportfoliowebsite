/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// import { Fade } from "react-awesome-reveal";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./Logo";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import Contact from "./Contact";
const Navbar = () => {
  const navLinks = [
    { id: 1, path: "/", label: "HOME", Route: "#header" },
    { id: 2, path: "/about", label: "PROJECTS", Route: "#about" },
  ];

  const [openModal, closeModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    closeModal(!openModal);
  };

  return (
    <BrowserRouter>
      <div id="header"></div>
      <header className="py-5 md:py-5 sticky top-0 z-50  px-4 sm:px-10   font-[sans-serif]  w-full flex items-center mx-auto justify-center bg-[#0C151D]">
        <div className="relative flex flex-wrap items-center justify-center gap-5 bg-[#0C151D] md:w-1/2 w-full">
          {/* <Fade delay={8000} Fade> */}
          <ul id="collapseMenu" className="flex ">
            {navLinks.map((nav) => {
              return (
                <>
                  <li key={nav.id} className="px-3 max-lg:py-2 max-lg:rounded ">
                    <Link
                      key={nav.id}
                      to={nav.Route}
                      href="javascript:void(0)"
                      className="text-[#f0f0f0] block font-bold  text-sm md:text-xl"
                      smooth
                    >
                      {nav.label}
                    </Link>
                  </li>
                </>
              );
            })}

            <li
              onClick={handleModal}
              className="px-3 max-lg:py-2 max-lg:rounded"
            >
              <a
                className="text-[#f0f0f0] block font-bold  text-sm md:text-xl"
                href=""
              >
                CONTACT
              </a>
            </li>
          </ul>
          {/* </Fade> */}
        </div>
      </header>
      {openModal ? (
        <Contact openModal={openModal} handleModal={handleModal} />
      ) : null}
    </BrowserRouter>
  );
};

export default Navbar;
