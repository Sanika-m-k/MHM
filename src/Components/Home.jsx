import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Home.css'
import logo from '../assests/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VerticalCarousel from './Carousel/Carousel.jsx'
import CircularImageCarousel from './Circle/Circle.jsx'
import VideoPlayer from './Video/Video.jsx'
import Timeline from './Timeline/Timeline.jsx'
import mh1 from '../assests/CarouselImages/mh1.jpg'
import mh2 from '../assests/CarouselImages/mh2.jpg'
import mh3 from '../assests/CarouselImages/mh3.jpeg'
import mh4 from '../assests/CarouselImages/mh4.jpg'
import mh5 from '../assests/CarouselImages/mh5.png'
import mh6 from '../assests/CarouselImages/mh6.jpg'
import mh7 from '../assests/CarouselImages/mh7.jpg'
import mh8 from '../assests/CarouselImages/mh8.jpg'
import mh9 from '../assests/CarouselImages/mh9.jpg'
import mh10 from '../assests/CarouselImages/mh10.jpg'
import mh11 from '../assests/CarouselImages/mh11.jpg'
import mh12 from '../assests/CarouselImages/mh12.jpg'
import mh13 from '../assests/CarouselImages/mh13.jpg'
import mh14 from '../assests/CarouselImages/mh14.webp'
import mh15 from '../assests/CarouselImages/mh15.jpeg'
import mh16 from '../assests/CarouselImages/mh16.jpg'
import mh17 from '../assests/CarouselImages/mh17.avif'
import mh18 from '../assests/CarouselImages/mh18.jpeg'
import mh19 from '../assests/CarouselImages/mh19.jpg'
import mh20 from '../assests/CarouselImages/mh20.webp'

const Home = () => {

  const images1 = [
    mh1, mh11, mh2, mh12, mh3, mh13, mh4, mh14, mh5, mh15
  ];
  const images2 = [
    mh6, mh16, mh7, mh17, mh8, mh18, mh9, mh19, mh10, mh20
  ];
  const images3=[
    mh5, mh12, mh9, mh4, mh6, mh11,mh3, mh17
  ];

  const events = [
    { time: 'August', name: 'Aarambh', image: mh1 },
    { time: 'September', name: 'Ganeshotsav', image: mh2 },
    { time: 'November', name: 'Misal Pav Party', image: mh3 },
    { time: '19th February', name: 'Shiv Jayanti', image: mh4 },
    { time: 'March', name: 'Food Fest', image: mh1 },
    { time: 'April', name: 'Bharari', image: mh3 }
  ];

  const [logoWidth, setLogoWidth] = useState(30);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 510);


  useEffect(() => {
    const handleScroll = () => {
      const newWidth = Math.max(0, 30 - window.scrollY / 13); // Logo size change based on scroll

      setLogoWidth(newWidth);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div >
      <Navbar />
      <div className="Home">
        
      </div>

      <div className="h-container">
        {isMobile?<div className='circle'><CircularImageCarousel images={images3}/></div>:<></>}
        <>{!isMobile?<VerticalCarousel images={images1} />:<></>}</>
        <div className='logodiv'>
        <img
          src={logo}
          alt="Logo"
          style={{ 
            width:` ${logoWidth}%`, 
            transition: 'width 0s', // Keep your previous transition styling here
          }}
        />
        </div>
        <>{!isMobile?<VerticalCarousel images={images2} />:<></>}</>     </div>
      <div className='nextpart'>
      <h1 className='title'>Timeline</h1>
      <Timeline events={events}/>
      <h1 className='title'>Updates</h1>
          <VideoPlayer/>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;

