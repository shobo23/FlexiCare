import React from "react";
import Logo from "../../assets/flexi-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  // Scroll function to navigate smoothly to sections
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-10 bg-[#c3d3d2] py-8">
      <div className="flex justify-between items-center flex-wrap">
        
        <div className="w-35 md:w-1/4">
          <img
            src={Logo}
            alt="FlexiCare"
            className="size-full object-cover overflow-hidden"
          />
        </div>

        <div className="w-full md:w-1/4 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3">
            <ul>
              <h3 className="mb-2 font-bold">Give us a Call</h3>
              <li><b>+234 810 657 5747</b> - Kelvin</li>
              <li><b>+234 808 395 1403</b> - Shobo</li>
            </ul>
            <ul>
              <h3 className="mb-2 font-bold">Send Us an Email</h3>
              <li>kelvincruise100@gmail.com</li>
              <li>shobomuhammed23@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col justify-center items-center">
          <h3 className="mb-2 font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll("home")}>Home</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll("about")}>About Us</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => handleScroll("services")}>Services</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 flex flex-col justify-center items-center">
          <h3 className="mb-2 font-bold">Follow Us</h3>
          <div className="flex gap-4">
            <a className="hover:text-blue-600" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className="hover:text-blue-600" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a className="hover:text-blue-600" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <h3 className="mt-4 font-bold">Legal</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Footer;
