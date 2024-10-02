import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'; 

import './TeamCard.css'
import { Link } from 'react-router-dom'
import memberPhoto from '../../assests/CarouselImages/mh1.jpg'
const TeamCard = (props) => {
  const socialHandles = [
    { link: 'https://instagram.com/', icon: <FaInstagram /> },
    { link: 'https://linkedin.com/', icon: <FaLinkedin /> },
    { link: 'https://facebook.com/', icon: <FaFacebook /> },
  ];
  return (
    <div className="member-card">
    <div className="image-container">
      <img src={memberPhoto} alt="name"className="member-image" />
    </div>
    <h2 className="member-name">Sanika Kadam</h2>
    <p className="member-role">Tech Head</p>
    <div className="social-icons">
      <a href="instagram.com"target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="instagram.com" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="instagram.com" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
  )
}

export default TeamCard
