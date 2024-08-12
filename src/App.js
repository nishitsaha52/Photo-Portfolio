// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Resource from './pages/Resource';
import GearList from './pages/GearList';
import Preloader from './components/Pre';
import CustomCursor from './components/CustomCursor';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? <Preloader /> : (
        <>
          <Header />
          <br/><br/>
          <br/><br/><br/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path='/resource' element={<Resource/>}/>
              <Route path='/gearlist' element={<GearList/>}/>
            </Routes>
          </div>
          <br/>
          <Footer />
          <CustomCursor /> {/* Add the CustomCursor component here */}
        </>
      )}
    </Router>
  );
};

export default App;
