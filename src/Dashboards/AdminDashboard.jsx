// import { useState } from "react";
// import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
// import Logo from '../assets/flexi-logo.png'

// const AdminDashboard = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="flex w-screen h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-50 bg-sky-700 text-white shadow-md">
//         <div className="py-5 w-full flex justify-center items-center">
//         <div className="w-30">
//           <img src={Logo} alt="Logo" className="size-full object-contain overflow-hidden"/>
//         </div>
//         </div>
//         <nav className="">
//           <ul className="space-y-2">
//             <li
//               className={`p-3 flex items-center space-x-2 cursor-pointer ${
//                 active === "Dashboard" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
//               }`}
//               onClick={() => setActive("Dashboard")}
//             >
//               <FiHome />
//               <span>Dashboard</span>
//             </li>
//             <li
//               className={`p-3 flex items-center space-x-2 cursor-pointer ${
//                 active === "Users" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
//               }`}
//               onClick={() => setActive("Users")}
//             >
//               <FiUser />
//               <span>Users</span>
//             </li>
//             <li
//               className={`p-3 flex items-center space-x-2 cursor-pointer ${
//                 active === "Settings" ? "bg-sky-500 text-white" : "hover:bg-gray-200"
//               }`}
//               onClick={() => setActive("Settings")}
//             >
//               <FiSettings />
//               <span>Settings</span>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-5">
//         <h1 className="text-2xl font-bold">Welcome to {active}</h1>
//         <p className="text-gray-600 mt-2">This is the {active} section.</p>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from 'react'
import DashboardHeader from './DashboardHeader'
import SideBar from './SideBar'
import DashboardContent from './DashboardContent'

const AdminDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <SideBar />
      <DashboardContent />
    </div>
  )
}

export default AdminDashboard