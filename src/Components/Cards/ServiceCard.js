import React from 'react';
import Button from '../Buttons/Button';
import './ServiceCard.css';

const ServiceCard = (props) => {
  return (
    <div className="ServiceCard" onClick={()=>props.onClick()}>
        <h3>{props.title}</h3>
        <p className='description'>{props.children}</p>
        <Button className="service-button">Read More</Button>
    </div>
  );
}

export default ServiceCard;
