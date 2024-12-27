import React from "react";
import "./styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Med Amine Chalbi</h3>
        <p>3ème E-Business</p>
        <p>Faculté ESEN</p>
      </div>
      <div className="social-links">
        <p>Suivez-moi :</p>
        <a href="https://www.facebook.com/med.aminchalbi" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://github.com/aminchalbi" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/med-amine-chalbi-028a31337/" target="_blank" rel="noopener noreferrer">
         Linkdin
        </a>
      </div>
      <div className="footer-quote">
        <p>merci the bridge !</p>
      </div>
    </footer>
  );
};

export default Footer;
