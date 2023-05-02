import React from 'react';

import './NRLCard.css';

const Card = props => {
  return (
    <div className={`caord ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
