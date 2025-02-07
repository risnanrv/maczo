import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Herosection from '../Components/Herosection/Herosection'
import ProductCards from '../Components/ProductCards/ProductCards'
import IphoneSection from '../Components/IphoneSection/IphoneSection'
import MacSection from '../Components/MacSection/MacSection'
import Footer from '../Components/Footer/Footer'
import ThreeButtons from './../Components/ThreeButtons';
import IpadSection from '../Components/IpadSection/IpadSection'
import GadgetSection from '../Components/GadgetSection/GadgetSection'
import EnquirySection from '../Components/EnquirySection/EnquirySection'

function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <ThreeButtons/>
      <ProductCards/>
      <IphoneSection/>
      <MacSection/>
      <IpadSection/>
      <GadgetSection/>
      <EnquirySection/>
      <Footer/>
    </div>
  )
}

export default Home
