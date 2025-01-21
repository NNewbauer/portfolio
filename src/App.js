import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Nick from './pages/Nick';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home key="home" />} />
        <Route path="/portfolio" element={<Portfolio key="portfolio" />} />
        <Route path="/resume" element={<Resume key="resume" />} />
        <Route path="/nick" element={<Nick key="nick" />} />
      </Routes>
    </Router>
  );
}

export default App;