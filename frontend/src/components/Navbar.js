import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';  // Importation du composant Link de React Router

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-left">
                    <span className="the-bridge-text">
                        The <span className="bridge-b">B</span>ridge
                    </span>
                </div>
                {/* Section centrale pour le bouton Admin */}
                <div className="navbar-middle">
                
                    <Link to="/admin">
                        <button className="admin-button">Admin</button>
                    </Link>
                </div>
                <div className="navbar-right">
                    <img src={process.env.PUBLIC_URL + "/download.png"} alt="Logo" className="navbar-logo" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
