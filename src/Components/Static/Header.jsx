import React from "react";
import Logo from "../../assets/flexi-logo.png";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-sky-700 to-[#c3d3d2]">
      <div className="px-10 py-3 flex justify-between items-center">
        <div className="w-40 cursor-pointer">
          <img
            src={Logo}
            alt="FlexiCare Logo"
            className="w-full object-contain overflow-hidden "
          />
        </div>
        <ul className="flex gap-8 text-lg font-medium text-white">
            <Navigation text="Home"/>            
            <Navigation text="Services"/>            
            <Navigation text="Pharmacy"/>            
            <Navigation text="Contact Us"/>            
        </ul>
        <div className="flex gap-4">
            <Button text = "Sign Up"/>
            <Button text = "Sign In"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
