import React, { useState } from 'react';
import arrowRight from '../assets/arrow_forward_ios-24px 1.png';
import arrowLeft from '../assets/arrow_back_ios-24px 1.png';

function SlideShow({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = images.length;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };


    return (
        <div className="SlideShow">
            <img className='Slide' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

            {totalSlides > 1 && (
                <div>
                    <img className='arrowRight' src={arrowRight} alt="Précedent" onClick={nextSlide}/>
                    <img className='arrowLeft' src={arrowLeft} alt="Suivant" onClick={prevSlide}/>
                </div>
            )}

            {totalSlides > 1 && (
                <p className='SlideNumber'>
                    {currentSlide + 1}/{totalSlides}
                </p>
            )}
        </div>

    )
}

export default SlideShow;