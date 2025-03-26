import React from "react";
import { GoHome } from "react-icons/go";
import { RiHospitalLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

const SideBar = () => {
  return (
    <aside className="w-63 text-white bg-sky-700 h-screen fixed">
      <ul className="flex py-5 pl-5 text-responsiveText flex-col w-full justify-center items-center">
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
        <MdOutlineSettings />
          <p>Profile</p>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
