import React from 'react';
import './AboutCard.css';

const AboutCard = (props) => {
  return (
    <div className="AboutCard">
        <img src={props.image} className='about-background-image'></img>
        <div className='about-card-overlay'></div>
        <p className='about-card-name'>{props.name}</p>
        <p  className='about-card-description'>{props.description}</p>
    </div>
  );
}

export default AboutCard;
