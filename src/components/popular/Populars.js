import React from 'react';
import './Populars.css';

import PopularItem from './PopularItem';

// images
import popular1 from '../../../src/images/popular-1.jpg';
import popular2 from '../../../src/images/popular-2.jpg';
import popular3 from '../../../src/images/popular-3.jpg';
import popular4 from '../../../src/images/popular-4.jpg';
import popular5 from '../../../src/images/popular-5.jpg';
import popular6 from '../../../src/images/popular-6.jpg';

const Populars = () => {
  const popularFoods = [
    {
      title: 'Tasty burger',
      price: '$5 -20',
      imageSource: popular1,
      id: 'p1',
    },

    {
      title: 'Tasty cakes',
      price: '$5 -20',
      imageSource: popular2,
      id: 'p2',
    },

    {
      title: 'Tasty Snacks',
      price: '$5 -20',
      imageSource: popular3,
      id: 'p3',
    },

    {
      title: 'Tasty Cupcakes',
      price: '$5 -20',
      imageSource: popular4,
      id: 'p4',
    },

    {
      title: 'cold drinks',
      price: '$5 -20',
      imageSource: popular5,
      id: 'p5',
    },

    {
      title: 'cold ice-cream',
      price: '$5 -20',
      imageSource: popular6,
      id: 'p6',
    },
  ];

  return (
    <section className="popular" id="popular">
      <h1 className="heading">
        Most <span>popular</span> foods
      </h1>

      <div className="box-container">
        {popularFoods.map(popularFood => (
          <PopularItem
            title={popularFood.title}
            price={popularFood.price}
            image={popularFood.imageSource}
            key={popularFood.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Populars;
