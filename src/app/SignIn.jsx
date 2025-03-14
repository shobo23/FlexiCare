import React from 'react'

const SignIn = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#C3D3D2]'>
      <form className='w-[400px]'>
        <h1 className='text-3xl font-bold text-[#012047] mb-[10px]'>Patient Signin</h1>
        <p className='text-[#5B6F8B]'>Sign in with email.</p>
        <div>
            <label className='block mb-[5px]'>Email:</label>
            <input type="email" className='border rounded-[3px] border-gray-400 p-[3px] w-full' />
        </div>
        <div>
            <label className='block mb-[5px]'>Password:</label>
            <input type="password" className='border rounded-[3px] border-gray-400 p-[3px] mb-[15px] w-full' />
        </div>
        <button className='w-full text-white bg-sky-700 p-[3px] rounded-[10px] mb-[10px]'>Login</button>
        <div className='flex justify-end'>
        <p className='justify-end'>Forgot password? Click <a href="#" className='text-sky-900'>here</a></p>
        </div>
      </form>
    </div>
  )
}

export default SignIn
