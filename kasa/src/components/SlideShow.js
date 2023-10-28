// J'importe les images des flèches pour la navigation du diaporama.
import React, { useState } from 'react';
import arrowRight from '../assets/arrow_forward_ios-24px 1.png';
import arrowLeft from '../assets/arrow_back_ios-24px 1.png';

// Je crée le composant SlideShow qui prend un tableau d'images en tant que propriété.
function SlideShow({ images }) {
    // Je crée un état pour suivre l'indice de la diapositive actuelle.
    const [currentSlide, setCurrentSlide] = useState(0);

    // Je calcule le nombre total de diapositives à partir de la longueur du tableau d'images.
    const totalSlides = images.length;

    // Je définis une fonction pour passer à la diapositive suivante.
    const nextSlide = () => {
        // J'incrémente l'indice de la diapositive actuelle et utilise l'opérateur modulo
        // pour boucler de la dernière diapositive à la première si nécessaire.
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };
// Je définis une fonction pour passer à la diapositive précédente.
    const prevSlide = () => {
        // Je décrémente l'indice de la diapositive actuelle et utilise l'opérateur modulo
        // pour boucler de la première diapositive à la dernière si nécessaire.
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };


    return (
        // Je crée le conteneur principal du diaporama.
        <div className="SlideShow">
            {/* J'affiche l'image de la diapositive actuelle en utilisant l'indice courant. */}
            <img className='Slide' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

        {/* Je vérifie s'il y a plus d'une diapositive pour afficher les flèches de navigation. */}
            {totalSlides > 1 && (
                <div>
                    {/* Flèche pour passer à la diapositive suivante avec l'appel de la fonction "nextSlide". */}
                    <img className='arrowRight' src={arrowRight} alt="Précedent" onClick={nextSlide}/>
                    {/* Flèche pour passer à la diapositive précédente avec l'appel de la fonction "prevSlide". */}
                    <img className='arrowLeft' src={arrowLeft} alt="Suivant" onClick={prevSlide}/>
                </div>
            )}
        {/* J'affiche le numéro de la diapositive actuelle et le nombre total de diapositives. */}
            {totalSlides > 1 && (
                <p className='SlideNumber'>
                    {currentSlide + 1}/{totalSlides}
                </p>
            )}
        </div>

    )
}

export default SlideShow;