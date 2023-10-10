import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import SlideShow from './SlideShow';
import '../styles/Housing.css';
import Star1 from '../assets/star-active 3.png';
import Star2 from '../assets/star-inactive 1.png';
import arrow from '../assets/arrow.png';
import cardsData from './data.json'; 
import { useParams, useNavigate } from 'react-router-dom';

function Box({ title, content }) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
        setIsArrowRotated(!isArrowRotated);
    };

    return (
        <div className="box">
            <div className='header'>
                <p>{title}</p>
                <div className={`arrow ${isArrowRotated ? 'rotate' : ''}`} onClick={toggleContent}>
                    <img src={arrow} alt="flèche" />
                </div>
            </div>

            {isContentVisible && (
                <div className="content">
                    {title === 'Description' ? (
                        <p>{content}</p>
                    ) : (
                        <div>
                            {Array.isArray(content) ? (
                                <ul>
                                    {content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div>{content}</div>
                            )}
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

function Housing() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
      
        const card = cardsData.find((card) => card.id === id);

        if (card) {
            setSelectedCard(card);
        } else {
            navigate('/error');
        }
    }, [id, navigate]);

   
    useEffect(() => {
        if (selectedCard && selectedCard.equipments) {
            console.log("Equipements:", selectedCard.equipments);
        }
    }, [selectedCard]);
    //--------------------------------------------------------------//
    const images = selectedCard ? selectedCard.pictures : [];

    const generateStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            const starImg = i <= rating ? Star1 : Star2; // Star1 pour les étoiles colorées, Star2 pour les étoiles grises
            stars.push(<img key={i} src={starImg} alt="Étoile" />);
        }

        return stars;
    };

    const defaultRating = 3; 
    const rating = selectedCard ? selectedCard.rating : defaultRating;


    return (
        <div>
            <Nav />
            <SlideShow images={images} />
            <div className='Descriptif'>
                <div className='block'>
                    <div className='part1'>
                        <h2>{selectedCard ? selectedCard.title : ''}</h2>
                        <p>{selectedCard ? `${selectedCard.location}` : ''}</p>
                        <div className='tags'>
                            {selectedCard && selectedCard.tags && selectedCard.tags.map((tag, index) => (
                                <div className='tag' key={index}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className='part2'>
                        <div className='name'><p>{selectedCard ? selectedCard.host.name : ''}</p><div className='circle'><img src={selectedCard ? selectedCard.host.picture : ''} alt="image de l'hôte" /></div></div>
                        <div className='rating'>
                            {generateStars(rating)}
                        </div>
                    </div>
                </div>
                <div className='description_equipements'>
                    <Box title="Description" content={selectedCard ? selectedCard.description : ''} />
                    <Box title="Équipements" content={<ul>
                        {selectedCard && selectedCard.equipments && selectedCard.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>} />




                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Housing;
