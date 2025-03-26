import React from "react";
import Logo from "../assets/Asset_1-removebg-preview.png";
import ProfileImg from "../assets/strentind.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const DashboardHeader = () => {
  return (
    <>
      <header className="w-screen px-10 py-3 flex justify-between items-center  shadow top-0 z-50">
        <div className="flex gap-10">
          <div className="flex justify-center items-center gap-2 text-responsiveText">
            <div className="w-8">
              <img
                src={Logo}
                alt="Logo"
                className="size-full object-contain overflow-hidden"
              />
            </div>
            <span>FlexiCare</span>
          </div>
          <div className="flex w-60 justify-between items-center border border-gray-400 rounded-4xl px-1.5">
            <input
              type="text"
              placeholder="Search here"
              className="outline-none text-sm px-2.5 py-1 w-3/4 h-8"
            />
            <CiSearch size={20} />
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <IoMdNotificationsOutline size={28}/>
          <div className="size-10 rounded-full">
            <img
              src={ProfileImg}
              alt="Profile"
              className="size-full object-contain overflow-hidden rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
