import React from "react";
import "../styles.css"; // Ensure your CSS is imported

const TechIconsPrimary = () => {
    const primary = [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Rust", icon: "devicon-rust-plain" },
        { name: "Haskell", icon: "devicon-haskell-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },

    ];

    return (
        <div className="tech-icons-container">
            {primary.map((tech, index) => (
                <div key={index} className="tech-icon">
                    <i className={tech.icon}></i>
                    <p>{tech.name}</p>
                </div>
            ))}
        </div>
    );
};

const TechIconsSecondary = () => {
    const secondary = [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "Git", icon: "devicon-git-plain colored" },   
        { name: "Django", icon: "devicon-django-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, 
        { name: "Firebase", icon: "devicon-firebase-plain colored" },  
        ];

    return (
        <div className="tech-icons-container">
            {secondary.map((tech, index) => (
                <div key={index} className="tech-icon">
                    <i className={tech.icon}></i>
                    <p>{tech.name}</p>
                </div>
            ))}
        </div>
    );
};

// Correct named export for multiple components
export { TechIconsPrimary, TechIconsSecondary };