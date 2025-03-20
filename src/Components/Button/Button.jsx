import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#C3D3D2] rounded hover:bg-white group py-1.5 px-2.5 cursor-pointer border border-[#C3D3D2]">
        <span class="w-56 h-48 rounded bg-sky-700 absolute bottom-0 left-0 translate-x-full ease-out duration-400 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span class="relative w-full text-[17px] text-left text-sky-700 transition-colors duration-400 ease-in-out group-hover:text-white">
          {text}
        </span>
      </button>
    </>
  );
};

export default Button;
