import React, { useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../styles.css";
import head from "../pictures/head.png";
import {TechIconsPrimary, TechIconsSecondary} from "../components/TechIcons";
import Dropdown from "../components/DropdownSection";
import { NavigationContext } from "../components/PageTransition";


gsap.registerPlugin(ScrollTrigger);

function Home() {
    const { handleNavigation } = useContext(NavigationContext);

    return (
        <div>
            <div className="welcome-section">
                <h1>Hi! I'm Nicholas Newbauer</h1>
                <p>(a.k.a. Nick or NB)</p>
                <h2>Click on me to get to know me!</h2>
                <span onClick={() => handleNavigation("/nick")} style={{ cursor: "pointer" }}>
                    <img src={head} alt="Headshot of Nicholas Newbauer" className="headshot"/>
                </span>
            </div>
            <div class="split-section">
                <div class="left">

                    <Dropdown title="As a Developer:">
                        <p>I'm a Software Developer with extensive experience in Full-Stack Development.</p>
                        <p>Greatest Skill & Interests:</p>
                        <ul>
                            <li>Backend Development & System Architecture</li>
                            <li>Scalable & Accessible Web Development</li>
                            <li>Machine Learning & Data Processing</li>
                            <li>API Design & Integration</li>
                        </ul>
                    </Dropdown>

                    <hr></hr>

                    <Dropdown title="What I bring to the table:">
                        <p>I started coding when I was 13, and over the years, I've built a strong foundation in software development, system architecture, and problem-solving.</p>
                        <p>I thrive in collaborative environments and strive to create spaces where both myself and those around me can grow, rather than be held back.</p>
                        <p>I take pride in my creativity, which allows me to think outside the box and approach complex problems with unique solutions.</p>
                        <p>My drive to build a lasting career pushes me to be a quick learner. I genuinely enjoy exploring the intricacies of new languages, frameworks, and technologies.</p>
                    </Dropdown>
                    <hr></hr>

                    <Dropdown title="Projects:">
                        <h3><u>Mouser</u></h3>
                        <p>Mouser is a mouse testing database that I am working on for the <b>SLU Virology Lab</b>. It is designed to allow researchers to easily track and manage the mice in their experiments.</p>
                        <p><u>Accomplishments</u>:</p>
                        <ul>
                            <li>Implemented serial device compatibility</li>
                            <li>Enforced efficient device inputs using threading</li>
                            <li>Made Mouser multiplatform accessible</li>
                            <li>Overhauled the UI to be user-friendly using proper UI methodology</li>
                        </ul>
                        <p><u>Tech Stack</u></p>
                        <ul>
                            <li>Python</li>
                            <li>SQLite</li>
                        </ul>

                        <div className="minispacer"> </div>

                        <h3><u>SpotiBoxd</u></h3>
                        <p>SpotiBoxd is a personal project I am working on. It is an album review social media currently solely developed by me.</p>
                        <p><u>Tech Stack</u>:</p>
                        <ul>
                            <li>JavaScript - React</li>
                            <li>Python - Django</li>
                            <li>PostgreSQL</li>
                            <li>AWS (Elastic Beanstalk, Lambda, RDS, API Gateway, CloudWatch)</li>
                            <li>Spotify API</li>
                        </ul>
                    </Dropdown>
                </div> 

                <div class="right">
                    <h2>Skills</h2>
                    <p>Languages I Excel with:</p>
                    <TechIconsPrimary />
                    <p>Frameworks and Tools that power my projects:</p>
                    <TechIconsSecondary />
                </div>
            </div>
        </div>
    );
}

export default Home;