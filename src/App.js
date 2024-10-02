
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About/About.jsx';
import Event from './Components/Events/Event.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Team from './Components/Team/Team.jsx';
import PhotoScreen from './Components/Gallery/PhotoScreen.jsx';
import Navbar from './Components/Navbar.jsx';

// import About from './components/About';

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/team" element={<Team/>} />
        <Route path='/bharari' element={<PhotoScreen eventName="Bharari"/>} />
        <Route path='/aarambh' element={<PhotoScreen eventName="Aarambh"/>} />
        <Route path='/misal%20pav%20party' element={<PhotoScreen eventName="Misal Pav Party"/>} />
        <Route path='/Shiv%20Jayanti' element={<PhotoScreen eventName="Shiv Jayanti"/>} />
        <Route path='/food%20fest' element={<PhotoScreen eventName="Food Fest"/>} />
        <Route path='/ganeshotstav' element={<PhotoScreen eventName="Ganeshotsav"/>} />

      </Routes>
    </Router>
  );
};

export default App;