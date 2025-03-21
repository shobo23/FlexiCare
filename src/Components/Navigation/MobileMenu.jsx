// import { useReducer } from "react";
// import { IoIosMenu } from "react-icons/io";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import MobileLogo from "../../assets/flexi-logo.png";
// import Button from "../Button/Button";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "changeState":
//       return { ...state, change: !state.change };

//     default:
//       break;
//   }
// };
// const MobileMenu = () => {
//   const Nav = useNavigate();
//   const [state, dispatch] = useReducer(reducer, { change: false });
//   return (
//     <>
//       <div className="hidden max-[768px]:block cursor-pointer w-full z-100 absolute bg-sky-700">
//         <div className="px-10 py-3.5">
//           <div onClick={() => dispatch({ type: "changeState" })}>
//             <div className="flex justify-between">
//               <div className="w-40 cursor-pointer">
//                 <img
//                   src={MobileLogo}
//                   alt="Logo"
//                   className="w-full object-contain overflow-hidden"
//                 />
//               </div>
//               <IoIosMenu className="size-10 text-[#C3D3D2]" />
//             </div>
//           </div>
//           <div
//             className={`hidden pt-6 px-10 max-[768px]:block transition-all duration-300 delay-150 fixed h-[100vh] bg-sky-700 w-full ${
//               state.change ? "left-0" : "-left-[-100rem]"
//             } bottom-0`}
//           >
//             <div className="flex flex-col justify-center items-center">
//               <div
//                 onClick={() => dispatch({ type: "changeState" })}
//                 className="cursor-pointer mb-5"
//               >
//                 <IoCloseCircleOutline className="text-white size-15 hover:text-red-600" />
//               </div>
//               <ul className="text-white text-3xl mb-5 flex flex-col gap-4 justify-center items-center">
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>How It Works</li>
//                 <li>Why Choose Us</li>
//                 <li>Registered Pharmacy</li>
//               </ul>
//               <div onClick={() => Nav('/GetStarted')}>
//                 <Button text="Get Started" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileMenu;


import { useReducer } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MobileLogo from "../../assets/flexi-logo.png";
import Button from "../Button/Button";

// Reducer function to toggle mobile menu
const reducer = (state, action) => {
  switch (action.type) {
    case "toggleMenu":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

const MobileMenu = () => {
  const Nav = useNavigate();
  const [state, dispatch] = useReducer(reducer, { isOpen: false });

  // Scroll function for smooth navigation
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      dispatch({ type: "toggleMenu" }); // Close menu after clicking
    }
  };

  return (
    <>
      {/* Mobile Menu Header */}
      <div className="hidden max-[768px]:block w-full fixed z-50 bg-sky-700">
        <div className="px-10 py-3.5 flex justify-between items-center">
          {/* Logo */}
          <div className="w-40 cursor-pointer" onClick={() => Nav("/")}>
            <img
              src={MobileLogo}
              alt="Logo"
              className="w-full object-contain overflow-hidden"
            />
          </div>
          {/* Open Menu Icon */}
          <IoIosMenu
            className="size-10 text-[#C3D3D2] cursor-pointer"
            onClick={() => dispatch({ type: "toggleMenu" })}
          />
        </div>

        {/* Mobile Menu (Overlay) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-sky-700 flex flex-col justify-center items-center text-white transition-transform duration-300 ${
            state.isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Menu Button */}
          <IoCloseCircleOutline
            className="size-12 hover:text-red-600 absolute top-5 right-5 cursor-pointer"
            onClick={() => dispatch({ type: "toggleMenu" })}
          />

          {/* Navigation Links */}
          <ul className="text-3xl mb-5 flex flex-col gap-6 text-center">
            <li className="cursor-pointer hover:text-[#C3D3D2]" onClick={() => handleScroll("hero")}>
              Home
            </li>
            <li className="cursor-pointer hover:text-[#C3D3D2]" onClick={() => handleScroll("about")}>
              About Us
            </li>
            <li className="cursor-pointer hover:text-[#C3D3D2]" onClick={() => handleScroll("services")}>
              How It Works
            </li>
            <li className="cursor-pointer hover:text-[#C3D3D2]" onClick={() => handleScroll("why-choose")}>
              Why Choose Us
            </li>
            <li className="cursor-pointer hover:text-[#C3D3D2]" onClick={() => handleScroll("pharmacies")}>
              Registered Pharmacy
            </li>
          </ul>

          {/* Get Started Button */}
          <div onClick={() => Nav("/GetStarted")}>
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
