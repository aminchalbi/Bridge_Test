import React from 'react';
import './styles/ContactForm.css';

const ContactForm = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Write your message here"></textarea>
                <button type="submit">Send the message</button>
            </form>
            <div className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </div>
        </div>
    );
};

export default ContactForm;
