import React from 'react';

import './styles.css';

// The image gallery data
import { imageGalleryData } from '../Data';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        Our food <span>gallery</span>
      </h1>

      <div className="box-container">
        {imageGalleryData.map(imageGallery => (
          <ImageGalleryItem
            key={imageGallery.id}
            title={imageGallery.title}
            text={imageGallery.text}
            image={imageGallery.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
