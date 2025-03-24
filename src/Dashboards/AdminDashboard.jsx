import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const AdminDashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex w-screen h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-5 text-center font-bold text-xl text-sky-600">Admin Panel</div>
        <nav className="mt-5">
          <ul className="space-y-2">
            <li
              className={`p-3 flex items-center space-x-2 cursor-pointer ${
                active === "Dashboard" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActive("Dashboard")}
            >
              <FiHome />
              <span>Dashboard</span>
            </li>
            <li
              className={`p-3 flex items-center space-x-2 cursor-pointer ${
                active === "Users" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActive("Users")}
            >
              <FiUser />
              <span>Users</span>
            </li>
            <li
              className={`p-3 flex items-center space-x-2 cursor-pointer ${
                active === "Settings" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setActive("Settings")}
            >
              <FiSettings />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-5 w-full">
          <button className="w-full p-3 flex items-center justify-center space-x-2 bg-red-500 text-white hover:bg-red-600">
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold">Welcome to {active}</h1>
        <p className="text-gray-600 mt-2">This is the {active} section.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
