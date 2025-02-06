import React from 'react';
import './MacSection.css';
import MacImg from '../../Assets/mac-card-img.webp';
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';

function MacSection() {
  return (
    <div className="container mt-4">
      <h2 className="mac-head">MacBooks</h2>

      {/* Wrapper to make it scrollable only on small screens */}
      <div className="mac-scroll-container">
        <div className="mac-cards-wrapper">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="laptop-card">
              <img src={MacImg} alt="HP 255 R5 5625U" className="laptop-image" />
              <div className="laptop-details">
                
                <div className="laptop-model">Apple Macbook Air </div>
                <div className="spec">
                  <span className="tick"><FaCircleCheck /></span> R5 5625U Processor
                </div>
                <div className="spec">
                  <span className="tick"><FaCircleCheck /></span> 8GB RAM
                </div>
                <div className="spec">
                  <span className="tick"><FaCircleCheck /></span> 512 GB SSD
                </div>
                <div className="spec">
                  <span className="tick"><FaCircleCheck /></span> 15.6 HD Display
                </div>
              </div>
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
  );
}

export default MacSection;