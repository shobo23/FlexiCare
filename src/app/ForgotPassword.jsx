import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const Nav = useNavigate()
  return (
    <div className='flex justify-center items-center bg-[#C3D3D2] h-[100vh]'>
      <form className='w-[400px]'>
        <h1 className='font-bold text-3xl text-[#012047] mb-[10px]'>Forgot Password</h1>
        <p className='text-[#5B6F8B]'>Enter your email and we will send you link to reset your password.</p>
        <div>
            <label className='block mb-[5px]'>Email:</label>
            <input type="email" className='border border-gray-400 w-full rounded-[3px] p-[3px] mb-[15px]'/>
        </div>
        <button className='w-full rounded-[10px] bg-sky-700 text-white p-[3px] mb-[10px]'>Submit</button>
        <div className='text-center'>
            <p>Remember Password? <span onClick={() => Nav('/login')} className='text-sky-700 cursor-pointer'>Sign In</span></p>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
