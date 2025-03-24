import React from 'react'
import Pic from '../assets/checkEmail/40834-removebg-preview.png'

const VerifyEmail = () => {
  return (
    <>
        <div className='w-screen h-screen bg-[#fdfdfd] text-responsiveText flex justify-center items-center'>
          <div className='min-[1024px]:w-[60vw] text-center p-10 bg-white shadow-md flex flex-col justify-center items-center'>
          <div className='size-40 mb-4 flex flex-col justify-center items-center'>
            <img src={Pic} alt="Check Your email illustration" className='size-full object-contain overflow-hidden' />
          </div>
          <div className='flex gap-3 flex-col justify-center items-center'>
            <h1 className='text-4xl'>Check Your Email</h1>
            <h3 className='text-2xl'>A verification email has been sent to your inbox. Please check your email to verify your account.</h3>
            <p className='text-lg'>If you don't see it, check your spam folder or try resending the verification email.</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default VerifyEmail