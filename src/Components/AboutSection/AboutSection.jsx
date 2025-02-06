import React from 'react'
import './AboutSection.css'
import { Container } from 'react-bootstrap'
import { FaCheckCircle } from "react-icons/fa";
import Testimonial from '../Testimonial/Testimonial';
function AboutSection() {
  return (
    <Container>
       <div className=" min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl  p-8 rounded-2xl">
        <h1 className="text-4xl main-head  mb-2 text-center">About Maczo</h1>
        <p className=" text-lg sub-head text-center mb-6">
          Welcome to <span className="font-semibold">Maczo</span>, your trusted digital store for premium gadgets and accessories.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
            <p className="text-gray-600 mt-2">
              Maczo is a premium reseller specializing in iPhones, MacBooks, iPads, laptops, and a variety of tech gadgets. 
              We cater to both retail and wholesale customers, ensuring high-quality products and excellent service.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold  mb-3">What We Offer</h2>
            <ul className="about-list">
            <li><FaCheckCircle className="list-icon" /> Latest iPhones, MacBooks, and iPads</li>
            <li><FaCheckCircle className="list-icon" /> High-quality laptops and gadgets</li>
            <li><FaCheckCircle className="list-icon" /> Wholesale and retail purchasing options</li>
            <li><FaCheckCircle className="list-icon" /> Exclusive deals for business customers</li>
            <li><FaCheckCircle className="list-icon" /> Gadget cases and accessories</li>
          </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold  mb-3">Why Choose Us?</h2>
            <p className=" mt-2">
              At Maczo, we prioritize quality, authenticity, and customer satisfaction. Our team ensures that every product meets high standards before reaching you. 
              Whether you are an individual buyer or a business client, we offer competitive prices and reliable service.
            </p>
          </div>
         
        </div>
      </div>
      <Testimonial/>
    </div>
    </Container>
  )
}

export default AboutSection
