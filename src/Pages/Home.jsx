import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Assuming you're using React Router


import Guitar from './Guitar.png';
import logo from './logo.png'
import './Nav.css'
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Home() {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change the background color
  const changeColor = (color) => {
    setBackgroundColor(color);
  };
  

  return (
    
    <div className='home' style={{ backgroundColor }}>
         <nav>
    <ul className="navbar-list">
    
      <li className='button-home'><Link to="/" className='link1'>Home</Link></li>
      <li className='button-home'><Link to ='/music' className='link2'>Music</Link></li>
      
    </ul>
    <img src={logo} alt="logo" className='logo'/>
  </nav>
      <div className='home-header'>
        <h1>RhythmDay☆ </h1>
      </div>
      <div className='paragraph1'>
        <p>🎵 Welcome to our Music Recommendation page! 🎶 Discovering the perfect sound to match <span className='highligh'>your unique aesthetic</span> is an exhilarating journey,<br></br> and we're here to guide you through it.<br></br> Whether you're seeking the gentle melodies of indie folk to complement tranquil moments,<br></br> the pulsating beats of electronic music to energize your day,<br></br> or the soulful rhythms of jazz to set a sophisticated ambiance, our curated selection caters to every taste and mood.<br></br> 🎧 Explore our collection and<span className='underline'> let the harmonious blend of melodies transport you to your desired atmosphere.</span> 🌟</p>
        <Link to="/music" className='button-home1'>Get Started</Link>
      </div>
      <div className='guitar-image'>
        <img src={Guitar} alt="guitar" />
      </div>
      {/* Color selectors */}
      <div className='color-selectors'>
        <div className='color-selector red' onClick={() => changeColor('#CC5500')}>
            <button className='red-button'></button>
        </div>
        <div className='color-selector green' onClick={() => changeColor('#FBCEB1')}>
        <button className='green-button'></button>
        </div>
        <div className='color-selector blue' onClick={() => changeColor('#FFF0F5')}>
        <button className='blue-button'></button>
        </div>
        <div className='color-selector white' onClick={() => changeColor('white')}>
        <button className='white-button'></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
