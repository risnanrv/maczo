import React from 'react'
import './Herosection.css'
import Banner from '../../Assets/Banner-ex.jpg'
function Herosection() {
  return (
   <div className="banner-container">
    <img src={Banner} alt='Banner' className='banner-img'/>
   </div>
  )
}

export default Herosection
