// import React from 'react'
// import Button from '../Components/Button/Button'
// import { useNavigate } from 'react-router-dom'

// const Verification = () => {
//   const Nav = useNavigate()
//   return (
//     <>
//         <div className='p-10 w-screen h-screen flex flex-col justify-center items-center gap-3'>
//             <h1 className='text-responsiveText text-center'>Email has been verified</h1>
//             <div onClick={() => Nav('/login')}>
//             <Button text="Login account"/>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Verification

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import axios from "axios";

const Verification = () => {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `https://flexi-care.vercel.app/verify/${token}`
        );
        // const data = await response.json();
        console.log(response.data);
        // if (response.ok) {
        setMessage("Email has been verified successfully!");
        // }
      } catch (error) {
        // setMessage('An error occurred. Please try again.');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="p-10 w-screen h-screen flex flex-col justify-center items-center gap-3">
      {loading ? (
        <p className="text-responsiveText text-center">Verifying...</p>
      ) : (
        <>
          <h1 className="text-responsiveText text-center">{message}</h1>
          <div onClick={() => navigate("/login")}>
            <Button text="Login Account" />
          </div>
        </>
      )}
    </div>
  );
};

export default Verification;
