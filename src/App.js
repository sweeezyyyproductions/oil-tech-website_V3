import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
