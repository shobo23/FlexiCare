import React from 'react'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#C3D3D2]'>
      <form className=' w-[400px]'>
        <h1 className='font-bold text-3xl mb-[5px] text-[#012047]'>Patient Signup</h1>
        <p className='mb-[15px] text-[#5B6F8B]'>Enter your credentials and create your account.</p>
        <div>
            <label className='block text-[#012047]'>Phone</label>
            <input type="number" placeholder='(201) 555-0123' className='border border-gray-400 w-full rounded-[3px] p-[3px]'/>
        </div>
        <div>
            <label className='block text-[#012047]'>First Name</label>
            <input type="text"  className='border border-gray-400 w-full rounded-[3px] p-[3px]'/>
        </div>
        <div>
            <label className='block text-[#012047]'>Last Name</label>
            <input type="text" className='border border-gray-400 w-full rounded-[3px] p-[3px]'/>
        </div>
        <div>
            <label className='block text-[#012047]'>Email</label>
            <input type="email" className='border border-gray-400 w-full rounded-[3px] p-[3px]'/>
        </div>
        <div>
            <label className='block text-[#012047] m-[]'>Password</label>
            <input type="password" className='border border-gray-400 w-full rounded-[3px] p-[3px]'/>
        </div>
        <div className='flex items-center justify-center '>
            <input type="checkbox" />
            <p className='text-[12px] text-[#5B6F8B] m-[5px]'>I have read and agree to FlexiCare's <span className='text-[#012047]'>Terms of Service</span> and <span className='text-[#012047]'>Privacy Policy</span></p>
        </div>
        <button className='w-full bg-sky-700 text-white rounded-[10px] p-[3px] m-[5px]'>Register Now</button>
        <p className='text-center'>Already have an account? <span className='text-sky-700'>Login</span></p>
      </form>
    </div>
  )
}

export default SignUp
