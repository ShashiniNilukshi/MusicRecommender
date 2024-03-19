import React from 'react';
import './App.css';
import Home from './Pages/Home.jsx';
import Musicpage from './Pages/music.jsx';
import Footer from './Pages/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Musicpage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
