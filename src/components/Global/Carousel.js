import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ slides, interval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="carousel-container fade-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`fade-slide ${
            index === currentIndex ? "active" : "inactive"
          }`}
          style={{
            backgroundImage: `url(${slide.background})`,
          }}
        >
          <div className="carousel-overlay" />
          <div className="carousel-content">{slide.content}</div>
        </div>
      ))}

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

