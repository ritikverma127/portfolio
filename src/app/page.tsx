import React from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
function page() {
  return (
    <div className='bg-backgroundfull'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default page
