import React, { useState, useEffect } from 'react';
import '../styles.css';

function Resume() {
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
            <div className='welcome-section'>
                <div className='spacer'></div>
                <h1>Resume</h1>
                <div className='spacer'></div>
            </div>
            <div className='spacer'></div>
            <div className='resume'>
                <h2>Education</h2>
                <h3>School: Saint Louis University</h3>
                <div className="education-flex">
                    <p className='box'>Major: Computer Science</p>
                    <p className='box'>Minor: Mathematics</p>
                </div>
                <p>Current GPA: 3.57</p>
            </div>
            <div className='spacer'></div>
        </div>
    );
}

export default Resume;