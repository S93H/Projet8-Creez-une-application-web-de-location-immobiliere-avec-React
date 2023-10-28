// J'importe la bibliothèque React et le hook "useState" depuis React.
import React, {useState} from 'react';
// J'importe les styles CSS spécifiques à la section "About".
import '../styles/About.css';

import arrow from '../assets/arrow.png'

// Définition du composant "AboutSection" qui prend une prop nommée "section".
function AboutSection({ section }) {
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
        <div className="AboutSection">
          <div className="header">
            <p>{section.title}</p>
            {/* Un élément HTML pour afficher la flèche, la classe "rotate" est ajoutée si le contenu est visible. Le clic sur cet élément appelle la fonction "toggleContent". */}
            <div className={`arrow ${isContentVisible ? 'rotate' : ''}`} onClick={toggleContent}>
              <img src={arrow} alt="flèche" />
            </div>
          </div>
          {/* La classe "open" est ajoutée si le contenu est visible. */}
          <div className={`content ${isContentVisible ? 'open' : ''}`}>
            <p>{section.content}</p>
          </div>
        </div>
      );
  }
export default AboutSection;