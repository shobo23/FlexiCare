import React from "react";
import HomePharmacyProps from "../Components/HomePharmacyProps";
import Pic1 from "../assets/LandPharmacy/land-pharmacyImg-1.jpg";
import Pic2 from "../assets/LandPharmacy/Order prescriptions.jpg";
import Pic3 from "../assets/LandPharmacy/fast delivery.jpg";
import Button from "../Components/Button/Button";

const RegisteredPharmacy = () => {
  return (
    <>
      <div id="pharmacies" className="p-10 bg-[#fffefe] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-[#051F36] mb-5 max-[786px]:text-center max-[786px]:text-3xl">
          Pharmacies
        </h1>
        <div className="grid gap-10 w-full place-items-center place-content-center max-[786px]:gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <HomePharmacyProps image={Pic1} imageText="Licensed Pharmacies" description="Browse a list of licensed pharmacies near you."/>
          <HomePharmacyProps image={Pic2} imageText="Order prescriptions" description="Order prescriptions and over-the-counter drugs with ease."/>
          <HomePharmacyProps image={Pic3} imageText="Fast delivery" description="Get fast delivery or pick up from a nearby location."/>
        </div>
        <div className="mt-5">
          <Button text="Find a Pharmacy" />
        </div>
      </div>
    </>
  );
};

export default RegisteredPharmacy;
