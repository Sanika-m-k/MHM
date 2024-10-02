import React from 'react'
import './Footer.css'
import logo from '../assests/logo.png'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
   <>
   <footer class="footer-distributed">

<div class="footer-left">

    {/* <h3>Company<span>logo</span></h3> */}
    <div className="logo f-logo">
            <img src={logo} alt="" className="logo-img" />
        </div>

    <p class="footer-links">
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/about'>About</NavLink>

        <NavLink to='/team'>Team</NavLink>

        <NavLink to='/events'>Events</NavLink>

        <NavLink to='/gallery'>Gallery</NavLink>

        {/* <a href="#" class="link-1">Home</a> */}
        
        {/* <a href="#">About</a> */}
    
        {/* <a href="#">Team</a> */}
    
        {/* <a href="#">Events</a>
        
        <a href="#">Gallery</a> */}
        
    </p>

    <p class="footer-company-name">Maharashtra Mandal © 2024</p>
</div>

<div class="footer-center">

    <div>
    <i class="fa-solid fa-location-dot"></i>
        <p>Indian Institute of Technology Kharagpur</p>
    </div>

    <div>
            <i class="fa-solid fa-phone"></i>
            <p><a href="tel:+91 8767650199">+91 8767650199</a></p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:iitkgpmaharashtramandal@gmail.com">iitkgpmaharashtramandal@gmail.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>Maharashtra Mandal</span>
       
    </p>

    <div class="footer-icons">

        <a href="https://www.instagram.com/iitkgp.maharashtra/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
        {/* <a href="#"><i class="fa fa-twitter"></i></a> */}
        <a href="https://www.linkedin.com/company/maharashtra-mandal-iit-kharagpur/?viewAsMember=true" target='_blank'><i class="fa fa-linkedin"></i></a>
        <a href="https://www.facebook.com/groups/467661766693848" target='_blank'><i class="fa-brands fa-facebook"></i></a>

    </div>

</div>

</footer>
   
   </>
  )
}

export default Footer
