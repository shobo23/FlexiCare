import React from 'react';
import HowItWorksCards from '../Components/Cards/HowItWorksCards';
import findDoc from '../assets/howItWorksImg/findDoctor.webp';
import consultDoc from '../assets/howItWorksImg/consultation.webp';
import delivery from '../assets/howItWorksImg/delivery.webp';
import schduleApp from '../assets/howItWorksImg/schedule.webp';

const Services = () => {
  return (
    <>
      <div id="services" className='py-10 bg-[#fffefe] px-10 flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center items-center pb-5'>
          <h1 className='text-4xl text-[#051F36]'>Services</h1>
        </div>
        <div className='grid gap-10 max-[786px]:gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
          <HowItWorksCards topText="Find a Pharmacy" img={findDoc} smallText="Choose from our network of specialists"/>
          <HowItWorksCards topText="Book a Consultation" img={consultDoc} smallText="Talk to a Pharmacist online"/>
          <HowItWorksCards topText="Get Medication" img={delivery} smallText="Order prescriptions with home delivery"/>
          <HowItWorksCards topText="Schedule Lab Tests" img={schduleApp} smallText="Get tested without long hospital queues"/>
        </div>
      </div>
    </>
  );
};

export default Services;
