import React from "react";
import { GoHome } from "react-icons/go";
import { RiHospitalLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Logo from '../assets/flexi-logo.png'
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const Nav = useNavigate()
  return (
    <aside className="w-63 text-white bg-sky-700 h-screen fixed">
      <ul className="flex py-5 pl-5 text-responsiveText flex-col w-full justify-center items-center">
        <li className="flex justify-center items-center mb-4.5 w-full cursor-pointer" onClick={() => Nav("/")}>
          <div className="w-25">
          <img src={Logo} alt="Logo" className="size-full object-contain overflow-hidden" />
          </div>
        </li>
        <li className="flex items-center gap-2 pl-3.5 rounded-l-full hover:bg-sky-500 w-full cursor-pointer py-2.5">
          <GoHome />
          <p>Dashboard</p>
        </li>
        <li className="flex items-center gap-2 pl-3.5 rounded-l-full hover:bg-sky-500 w-full cursor-pointer py-2.5">
        <RiHospitalLine />
          <p>Pharmacy</p>
        </li>
        <li className="flex items-center gap-2 pl-3.5 rounded-l-full hover:bg-sky-500 w-full cursor-pointer py-2.5">
        <FaRegUserCircle />
          <p>Users</p>
        </li>
        <li className="flex items-center gap-2 pl-3.5 rounded-l-full hover:bg-sky-500 w-full cursor-pointer py-2.5">
        <RiLogoutBoxLine />
          <p>Log Out</p>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
