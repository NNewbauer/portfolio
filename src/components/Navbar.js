import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from "./PageTransition"; // Import context
import "./navbar.css";

function Navbar() {
    const { handleNavigation } = useContext(NavigationContext); // Get function from context
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        setGreeting(hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening");
    }, []);

    return (
        <nav className="navbar">
            <h1>{greeting}</h1>
            <ul className="navbar-links">
                <li><span onClick={() => handleNavigation("/")}>Home</span></li>
                <li><span onClick={() => handleNavigation("/resume")}>Resume</span></li>
                <li><span onClick={() => handleNavigation("/portfolio")}>Projects</span></li>
            </ul>
        </nav>
    );
}

export default Navbar;