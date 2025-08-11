import React, { useState, useEffect } from "react";
import "./BottomContentGrid.css";
import Images  from "../assets/pficp3.jpeg"
import Images2  from "../assets/pficp2.jpeg"

const testimonials = [
  {
    quote: "The national program has transformed our community for the better. We are already seeing results.",
    author: "— John Smith, Mayor",
    image: Images,
  },
  {
    quote: "A truly inspiring initiative that is shaping our region's future.",
    author: "— Sarah Johnson, Community Leader",
    image: Images2
  },
  {
    quote: "Our local economy is thriving thanks to this development program.",
    author: "— Michael Brown, Business Owner",
    image: Images2
  }
];

const BottomContentGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400); // fade-out before changing
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bottom-content-grid">
      <div className="container">
        
        {/* Testimonials Carousel */}
        <div
          className={`bcg-card testimonials-card ${fade ? "fade-in" : "fade-out"}`}
          style={{
            backgroundImage: `url(${testimonials[currentIndex].image})`
          }}
        >
          <div className="card-overlay"></div>
          <div className="testimonial-content">
            <h3 className="testimonial-card-title">Testimonials</h3>
            <p className="testimonial-text">
              "{testimonials[currentIndex].quote}"
            </p>
            <span className="testimonial-author">
              {testimonials[currentIndex].author}
            </span>
            <div className="carousel-controls">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bcg-card newsletter-card">
          <h3 className="card-title">Subscribe to our Newsletter</h3>
          <p className="newsletter-text">
            Get the latest updates on our projects and initiatives delivered directly to your inbox.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default BottomContentGrid;
