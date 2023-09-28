import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import '../styles/About.css';
import Footer from './Footer';

import secondBannerImage from '../assets/KasaWhite.png';

export default function About() {
    return (
        <div className='marge'>
            <Nav />
            <Banner back/>
            <Footer />
            
        </div>

    )
}