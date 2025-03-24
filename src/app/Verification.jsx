import React from 'react'
import Button from '../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Verification = () => {
  const Nav = useNavigate()
  return (
    <>
        <div className='p-10 w-screen h-screen flex flex-col justify-center items-center gap-3'>
            <h1 className='text-responsiveText text-center'>Email has been verified</h1>
            <div onClick={() => Nav('/login')}>
            <Button text="Login account"/>
            </div>
        </div>
    </>
  )
}

export default Verification