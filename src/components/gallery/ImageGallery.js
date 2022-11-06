import React from 'react';

import './ImageGallery.css';

import ImageGalleryItem from './ImageGalleryItem';

// Images
import image1 from '../../images/gallery-1.jpg';
import image2 from '../../images/gallery-2.jpg';
import image3 from '../../images/gallery-3.jpg';
import image4 from '../../images/gallery-4.jpg';
import image5 from '../../images/gallery-5.jpg';
import image6 from '../../images/gallery-6.jpg';
import image7 from '../../images/gallery-7.jpg';
import image8 from '../../images/gallery-8.jpg';
import image9 from '../../images/gallery-9.jpg';

const ImageGallery = () => {
  const imageGalleryData = [
    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image1,
      id: 'g1',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image2,
      id: 'g2',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image3,
      id: 'g3',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image4,
      id: 'g4',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image5,
      id: 'g5',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image6,
      id: 'g6',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image7,
      id: 'g7',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image8,
      id: 'g8',
    },

    {
      title: 'tasty food',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, animi!',
      image: image9,
      id: 'g9',
    },
  ];

  return (
    <section className="gallery">
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
