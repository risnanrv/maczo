import React from 'react'
import './IpadSection.css'
import IpadImg from '../../Assets/ipad-card-img.webp'
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
function IpadSection() {
  return (
  <div className="container mt-4">
        <h2 className="iphone-head">Ipads</h2>
        
        {/* Wrapper to make it scrollable only on small screens */}
        <div className="iphone-scroll-container">
          <div className="iphone-cards-wrapper">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="card iphone-card">
              <div className="stock-status">
              <FaCircleCheck /> <span>In stock</span>
  </div>
  
                <div className="img-container">
                  <img src={IpadImg } alt="Product" />
                </div>
                <div className="product-name">Apple iPad Wi-Fi (Ultramarine, 64 GB)</div>
                <div className="price">32,999</div>
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
        <button className="more-button">
          More <FaArrowRight className="icon" />
        </button>
      </div>
      
      </div>
  )
}

export default IpadSection
