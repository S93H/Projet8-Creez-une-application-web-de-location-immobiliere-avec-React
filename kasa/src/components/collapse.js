import React, { useState } from 'react';
import arrow from '../assets/arrow.png';

function Collapse({ title, content }) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);
  
    const toggleContent = () => {
      setIsContentVisible(!isContentVisible);
      setIsArrowRotated(!isArrowRotated);
    };
  
    return (
      <div className="collapse">
        <div className="header">
          <p>{title}</p>
          <div className={`arrow ${isContentVisible ? 'rotate' : ''}`} onClick={toggleContent}>
            <img src={arrow} alt="flèche" />
          </div>
        </div>
        <div className={`content ${isContentVisible ? 'open' : ''}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    );
  }

  export default Collapse;
