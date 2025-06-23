import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Hamburger from "../assets/iconhamburger.svg";
import HamburgerBiru from "../assets/iconhamburgerbiru.svg";
import IconCloseBiru from "../assets/iconclosebiru.svg";
import IconClose from "../assets/iconclose.svg";

const navItems = ["About", "Services", "Works", "Career"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;
      //visibility when scroll
      if (currentScrollState > scrollPosition && currentScrollState > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScrollState);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed inset-0 top-0 h-20 flex items-center justify-center z-50 transition-all duration-700 
       ${isVisible ? "translate-y-0" : "-translate-y-full"}
       ${scrollPosition > 10 ? "bg-white opacity-95 shadow-sm" : "bg-transparent"}`}
    >
      <header className="relative flex h-full w-full ">
        <nav className="flex size-full items-center justify-between px-4 md:px-30">
          <img
            loading="lazy"
            src={`${scrollPosition ? "/src/assets/bluelogo.svg" : "/src/assets/logoputih.svg"}`}
            className="cursor-pointer"
          />
          {/* Dekstop Nav */}
          <div className="flex items-center  ">
            <div className="hidden md:block">
              {navItems.map((items, i) => (
                <a
                  key={i}
                  className={`cursor-pointer py-2 px-6 text-base ${scrollPosition ? "text-primary" : "text-white"} leading-[150%] hover:text-primary/60 ease-in-out transition-all duration-200 hover:border-b-2 hover:border-b-primary`}
                >
                  {items}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <Button
                paddingx="px-6"
                title="Let's Talk"
                icon="/src/assets/arrow.svg"
                bgcolor="bg-primary"
                textcolor="text-white"
              />
            </div>
          </div>
          {/* Mobile Nav*/}
          <div className="block sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img
                loading="lazy"
                src={`${!menuOpen ? `${scrollPosition ? `${HamburgerBiru}` : `${Hamburger}`}` : `${scrollPosition ? `${IconCloseBiru}` : `${IconClose}`}`}`}
                className="object-cover size-6"
              />
            </button>
            {menuOpen && (
              <div className="absolute inset-0 flex bg-white top-15 w-full px-5 h-fit py-10 rounded-b-xl">
                <div className="flex flex-col w-full gap-5">
                  {navItems.map((items, i) => (
                    <a
                      key={i}
                      className={`font-inter ${scrollPosition ? "text-primary" : "text-primary"} text-lg leading-[130%] tracking-lg w-full hover:text-blue-400`}
                    >
                      {items}
                    </a>
                  ))}

                  <Button
                    paddingx="w-full"
                    title="Let's Talk"
                    icon="/src/assets/arrow.svg"
                    bgcolor="bg-primary"
                    textcolor="text-white"
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
