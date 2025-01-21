import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../styles.css";
import head from "../pictures/head.png";

gsap.registerPlugin(ScrollTrigger);

function Home() {

    return (
        <div>
            <div className="welcome-section">
                <h1>Hi! I'm Nicholas Newbauer</h1>
                <p>(a.k.a. Nick or NB)</p>
                <h2>Click on me to get to know me!</h2>
                <Link to="/nick">
                    <img src={head} alt="Headshot of Nicholas Newbauer" className="headshot"/>
                </Link>
                <h2>Full Stack Developer</h2>
            </div>
        <div className="spacer"></div>
        </div>
  );
}

export default Home;