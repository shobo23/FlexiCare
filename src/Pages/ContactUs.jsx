import React from "react";
import AboutUsCard from "../Components/AboutUs";
import { FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="p-10 bg-[#fffefe] flex flex-col justify-center items-center">
      <h1 className="text-4xl text-[#051F36] mb-5 max-[786px]:text-center max-[786px]:text-3xl">
        Contact Us
      </h1>
      <div className="grid lg:grid-cols-2 max-[786px]:grid-cols-1">
        <div className="w-full">
          <div>
          <h3>Get In Touch</h3>
          <h2>Have Any Question?</h2>
          </div>
          <div>
            <AboutUsCard icon={<FaPhone />} bigText="
Phone Number" smallText="
+234 808 395 1403"/>
          </div>
        </div>
        <form className="w-full">form start here</form>
      </div>
    </div>
  );
};

export default ContactUs;
