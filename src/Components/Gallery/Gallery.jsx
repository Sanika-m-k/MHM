import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
// import data from './Gallery.json';
import EventCard from './GalleryCard';
import "./Gallery.css"
// import ganesh from "/Gallery/GaneshUtsav/3.jpg"
// import shiv from "Gallery/Shivjayanti/13.jpg"
// import arbh from "Gallery/Aarambh/8.webp"
// import bhr from "/Gallery/Bharari/8.jpg"
// import gen from "/Gallery/General/Trip/9.jpg"




const Gallery = () => {

  return (
    <>
    <Navbar/>
    <div className="gallery">
      <div className="g-screen">
        <h1>Our Gallery</h1>

        <div className="all-events">
          <EventCard
          name = 'GaneshUtsav'
          ibg = '/Gallery/GCard/ganeshbg.jpg'
          event = "GaneshUtsav"
          iname='/Gallery/GCard/gname.png'
          iimg='/Gallery/GCard/ganesha.png'
          />
          <EventCard
          name = 'Shiv Jayanti'
          ibg = '/Gallery/Shivjayanti/13.jpg'
          event = "Shivjayanti"
          iname =""
          iimg=""
          />
          <EventCard
          name = 'Aarambh'
          ibg = '/Gallery/Aarambh/8.webp'
          event = "Aarambh"
          iname =""
          iimg=""
          />
          <EventCard
          name = 'Bharari'
          ibg = '/Gallery/Bharari/8.jpg'
          event = "Bharari"
          iname =""
          iimg=""
          />
          <EventCard
          name = 'Food Fest'
          ibg = '/Gallery/GCard/fbg.png'
          event = "FoodFest"
          iname ="/Gallery/GCard/gname.png"
          iimg="/Gallery/GCard/foodup.png"
          />
          <EventCard
          name = 'Misal Paw Party'
          ibg = ''
          event = "Misal Paw Party"
          iname =""
          iimg=""
          />
          <EventCard
          name = 'General'
          ibg = '/Gallery/General/Trip/9.jpg'
          event = "General"
          iname =""
          iimg=""
          />
          

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery
