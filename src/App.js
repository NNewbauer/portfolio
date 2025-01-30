import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Nick from './pages/Nick';
import Navbar from './components/Navbar';
import MouseTracker from "./components/MouseTracker";
import { NavigationProvider } from "./components/PageTransition";
import { Navigation } from 'swiper/modules';

function App() {
  return (
    <Router>
      <NavigationProvider>
      <MouseTracker />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home key="home" />} />
          <Route path="/portfolio" element={<Portfolio key="portfolio" />} />
          <Route path="/resume" element={<Resume key="resume" />} />
          <Route path="/nick" element={<Nick key="nick" />} />
        </Routes>
      </NavigationProvider>
    </Router>
  );
}

export default App;