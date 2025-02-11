import React, { useState, useRef, useEffect } from "react";
import "../styles.css"; // Ensure CSS is imported

const Dropdown = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef(null); // To dynamically adjust max-height

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen
                ? `${contentRef.current.scrollHeight}px`
                : "0px";
        }
    }, [isOpen]);

    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {title} <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            <div ref={contentRef} className="dropdown-content">
                {children}
            </div>
        </div>
    );
};

export default Dropdown;