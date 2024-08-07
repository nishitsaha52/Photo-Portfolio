import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <br/><br/>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <br/><br/>
      <Footer />
    </Router>
  );
};

export default App;
