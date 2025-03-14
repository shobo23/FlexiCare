import React from "react";
import Logo from "../../assets/flexi-logo.png";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Nav = useNavigate();
  return (
    <>
      <header className="w-full bg-sky-700 max-[786px]:hidden">
        <div className="px-10 py-4 flex justify-between items-center">
          <div className="w-35 cursor-pointer" onClick={() => Nav("/")}>
            <img
              src={Logo}
              alt="FlexiCare Logo"
              className="w-full object-contain overflow-hidden "
            />
          </div>
          <ul className="flex gap-8 text-lg font-medium text-white">
            <div onClick={() => Nav("/")}>
              <Navigation text="Home" />
            </div>
            <div>
              <Navigation text="Services" />
            </div>
            <div>
              <Navigation text="Pharmacy" />
            </div>
            <div>
              <Navigation text="Contact Us" />
            </div>
          </ul>
          <div className="flex gap-4">
            <Button text="Get Started" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
