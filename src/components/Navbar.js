import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    const [greeting, setGreeting] = useState('');

    useEffect(() => {    
        const hour = new Date().getHours();
        setGreeting(hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening");
    }
    , []);
    return (
        <nav className="navbar">
            <h1>{greeting}</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/portfolio">Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;