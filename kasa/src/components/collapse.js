// J'importe la bibliothèque React et le hook "useState".
import React, { useState } from 'react';
import arrow from '../assets/arrow.png';

// Définition du composant "Collapse" qui prend deux propriétés : "title" et "content".
function Collapse({ title, content }) {
  // Utilisation du hook "useState" pour gérer l'état de visibilité du contenu de la section.
    const [isContentVisible, setIsContentVisible] = useState(false);
    // Utilisation du hook "useState" pour gérer la rotation de la flèche.
    const [isArrowRotated, setIsArrowRotated] = useState(false);
  
    // Fonction pour basculer la visibilité du contenu lorsqu'on clique sur la flèche.
    const toggleContent = () => {
      setIsContentVisible(!isContentVisible);
      setIsArrowRotated(!isArrowRotated);
    };
  
    return (
      <div className="collapse">
        <div className="header">
          <p>{title}</p>
          {/* Un élément HTML pour afficher la flèche, la classe "rotate" est ajoutée si le contenu est visible. Le clic sur cet élément appelle la fonction "toggleContent". */}
          <div className={`arrow ${isContentVisible ? 'rotate' : ''}`} onClick={toggleContent}>
            <img src={arrow} alt="flèche" />
          </div>
        </div>
        {/* La classe "open" est ajoutée si le contenu est visible. */}
        <div className={`content ${isContentVisible ? 'open' : ''}`}>
          {Array.isArray(content) ? (
            // Si "content" est un tableau, j'affiche les éléments dans une liste non ordonnée.
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            // Si "content" n'est pas un tableau, j'affiche simplement le texte.
            <p>{content}</p>
          )}
        </div>
      </div>
    );
  }

  export default Collapse;
