import React from 'react'
import './Herosection.css'
import Banner from '../../Assets/Banner-ex.jpg'
import AIBanner from '../../Assets/AI-Banner.webp'
function Herosection() {
  return (
   <div className="banner-container">
    <img src={AIBanner} alt='Banner' className='banner-img'/>
   </div>
  )
}

export default Herosection
