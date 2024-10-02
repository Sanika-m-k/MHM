import React, { useEffect, useRef } from 'react';
import './Circle.css'; // Import CSS for styling



const CircularImageCarousel = ({images}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 100, behavior: 'smooth' });
      }
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="circle-container">
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`img-${index}`} 
          className={`circle-img img-${index + 1}`} 
          style={{ transform: `rotate(${index * 45}deg) translate(150px) rotate(-${index * 45}deg)` }} // Position images in a circle
        />
      ))}
    </div>
  );
};

export default CircularImageCarousel;
