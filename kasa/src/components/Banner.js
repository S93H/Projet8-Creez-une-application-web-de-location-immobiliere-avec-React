// Importation de la bibliothèque React
import React from 'react';
// Importation des styles CSS spécifiques au composant "Banner".
import '../styles/Home.css';

// Définition du composant "Banner" qui prend deux propriétés : "backgroundImage" et "className".
function Banner({backgroundImage, className}) {
    return(
        // Conteneur de la bannière avec une classe CSS "Bannière" et une classe supplémentaire définie par la propriété "className".
        <div className= {`Bannière ${className}`}>
            {/* Vérification de l'existence de l'image de fond (backgroundImage) et affichage d'un paragraphe si elle existe. */}
            {backgroundImage && <p>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner;