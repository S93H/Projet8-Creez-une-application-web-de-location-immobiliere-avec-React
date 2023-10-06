import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import '../styles/About.css';
import Footer from './Footer';
import image2 from '../assets/banniere2.png';
import About_main from './About_main';


export default function About() {
    return (
        <div className='marge'>
            <Nav />
            <Banner background={image2} className="Bannière aboutBanner"/>
            <About_main />
            <Footer />
            
        </div>

    )
}