import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const VerticalCarousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [currentSpeed, setCurrentSpeed] = useState(1); // Initial speed
  const scrollSpeed = 1; // Infinite scroll speed
  const speedChangeDuration = 1000; // Duration before speed resets (in ms)
  let speedResetTimeout = useRef(null);

  // Function to reset speed back to default
  const resetSpeed = () => {
    setCurrentSpeed(scrollSpeed); // Reset speed to default scrolling speed
  };

  // Continuous scrolling function
  useEffect(() => {
    const carousel = carouselRef.current;
    const totalScrollHeight = carousel.scrollHeight;

    let animationFrameId;

    const scrollCarousel = () => {
      carousel.scrollTop += currentSpeed;

      // Seamless looping: Reset scroll position when at the bottom
      if (carousel.scrollTop >= totalScrollHeight / 2) {
        carousel.scrollTop = 0;
      } else if (carousel.scrollTop <= 0) {
        carousel.scrollTop = totalScrollHeight / 2; // Reset to bottom if scrolled upwards
      }

      animationFrameId = requestAnimationFrame(scrollCarousel);
    };

    scrollCarousel(); // Start scrolling

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [currentSpeed]);

  // Button control to temporarily scroll up
  const scrollUp = () => {
    setCurrentSpeed(-2); // Scroll up faster
    clearTimeout(speedResetTimeout.current); // Clear any previous timeouts
    speedResetTimeout.current = setTimeout(resetSpeed, speedChangeDuration); // Reset speed after 1 second
  };

  // Button control to temporarily scroll down
  const scrollDown = () => {
    setCurrentSpeed(2); // Scroll down faster
    clearTimeout(speedResetTimeout.current); // Clear any previous timeouts
    speedResetTimeout.current = setTimeout(resetSpeed, speedChangeDuration); // Reset speed after 1 second
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn up" onClick={scrollUp}>▲</button>
      
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-images">
          {/* Original set of images */}
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Image ${index + 1}`}/>
            </div>
          ))}
          {/* Cloned set of images for infinite loop */}
          {images.map((image, index) => (
            <div className="carousel-item" key={index + images.length}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      <button className="carousel-btn down" onClick={scrollDown}>▼</button>
    </div>
  );
};

export default VerticalCarousel;