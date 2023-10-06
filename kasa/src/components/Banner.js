import React from 'react';
import '../styles/Home.css';

function Banner({backgroundImage, className}) {
    return(
        <div className= {`Bannière ${className}`}>
            {backgroundImage && <p>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner;