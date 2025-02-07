import React from 'react'
import {Form, Button } from 'react-bootstrap';
import './EnquirySection.css'
function EnquirySection() {
  return (
    <div className="inquiry-form-container">
    <h2>Send Your Inquiry</h2>
    <form className="inquiry-form">
      <input type="text" placeholder="Full Name*" required />
      <input type="tel" placeholder="Phone Number*" required />
      <input type="email" placeholder="Email*" required />
      <textarea placeholder="Message*" rows="4" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default EnquirySection
