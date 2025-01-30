import React, { useEffect, useState, useRef } from "react";
import "../styles.css"; // Import styles

const NUM_TRAIL_POINTS = 35; // Adjust for smoothness

const MouseTracker = () => {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [trail, setTrail] = useState(Array(NUM_TRAIL_POINTS).fill(mousePos));
  const [color, setColor] = useState("rgba(255, 255, 255, 1)"); // Default white glow
  const [targetColor, setTargetColor] = useState("rgba(255, 255, 255, 1)"); // Where it transitions
  const requestRef = useRef(null);
  const prevPos = useRef(mousePos);

  useEffect(() => {
    let lastColorUpdate = Date.now();

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });

      // Update color every 2 seconds, but transition smoothly
      if (Date.now() - lastColorUpdate > 200) {
        lastColorUpdate = Date.now();
        const r = Math.floor(180 + Math.random() * 75);
        const g = Math.floor(180 + Math.random() * 75);
        const b = Math.floor(180 + Math.random() * 75);
        setTargetColor(`rgba(${r}, ${g}, ${b}, 1)`);

        // Gradually transition instead of an instant color change
        let steps = 20;
        let stepCount = 0;
        let interval = setInterval(() => {
          setColor((prevColor) => {
            const prevRGB = prevColor.match(/\d+/g).map(Number);
            const targetRGB = targetColor.match(/\d+/g).map(Number);
            const newColor = prevRGB.map((v, i) => v + ((targetRGB[i] - v) / steps));
            return `rgba(${Math.round(newColor[0])}, ${Math.round(newColor[1])}, ${Math.round(newColor[2])}, 1)`;
          });
          stepCount++;
          if (stepCount >= steps) clearInterval(interval);
        }, 50); // Slow transition
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [targetColor]);

  useEffect(() => {
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail.slice(1), { ...mousePos, prevX: prevPos.current.x, prevY: prevPos.current.y }];
        prevPos.current = mousePos;
        return newTrail;
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  return (
    <>
      {/* Main persistent glow */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: color, // Gradually changes color
        }}
      />

      {/* Smooth, tapering streak effect */}
      {trail.map((point, index) => {
        const dx = point.x - point.prevX;
        const dy = point.y - point.prevY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Calculate movement direction

        return (
          <div
            key={index}
            className="mouse-trail"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              background: color, // Smoothly changing color
              opacity: (NUM_TRAIL_POINTS - index) / NUM_TRAIL_POINTS, // Smooth fade
              transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${index * 0.075}, ${index * 0.075})`, // Tapers at the END
            }}
          />
        );
      })}
    </>
  );
};

export default MouseTracker;