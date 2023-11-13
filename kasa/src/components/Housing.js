// Import de la bibliothèque React ainsi que des composants et dépendances nécessaires.
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import SlideShow from './SlideShow';
import '../styles/Housing.css';
import Star1 from '../assets/star-active 3.png';
import Star2 from '../assets/star-inactive 1.png';
import cardsData from './data.json';
// Hooks pour gérer les paramètres d'URL et la navigation
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from './collapse';


function Housing() {
    // Récupération de l'ID de la carte depuis les paramètres d'URL.
    const { id } = useParams();
    // Hook pour gérer la navigation.
    const navigate = useNavigate();
    // Hook pour gérer l'état de la carte sélectionnée.
    const [selectedCard, setSelectedCard] = useState(null);
    // Utilisation de "useEffect" pour charger les détails de la carte en fonction de son ID.
    useEffect(() => {
        // J'utilise find() pour recherche un carte spécifique dans cardsData
        const card = cardsData.find((card) => card.id === id);
         // Si une carte correspondant à l'ID est trouvée dans cardsData , je défini cette carte comme la carte sélectionnée.
        if (card) {
            setSelectedCard(card);
        } else {
            // Sinon Redirection vers la page d'erreur si la carte n'est pas trouvée.
            navigate('/error');
        }
    }, [id, navigate]);

    //--------------------------------------------------------------//
    // Images à afficher dans le diaporama (images de la carte).
    const images = selectedCard ? selectedCard.pictures : [];
    // Fonction pour générer les étoiles de notation en fonction de la note.
    const generateStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            const starImg = i <= rating ? Star1 : Star2; // Star1 pour les étoiles colorées, Star2 pour les étoiles grises
            // J'utilise push pour ajouter l'élément à la fin du tableau
            stars.push(<img key={i} src={starImg} alt="Étoile" />);
        }

        return stars;
    };
    // Note par défaut si la carte n'a pas de note.
    const defaultRating = 3;
    // Si selectedCard est défini (c'est-à-dire, il existe une carte sélectionnée), alors l'expression prend la valeur de selectedCard.rating. 
    const rating = selectedCard ? selectedCard.rating : defaultRating;


    return (
        <div>
            <Nav />
            <SlideShow images={images} />
            <div className='Descriptif'>
                <div className='block'>
                    <div className='part1'>
                        {/* Partie 1 : Affichage du titre, de l'emplacement et des tags de la carte. */}
                        <h2>{selectedCard ? selectedCard.title : ''}</h2>
                        {/* Affiche le titre de la carte s'il existe, sinon une chaîne vide. */}
                        <p>{selectedCard ? `${selectedCard.location}` : ''}</p>
                        {/* Affiche l'emplacement de la carte s'il existe, sinon une chaîne vide. */}
                        <div className='tags'>
                            {/* Affiche les tags (mots-clés) de la carte s'ils existent. */}
                            {selectedCard && selectedCard.tags && selectedCard.tags.map((tag, index) => (
                                <div className='tag' key={index}>{tag}</div>
                            ))}
                            {/* Utilise map pour afficher chaque tag. */}
                        </div>
                    </div>
                    <div className='part2'>
                        {/* Partie 2 : Affichage du nom de l'hôte, de l'image de l'hôte et de la notation de la carte. */}
                        <div className='name'><p>{selectedCard ? selectedCard.host.name : ''}</p>
                            {/* Affiche le nom de l'hôte de la carte s'il existe, sinon une chaîne vide. */}
                            <div className='circle'>
                                <img src={selectedCard ? selectedCard.host.picture : ''} alt="image de l'hôte" />
                                {/* Affiche l'image de l'hôte s'il existe, sinon une chaîne vide. */}
                            </div>
                        </div>

                        <div className='rating'>
                            {/* Affiche la notation de la carte à l'aide de la fonction "generateStars". */}
                            {generateStars(rating)}
                        </div>
                    </div>
                </div>
                <div className='description_equipements'>
                {/* Section pour afficher la description et les équipements de la carte. */}
                    <Collapse title="Description" content={selectedCard ? selectedCard.description : ''} />
                    {/* Utilise le composant "Collapse" pour afficher la description de la carte. */}
                    <Collapse title="Équipements" content={selectedCard ? selectedCard.equipments : []} />
                    {/* Utilise le composant "Collapse" pour afficher la liste des équipements. */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Housing;
