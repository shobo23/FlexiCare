import React from "react";

const Navigation = ({text}) => {
  return (
    <p class="text-lg group relative w-max cursor-pointer">
      <span>{text}</span>
      <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
      <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
    </p>
  );
};

export default Navigation;
