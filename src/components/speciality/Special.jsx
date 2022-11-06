import React from 'react';
import './Special.css';

const Special = props => {
  return (
    <div className="box">
      <img src={props.image} className="image" alt="specials src" />
      <div className="content">
        <img src={props.specialIcon} alt="special src icon" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Special;
