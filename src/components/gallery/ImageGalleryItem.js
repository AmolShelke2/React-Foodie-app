import React from 'react';

import './ImageGalleryItem.css';

const ImageGalleryItem = props => {
  return (
    <div className="box">
      <img src={props.image} alt="gallery item" />
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>

        <a href="#!" className="btn">
          order now
        </a>
      </div>
    </div>
  );
};

export default ImageGalleryItem;
