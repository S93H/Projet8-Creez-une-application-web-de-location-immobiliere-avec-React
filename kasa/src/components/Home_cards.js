// Import de la bibliothèque React.
import React from 'react';
// Import du composant "Card".
import Card from './Cards';
// Import de la bibliothèque React Router pour utiliser le composant de lien "Link".
import { Link } from 'react-router-dom';
// Import des données de cartes à partir d'un fichier JSON (data.json).
import cardsData from './data.json';

function Home_cards() {

    return (
        <div className="Cards_container">
            {cardsData.map((card) => (
               // Lien vers la page de détail du logement correspondant à l'ID de la carte.
                <Link to={`/Housing/${card.id}`} className='card-link' key={card.id}>
                <div className="card" style={{ backgroundImage: `url(${card.cover})` }}>
                  <div className="card-overlay"></div>
                  <h2>{card.title}</h2>
                </div>
              </Link>
            ))}
        </div>
    );
}

export default Home_cards;