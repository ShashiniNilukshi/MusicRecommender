import React, { useState } from 'react';
import './music.css';
import Image from './Music.jpeg';

function Music() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/recommend', { // Adjust URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ song: searchQuery }),
      });
      const data = await response.json();
      setRecommendedSongs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
        <input type="text" placeholder='Search' value={searchQuery} onChange={handleInputChange}></input>
        <button className='button1' onClick={handleSubmit}>Go</button>
      </div>
      <div className='output'>
        <h3>Best Song Matches🌸:</h3>
        {recommendedSongs.length > 0 ? (
          <ul>
            {recommendedSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        ) : (
          <p>No recommended songs yet. Search for a song above.</p>
        )}
      </div>
    </div>
  );
}

export default Music;
