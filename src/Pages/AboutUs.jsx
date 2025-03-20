import React from "react";
import Pic from "../assets/about/aboutImage2.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="p-10 bg-[#fffefe] flex flex-col justify-center items-center">
      <h1 className="text-4xl text-[#051F36] mb-5 max-[786px]:text-center max-[786px]:text-3xl">
        About Us
      </h1>
      <div className="w-full grid place-content-between place-items-center gap-10 min-[1024px]:grid-cols-2 max-[786px]:grid-cols-1">
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-amber-300 rounded-lg">
            <img
              className="size-full object-contain overflow-hidden rounded-lg"
              src={Pic}
              alt="A pic of a Pharmacist"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 max-[786px]:text-center text-responsiveText">
          <p>
            At <b className="text-[#051F36]">Flexicare</b>, we believe that
            healthcare should be accessible, affordable, and efficient for
            everyone. Our mission is to bridge the gap between patients,
            healthcare providers, and pharmacies through a technology-driven
            platform that ensures seamless medical services.
          </p>
          <p>
            We believe that quality healthcare should be within everyone's
            reach, regardless of location, financial status, or lifestyle. By
            harnessing the power of technology, we eliminate traditional
            barriers to healthcare, making it more accessible, efficient, and
            affordable. Through virtual consultations and pharmacy integrations, we
            empower individuals to take control of their health without the
            limitations of long wait times, high costs, or geographical
            restrictions. Join us in shaping a future where healthcare is
            smarter, easier, and available to all—whenever and wherever it's
            needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
