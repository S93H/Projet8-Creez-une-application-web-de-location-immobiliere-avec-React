import React from 'react';
import Card from './Cards';
import { Link } from 'react-router-dom';
import cardsData from './data.json';

function Home_cards() {

    return (
        <div className="Cards_container">
            {cardsData.map((card) => (
                <Link to={`/Housing/${card.id}`} className='card-link' key={card.id}>
                <div className="card" style={{ backgroundImage: `url(${card.cover})` }}>
                  <h2>{card.title}</h2>
                </div>
              </Link>
            ))}
        </div>
    );
}

export default Home_cards;