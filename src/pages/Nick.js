import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles.css";
import head from "../pictures/head.png";
import catDad from "../pictures/catdad.jpg";
import musician from "../pictures/musician.png";
import securityGuard from "../pictures/security.jpg";
import uncle from "../pictures/uncle.jpg";

gsap.registerPlugin(ScrollTrigger);

function Nick() {
  const sectionsRef = useRef([]); // Refs for all sections

  const contentData = [
    {
      title: "A Musician",
      description:
        "Nick is a multi-instrumentalist, composer, & producer with a passion for music.",
      image: musician,
    },
    {
      title: "A Security Guard",
      description: "Nick is a security guard by night, protecting the people of his beloved Off Broadway.",
      image: securityGuard,
    },
    {
      title: "The World's #1 Uncle",
      description: "It’s unofficial, but the family agrees—Nick’s got the title.",
      image: uncle,
    },
    {
      title: "A Cat Dad",
      description:
        "Loyal servant & father to Orpheus, the majestic supervisor of all projects.",
      image: catDad,
    }
  ];

  useLayoutEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      const isLastSection = index === sections.length - 1;

      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isLastSection ? "top 90%" : "top 95%", // Adjust start for the last section
          end: isLastSection ? "bottom 10%" : "bottom 5%", // Adjust end for the last section
          scrub: true, // Smooth animation tied to scrolling
        },
      });

      // Fade-in and Fade-out animation
      tl.fromTo(
        section,
        { opacity: 0, x: 100 }, // Start off-screen to the right
        { opacity: 1, x: 0, duration: 1.5 } // Fully visible
      ).to(section, { opacity: 0, x: -100, duration: 1.5 }); // Fade out to the left
    });

    ScrollTrigger.refresh(); // Recalculate trigger positions
  }, []);

  return (
    <div className="home">
        <div className="welcome-section">
            <h1>About Nick</h1>
            <h3>Outside of being a developer, I am:</h3>
      {contentData.map((content, idx) => (
        <div
          className="section"
          key={idx}
          ref={(el) => (sectionsRef.current[idx] = el)}
        >
          <div className="content">
            <h1>{content.title}</h1>
            <img src={content.image} alt={content.title} />
            <p>{content.description}</p>
          </div>
        </div>
      ))}
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Nick;