import React, { useEffect, useRef } from "react";
import "./PartnersAndContent.css";

const logos = [
  { src: "/images/logo1.png", alt: "Client 1" },
  { src: "/images/logo2.png", alt: "Client 2" },
  { src: "/images/logo3.png", alt: "Client 3" },
  { src: "/images/logo4.png", alt: "Client 4" },
  { src: "/images/logo5.png", alt: "Client 5" },
  { src: "/images/logo6.png", alt: "Client 6" },
];

const testimonials = [
  {
    text: "The national program has transformed our community for the better. We are already seeing results.",
    author: "John Smith, Mayor",
    bg: "/images/testimonial1.jpg",
  },
  {
    text: "Thanks to this initiative, our city is greener and more connected than ever.",
    author: "Maria Lopez, Community Leader",
    bg: "/images/testimonial2.jpg",
  },
];

const PartnersAndContent = () => {
  const carouselRef = useRef(null);

  // Duplicate logos for seamless infinite scroll
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    let scrollAmount = 0;
    const speed = 0.5; // pixels per frame
    const container = carouselRef.current;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; // reset without visible jump
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };
    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="partners-and-content">
      {/* Partner Logos Carousel */}
      <div className="logos-carousel" ref={carouselRef}>
        <div className="logos-track">
          {extendedLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Content Grid */}
      <div className="bottom-grid-container">
        {/* Testimonials (single at a time, background image) */}
        <div
          className="testimonial-card"
          style={{ backgroundImage: `url(${testimonials[0].bg})` }}
        >
          <div className="overlay"></div>
          <p>{testimonials[0].text}</p>
          <span>{testimonials[0].author}</span>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-card">
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Get the latest updates on our projects and initiatives straight to
            your inbox.
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

export default PartnersAndContent;
