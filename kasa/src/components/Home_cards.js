import React from 'react';
import Card from './Cards';

function Home_cards() {

    const cardsData = [
        {
            id: 1,
            title: "Titre de la location"
        },
        {
            id: 2,
            title: "Titre de la location"
        },
        {
            id: 3,
            title: "Titre de la location"
        },
        {
            id: 4,
            title: "Titre de la location"
        },
        {
            id: 5,
            title: "Titre de la location"
        },
        {
            id: 6,
            title: "Titre de la location"
        },
    ];

    return (
        <div className="Cards_container">
            {cardsData.map((card) => (
                <Card key={card.id} title={card.title} />
            ))}
        </div>
    );
}

export default Home_cards;