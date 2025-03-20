import { useReducer } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MobileLogo from "../../assets/flexi-logo.png";
import Button from "../Button/Button";
const reducer = (state, action) => {
  switch (action.type) {
    case "changeState":
      return { ...state, change: !state.change };

    default:
      break;
  }
};
const MobileMenu = () => {
  const Nav = useNavigate();
  const [state, dispatch] = useReducer(reducer, { change: false });
  return (
    <>
      <div className="hidden max-[768px]:block cursor-pointer w-full z-100 absolute bg-sky-700">
        <div className="px-10 py-3.5">
          <div onClick={() => dispatch({ type: "changeState" })}>
            <div className="flex justify-between">
              <div className="w-40 cursor-pointer">
                <img
                  src={MobileLogo}
                  alt="Logo"
                  className="w-full object-contain overflow-hidden"
                />
              </div>
              <IoIosMenu className="size-10 text-[#C3D3D2]" />
            </div>
          </div>
          <div
            className={`hidden pt-6 px-10 max-[768px]:block transition-all duration-300 delay-150 fixed h-[100vh] bg-sky-700 w-full ${
              state.change ? "left-0" : "-left-[-100rem]"
            } bottom-0`}
          >
            <div className="flex flex-col justify-center items-center">
              <div
                onClick={() => dispatch({ type: "changeState" })}
                className="cursor-pointer mb-5"
              >
                <IoCloseCircleOutline className="text-white size-15 hover:text-red-600" />
              </div>
              <ul className="text-white text-3xl mb-5 flex flex-col gap-4 justify-center items-center">
                <li>Home</li>
                <li>About Us</li>
                <li>How It Works</li>
                <li>Why Choose Us</li>
                <li>Registered Pharmacy</li>
              </ul>
              <div onClick={() => Nav('/GetStarted')}>
                <Button text="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
