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

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Components/Button/Button';

const Verification = () => {
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`https://flexi-care.vercel.app/verify/${token}`, {
          method: 'GET',
        });
        const data = await response.json();

        if (response.ok) {
          setMessage('Email has been verified successfully!');
        } else {
          setMessage(data.message || 'Invalid or expired token.');
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
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
          <div onClick={() => navigate('/login')}>
            <Button text="Login Account" />
          </div>
        </>
      )}
    </div>
  );
};

export default Verification;
