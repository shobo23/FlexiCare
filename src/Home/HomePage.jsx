import React from "react";
import Header from "../Components/Static/Header";
import HeroPage from "../Pages/HeroPage";
import MobileMenu from "../Components/Navigation/MobileMenu";
import HowItWorks from "../Pages/Services";
import WhyChooseUs from "../Pages/WhatWedo";
import RegisteredPharmacy from "../Pages/RegisteredPharmacy";
import AboutUs from "../Pages/AboutUs";
import Footer from "../Components/Static/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MobileMenu />
      <HeroPage />
      <AboutUs />
      <HowItWorks />
      <WhyChooseUs />
      <RegisteredPharmacy />
      <Footer />
    </div>
  );
};

export default HomePage;
