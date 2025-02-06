import React from 'react'
import './ContactSection.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
function ContactSection() {
  return (
  
    <Container className="contact-section my-5">
    <Row style={{display: "flex"}}>
      {/* Contact Info */}
      <Col md={6}>
        <h2 className="contact-head fw-bold mb-5">Contact Info</h2>
        <div className="address">

        <div className="mb-3">
          <h5>Address</h5>
          <p>Katt One, 31/352 D, New No: 53/1002-A, Paradise Road, Vyttila P.O, Kochi - 682019</p>
          
        </div>
        <div className="mb-3">
          <h5>Address</h5>
          <p>Comtech Buildings, Kalchoondy Junction, Alappuzha, Kerala, India, 688005.</p>
         
        </div>
        </div>
        <p><strong>Contact:</strong></p>
        <div className="contact-text">
        <p><strong>📧</strong> xyz@gmail.com</p>
        <p><strong>📧</strong>9999999999</p>
        </div>
        <p><strong>Business Hours:</strong><br />Monday to Saturday 9:00 AM to 6:30 PM</p>
      </Col>

      {/* Inquiry Form */}
      <Col md={6}>
        <h2 className=" contact-head  fw-bold mb-5">Send Your Inquiry</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Full Name*" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone Number*" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email*" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Message*" required />
          </Form.Group>
          <div className="submit-btn-container">
          <Button variant="primary" className='contact-submit' type="submit">Submit</Button>
          </div>
        
        </Form>
      </Col>
    </Row>

    {/* Social Media Section */}
    <Row className="mt-5 text-center">
      <h2 className="fw-bold mb-4">Connect Us</h2>
      <Col>
          <div className="social-links d-flex justify-content-center gap-3">
            <a href="#" className="social-icon whatsapp">
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram size={20} /> Instagram
            </a>
            <a href="#" className="social-icon email">
              <FaEnvelope size={20} /> Email
            </a>
          </div>
        </Col>
    </Row>
  </Container>
  );
};

export default ContactSection
