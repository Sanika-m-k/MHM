
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from "./Gallery.json";
import "./Gallery.css";
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useSwipeable } from 'react-swipeable'; // Correct import

const PhotoScreen = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const eventName = params.get('event');
  
  const imagedata = data[eventName];
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const toggleModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShowModal(!showModal);
  };
  
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleKeyDown = (e) => {
    if (showModal) {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % imagedata.length;
    setSelectedImage(imagedata[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + imagedata.length) % imagedata.length;
    setSelectedImage(imagedata[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Navbar/>
      <div className="ph-screen" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="ph-nav">
          <p>{eventName}</p>
          <Link to={"/gallery"}>
          <i className="fa-solid fa-xmark"></i>
          </Link>
        </div>
        <div className="ph-photos">
          {
            imagedata.map((item, index) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                onClick={() => toggleModal(item, index)}
              />
            ))
          }          
        </div>
        {showModal && (
          <div className="f-screen">

          <div className="modal" {...handlers}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
            </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default PhotoScreen;

