import React from 'react';

const PopularItem = props => {
  return (
    <div className="box">
      <span className="price">{props.price}</span>
      <img src={props.image} alt="Popular Item" />
      <h3>{props.title}</h3>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <a href="#!" className="btn">
        order now
      </a>
    </div>
  );
};

export default PopularItem;
