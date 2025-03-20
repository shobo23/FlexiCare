import React from "react";
import Button from "../Components/Button/Button";

const OurAim = () => {
  return (
    <>
      <div className="p-10 w-full bg-gradient-to-l from-sky-700 to-[#C3D3D2]">
        <div>
          <h1 className="text-5xl text-[#051F36] mb-5 max-[786px]:text-center max-[786px]:text-3xl">Our Aim</h1>
        </div>
        <div className="grid grid-cols-2 max-[786px]:grid-cols-1 max-[786px]:gap-5 place-items-center place-content-center">
          <p className="max-[786px]:text-center text-responsiveText">We bridges the gap between traditional healthcare and digital convenience. Users get affordable, fast, and flexible healthcare options without the hassle of long wait times and expensive plans.</p>
          <div className="flex justify-center items-center">
          <Button text="Check Out Pharmacies"/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default OurAim;
