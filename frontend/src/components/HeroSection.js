import React from 'react';
import './styles/HeroSection.css';

const HeroSection = ({ title, subtitle, buttons }) => {
    return (
        <div className="hero-section">
             <div className="hero-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            </div>
            <div className="buttons">
                {buttons.map((button, index) => (
                    <button key={index} className={button.class}>
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
