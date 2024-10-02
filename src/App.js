
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
        <Route path='/photos' element={<PhotoScreen/>} />
      </Routes>
    </Router>
  );
};

export default App;