// Importation de la bibliothèque React
import React from 'react';
// Importation des composants nécessaires
import Nav from './Nav';
import Banner from './Banner';
import '../styles/Home.css';
import Home_cards from './Home_cards';
import Footer from './Footer';
import image1 from '../assets/IMG.png'

export default function Home() {
    return (
        // Conteneur principal de la page d'accueil, avec une classe CSS 'marge'
        <div className='marge'>
            <Nav />
            <Banner backgroundImage={image1} className="Bannière homeBanner"/>
            <Home_cards />
            <Footer />
            
        </div>

    )
}