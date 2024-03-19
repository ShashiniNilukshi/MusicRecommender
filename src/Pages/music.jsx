import React, { useState } from 'react';
import './music.css';
import Image from './Music.jpeg';
import './Nav.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';


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
      
      <div className='heading' id='music'>
    
        <h1>Harmonize Your Style: Unveiling Your Perfect Soundtrack🎀</h1>
      </div>
      <section className="banner" id="home">
      <div className='photo bump-animation'>
        <img src={Image} alt='Music Girls Image' />
      </div>
    </section>
    
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
