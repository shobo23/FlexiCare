import React from "react";
import Pic  from "../../assets/getStarted/getSrarted.webp"
import Logo from "../../assets/flexi-logo.png"
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const GetStarted = () => {
  const Nav = useNavigate()
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="p-10 w-full h-full flex flex-col justify-center items-center bg-white max-[786px]:hidden">
        <div className="flex justify-start w-full">
        <IoChevronBackCircleOutline className="size-10 text-sky-700 cursor-pointer hover:text-[#E45E32]" onClick={() => Nav('/')}/>
        </div>
          <div className="w-150">
          <img src={Pic} alt="Counld'nt render image" className="w-full object-contain overflow-hidden"/>
          </div>
        </div>

        <div className="w-full h-full p-10 min-[1020px]:text-lg max-[786px]:text-[18px] flex flex-col justify-center min-[800px]:gap-4 items-center bg-sky-700">
        <div className="flex justify-start w-full">
        <IoChevronBackCircleOutline className="size-10 text-white min-[786px]:hidden cursor-pointer hover:text-[#E45E32]" onClick={() => Nav('/')}/>
        </div>
          <div className="w-35 mt-10">
            <img src={Logo} alt="Logo" className="w-full object-contain overflow-hidden"/>
          </div>
          <div className="text-center max-[786px]:my-2 text-white">
          <p>Sign up as Pharmacy to see who needs your services.</p>
          <p>Sign up as Patient to see Pharmacy close to you and consult them.</p>
          </div>
          <div className="grid grid-cols-2 max-[786px]:grid-cols-1 justify-center items-center gap-3">
            <div className="max-[786px]:w-full max-[786px]:my-2 max-[786px]:flex max-[786px]:justify-center max-[786px]:item-center">
            <Button text="Sign Up As Pharmacy"/>
            </div>
            <div className="max-[786px]:w-full max-[786px]:flex max-[786px]:justify-center max-[786px]:item-center" onClick={() => Nav('/signUp')}>
            <Button text="Sign Up As Patient"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
