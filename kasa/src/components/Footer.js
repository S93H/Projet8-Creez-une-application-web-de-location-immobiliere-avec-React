import React from 'react';
import '../styles/Footer.css';
import KasaWhite from '../assets/KasaWhite.png';


function Footer() {
    return(
        <div className='footer'>
            <img src= {KasaWhite} alt="Kasa" />
            <p>&#169; 2020 Kasa.All rights reserved</p>
        </div>
    )
}

export default Footer;