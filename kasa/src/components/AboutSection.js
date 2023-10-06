import React, {useState} from 'react';
import '../styles/About.css';
import arrow from '../assets/arrow.png'


function AboutSection({ section }) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isArrowRotated, setIsArrowRotated] = useState(false);
  
    const toggleContent = () => {
      setIsContentVisible(!isContentVisible);
      setIsArrowRotated(!isArrowRotated);
    };
  
   
    return (
        <div className="AboutSection">
          <div className="header">
            <p>{section.title}</p>
            <div className={`arrow ${isContentVisible ? 'rotate' : ''}`} onClick={toggleContent}>
              <img src={arrow} alt="flèche" />
            </div>
          </div>
          <div className={`content ${isContentVisible ? 'open' : ''}`}>
            <p>{section.content}</p>
          </div>
        </div>
      );
  }
export default AboutSection;