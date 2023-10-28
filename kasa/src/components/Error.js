// Import de la bibliothèque React.
import React from 'react';
// Import des composants nécessaires.
import Nav from './Nav';
import Footer from './Footer';
// Import des styles CSS spécifiques au composant "Error".
import '../styles/Error.css';
import ErrorImage from '../assets/404.png';
// Import de la bibliothèque React Router pour utiliser le composant de lien "Link".
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div>
            <Nav />
            <div className='Error_main'>
                <img src={ErrorImage} alt="Erreur 404" />
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error;