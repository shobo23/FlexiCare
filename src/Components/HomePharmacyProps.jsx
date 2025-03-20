import React from "react";

const HomePharmacyProps = ({ image, imageText, description, overlayColor }) => {
  return (
    <div className="relative group size-100 cursor-pointer overflow-hidden rounded-lg">
      <img
        src={image}
        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
        alt="Image couldn't render"
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ backgroundColor: overlayColor || "rgba(85, 128, 168, 0.6)" }} 
      >
        <h3 className="text-lg font-bold">{imageText}</h3>
        <p className="text-sm">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-l from-sky-700 to-[#C3D3D2] text-white text-center py-2 text- font-bold group-hover:opacity-50 transition-opacity duration-300">
        {imageText}
      </div>
    </div>
  );
};

export default HomePharmacyProps;
