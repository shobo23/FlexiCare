import React from "react";
import Logo from "../../assets/flexi-logo.png";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Nav = useNavigate();

  // Scroll function to navigate smoothly to sections
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="w-full max-[786px]:hidden bg-sky-700 fixed top-0 z-50 shadow-md">
        <div className="px-10 py-4 flex justify-between items-center">
          {/* Logo - Navigates to Home */}
          <div className="w-35 cursor-pointer" onClick={() => Nav("/")}>
            <img
              src={Logo}
              alt="FlexiCare Logo"
              className="w-full object-contain overflow-hidden"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-center items-center gap-8 text-lg font-medium text-white">
            <div
              className="cursor-pointer"
              onClick={() => handleScroll("hero")}
            >
              <Navigation text="Home" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScroll("about")}
            >
              <Navigation text="About Us" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScroll("services")}
            >
              <Navigation text="Services" />
            </div>
            <div className="cursor-pointer" onClick={() => handleScroll("aim")}>
              <Navigation text="Our Aim" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleScroll("pharmacies")}
            >
              <Navigation text="Pharmacies" />
            </div>

            {/* Get Started Button - Navigates to Another Page */}
            <div
              className="flex justify-center items-center w-full h-full"
              onClick={() => Nav("/getstarted")}
            >
              <Button text="Get Started" />
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
