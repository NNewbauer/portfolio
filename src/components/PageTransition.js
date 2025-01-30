import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";


export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setIsTransitioning(true);
        setTimeout(() => {
            navigate(path);
            setTimeout(() => setIsTransitioning(false), 1200); // Matches cube animation timing
        }, 800);
    };

    return (
        <NavigationContext.Provider value={{ isTransitioning, handleNavigation }}>
            {/* Transition Overlay for animation */}
            <div className={`transition-overlay ${isTransitioning ? "active" : ""}`}>
                {isTransitioning && (
                    <div className="cubes">
                        <div className="loop">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="item"></div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {children} {/* Renders the rest of the app */}
        </NavigationContext.Provider>
    );
};