import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './About.css';  // Importing the CSS file

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-section">
          <div className="section-box">
            <h2 className="section-heading">Who We Are</h2>
            <p className="section-text">
            Maharashtra Mandal, a
dynamic cultural society that stands as a bridge
between tradition and modernity, uniting the
vibrant spirit of Maharashtra with the academic
dynamism of IIT Kharagpur.
Established with a passionate commitment to
preserve and promote the rich cultural heritage of
Maharashtra, Maharashtra Mandal serves as a
conduit for students to relish the timeless traditions,
celebrate festivals, and engage in insightful
discussions about Maharashtrian history, art, and
values.Through our meticulously curated events, we
aim to take you on a journey that transcends
geographical boundaries, allowing you to immerse
yourselves in the tapestry of Maharashtra's history,
art, and culture. Each event is a blend of enthusiasm,
creativity, and respect for our roots, offering an
inclusive platform for students to discover and
embrace the charm of the Marathi way of life.
Through the Maharashtra Mandal, experience
Maharashtra's heritage like never before, and
together, let's create memories that resonate for a
lifetime. Join us as we weave the threads of culture,
tradition, and innovation into a vibrant tapestry that
enriches the IIT Kharagpur experience for all.
            </p>
          </div>

          <div className="section-box">
            <h2 className="section-heading">Origin</h2>
            <p className="section-text">
            Maharashtra Mandal at IIT Kharagpur was established in
2009 by a dedicated group of IIT Kharagpur students
who shared a deep admiration for Maharashtra's rich
cultural heritage. This student-led initiative was born out
of a collective passion to preserve, celebrate, and share
the vibrant traditions, festivals, history, and values of
Maharashtra. Over the years, what started as a small yet
earnest endeavor has blossomed into a thriving cultural
society that connects tradition with the contemporary,
fostering unity and appreciation within the diverse
community of IIT Kharagpur. Through a wide array of
engaging events and interactive sessions, Maharashtra
Mandal continues to enrich the academic journey by
offering students a window into the captivating tapestry
of Maharashtra's culture and history
Today, Maharashtra Mandal stands as a vibrant cultural
society within the IIT Kharagpur community. We've
expanded our reach and impact, offering students a
chance to immerse themselves in the captivating realm
of Maharashtra's culture. Through thoughtfully curated
events, interactive discussions, and engaging activities,
we aim to kindle a deep appreciation for the diverse
facets of Maharashtra's heritage. As we continue this
journey, Maharashtra Mandal remains committed to
enriching the IIT Kharagpur experience for all,
celebrating our roots, and fostering an inclusive
environment where tradition and modernity converge.
            </p>
          </div>

          <div className="section-box">
            <h2 className="section-heading">Our Vision</h2>
            <p className="section-text">
            At Maharashtra Mandal, our vision is to create an
inclusive and vibrant space that resonates with the
essence of Maharashtra while fostering a spirit of
unity and growth. We aspire to be a cultural beacon,
enriching the IIT Kharagpur experience by weaving
the threads of tradition, innovation, and camaraderie
into a harmonious tapestry.
Our aim is to transcend geographical boundaries,
immersing our community in the captivating
heritage of Maharashtra. Through a diverse array of
events, workshops, and interactive sessions, we
endeavor to deepen the understanding and
appreciation of Maharashtra's culture, art, history,
and values.
Fostering an environment that blends tradition and
modernity, we aim to cultivate culturally grounded
leaders, primed to excel in a global society.
Maharashtra Mandal is envisioned as a dynamic
platform that celebrates diversity, encourages
collaboration, and sparks intellectual curiosity.
In the coming years, we envision expanding our
reach, creating more meaningful engagements, and
forging connections that transcend the confines of
our campus. We envision Maharashtra Mandal as a
bridge that not only brings Maharashtrians together
but also welcomes everyone to celebrate the spirit of
Maharashtra, fostering a sense of belonging and
unity that reverberates far beyond our boundaries         </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
