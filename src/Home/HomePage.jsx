import React from 'react'
import Header from '../Components/Static/Header'
import HeroPage from '../Pages/HeroPage'
import MobileMenu from '../Components/Navigation/MobileMenu'
import HowItWorks from '../Pages/HowItWorks'
import Services from '../Pages/Services'

const HomePage = () => {
  return (
    <div>
        <Header />
        <MobileMenu />
        <HeroPage />
        <HowItWorks />
        <Services />
    </div>
  )
}

export default HomePage