import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Resource from './components/Resource';
import GearList from './components/GearList';
import Preloader from './components/Pre'; // Import the Preloader component
import 'leaflet/dist/leaflet.css';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the preloader (e.g., fetching data or initial loading)
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after loading is complete
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
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
        </>
      )}
    </Router>
  );
};

export default App;
