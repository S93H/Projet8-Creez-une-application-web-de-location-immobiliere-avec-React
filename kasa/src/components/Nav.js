// J'importe la bibliothèque React pour créer des composants React.
import React from 'react';
// J'importe le logo depuis le dossier 'assets' de mon projet.
import logo from '../assets/LOGO.png';
// J'importe les styles CSS définis dans le fichier 'Nav.css'.
import '../styles/Nav.css';
// J'importe les fonctionnalités 'Link' et 'useLocation' de 'react-router-dom'.
import { Link, useLocation } from 'react-router-dom';

// Je déclare le composant 'Nav'.
function Nav() {
    // Je crée une variable 'location' en utilisant 'useLocation' pour obtenir des informations sur la route actuelle.
    const location = useLocation();

    return(
        <div className="kasa-nav">
            {/* J'affiche le logo de Kasa en utilisant l'image importée. */}
            <img src={logo} alt="Kasa" className='kasa-logo' />
            <div className='kasa-nav-liens'>
                {/* Je crée un lien vers la page d'accueil. La classe 'active' est ajoutée au lien si la route actuelle correspond à '/' (page d'accueil). */}
                {/* location.pathname === '/', est la condition.  */}
                {/* 'active', est la valeur qui sera attribuée à la classe CSS du lien si la condition est vraie. */}
                {/* '', est la valeur qui sera attribuée à la classe CSS si la condition est fausse.  */}
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                {/* Je crée un lien vers la page 'About'. La classe 'active' est ajoutée au lien si la route actuelle correspond à '/About'. */}
                <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>A Propos</Link>
            </div>
        </div>
    )
}
// J'exporte le composant 'Nav' pour qu'il puisse être utilisé ailleurs dans mon application.
export default Nav;