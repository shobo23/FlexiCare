import React from 'react'
import Header from '../Components/Static/Header'
import HeroPage from '../Pages/HeroPage'
import MobileMenu from '../Components/Navigation/MobileMenu'
import HowItWorks from '../Pages/HowItWorks'

const HomePage = () => {
  return (
    <div>
        <Header />
        <MobileMenu />
        <HeroPage />
        <HowItWorks />
    </div>
  )
}

export default HomePage