import React from "react";
import HeroImg from "../assets/DALL·E 2025-03-12 00.17.58 - A modern, flat-style illustration depicting a Black doctor consulting a Black family. The doctor, dressed in a white coat, is holding a clipboard and .webp";
import OutlineBtn from "../Components/Button/OutlineBtn";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
    const Nav = useNavigate()
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center bg-[#c3d3d2]">
        <div className="px-10 grid items-center justify-center lg:grid-cols-2 max-[786px]:grid-cols-1 gap-15">
          <div className="w-full">
            <h1 className="text-titleText lg:leading-14 text-6xl mb-5 font-semibold text-[#0069A8]">
              Healthcare Made Simple, Affordable & Accessible
            </h1>
            <p className="text-[18px] mb-2">
              Allowing users to consult pharmacy, order medicines, and book lab
              tests anytime, without the need for expensive insurance or long
              clinic visits.
            </p>
            <p className="w-full flex justify-end font-medium text-[#E45E32]">
              <i>...all in one place</i>
            </p>
            <div className="flex gap-3 max-[786px]:justify-center max-[786px]:mt-5">
                <OutlineBtn text="Consult a Pharmacy"/>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="w-full">
              <img
                src={HeroImg}
                alt="Hero illustrator"
                className="w-full object-contain overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
