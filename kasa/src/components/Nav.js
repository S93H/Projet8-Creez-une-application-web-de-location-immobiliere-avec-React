import React from 'react';
import logo from '../assets/LOGO.png';
import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    return(
        <div className="kasa-nav">
            <img src={logo} alt="Kasa" className='kasa-logo' />
            <div className='kasa-nav-liens'>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>A Propos</Link>
            </div>
        </div>
    )
}
export default Nav;