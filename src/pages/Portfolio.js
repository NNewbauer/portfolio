import React, { useState, useEffect } from 'react';
import '../styles.css';

function Portfolio() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('Good Morning');
        } else if (hour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <p>Welcome to Nicholas Newbauer's Portfolio!</p>
        </div>
    );
}

export default Portfolio;