import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './Team.css'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
    <Navbar/>
    <div className="Team">

      <h1 className='title'>Our Team</h1>
      <h2>Chair Person</h2>
      <div className="t-screen">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
      <h2>President</h2>
      <div className="t-screen">
        <TeamCard/>
      </div>
      <h2>Advisors</h2>
      <div className="t-screen">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
      <h2>Heads</h2>
      <div className="t-screen">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Team
