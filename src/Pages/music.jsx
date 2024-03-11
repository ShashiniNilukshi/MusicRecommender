import React from 'react';
import './music.css';
import Image from './Music.jpeg';

function Music() {
  return (
    <div>
      <div className='heading'>
        <h1>Harmonize Your Style: Unveiling Your Perfect Soundtrack🎀</h1>
      </div>
      <div className='photo'>
        <img src={Image} alt='Music Girls Image' />
      </div>
      <div className='paragraph'>
        <p>🎵 Welcome to our Music Recommendation page! 🎶 Discovering the perfect sound to match <span className='highligh'>your unique aesthetic</span> is an exhilarating journey, and we're here to guide you through it. Whether you're seeking the gentle melodies of indie folk to complement tranquil moments, the pulsating beats of electronic music to energize your day, or the soulful rhythms of jazz to set a sophisticated ambiance, our curated selection caters to every taste and mood. 🎧 Explore our collection and<span className='underline'> let the harmonious blend of melodies transport you to your desired atmosphere.</span> 🌟</p>
      </div>
      <div className='searchbar'>
        <input type="text" placeholder='Search'></input>
        <button className='button1'>Go</button>
      </div>
      <div className='output'>
        <h3>Best Song Maches🌸:</h3>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Music;
