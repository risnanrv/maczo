import React, { useState, useEffect } from "react";
import "./Testimonial.css"; // Import the CSS file for styling

const testimonials = [
  {
    id: 1,
    name: "Anna Deynah",
    photo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    review:
      "I bought my new MacBook from Maczo, and the experience was amazing! The product was genuine, and the delivery was super fast. Highly recommended!",
  },
  {
    id: 2,
    name: "John Smith",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    review:
      "Maczo has the best deals on iPhones and gadgets. I got my iPhone at a great price, and the customer service was excellent. Will definitely shop again!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    photo: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    review:
      "I’ve been a loyal customer of Maczo for years. Their products are always top-notch, and their team is very professional. Love shopping here!",
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { name, photo, review } = testimonials[currentTestimonial];

  return (
    <div className="testimonial-slider-container">
      <h1 className="testimonial-heading">Customer Feedbacks</h1>
      <div className="testimonial-slider">
        <button className="arrow-button left-arrow" onClick={prevTestimonial}>
          &#10094;
        </button>
        <div className="testimonial-card">
          <img src={photo} alt={name} className="testimonial-photo" />
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-review">"{review}"</p>
        </div>
        <button className="arrow-button right-arrow" onClick={nextTestimonial}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;