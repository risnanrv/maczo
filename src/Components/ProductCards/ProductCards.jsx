import React, { useRef, useEffect, useState } from "react";
import "./ProductCards.css";
import Gadgets from "../../Assets/gadgets.webp";
import Ipad from "../../Assets/ipad.webp";
import Iphone from "../../Assets/iphone.webp";
import Macbook from "../../Assets/macbook.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

function ProductCards() {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      resetAutoScroll();
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      resetAutoScroll();
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    let interval;

    if (!isScrolling) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }, 2000); // Scrolls every 2 seconds
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isScrolling]);

  // Reset auto-scroll when the user interacts
  const resetAutoScroll = () => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 5000); // Resume auto-scroll after 5 sec
  };

  return (
    <div className="container banner-container mt-2">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>

      <div className="scroll-container" ref={scrollRef} onTouchStart={resetAutoScroll} onMouseEnter={resetAutoScroll}>
        {[{ img: Iphone, title: "Iphone" }, { img: Macbook, title: "MacBook" }, { img: Ipad, title: "Ipad" }, { img: Gadgets, title: "Gadgets" }].map((item, index) => (
          <div key={index} className="product-card">
            <div className="circle">
              <img src={item.img} alt={item.title} />
            </div>
            <h5 className="mt-2">{item.title}</h5>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ProductCards;
