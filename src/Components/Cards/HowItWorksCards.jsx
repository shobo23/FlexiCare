import React from "react";

const HowItWorksCards = ({ topText, img, smallText }) => {
  return (
    <>
      <div className="bg-[#C3D3D2] rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-5">
        <div className="w-60 rounded-lg">
          <img
            src={img}
            alt="Could render Image"
            className="w-full object-contain overflow-hidden rounded-lg"
          />
        </div>

        <div className="text-lg">
          <p>{topText}</p>
        </div>

        <div className="text-center text-[#242424] text-[14px]">
          <p>{smallText}</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorksCards;
