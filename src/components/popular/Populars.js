import React from 'react';

import './styles.css';

import PopularItem from './PopularItem';

// Popular Data
import { popularFoods } from '../Data';

const Populars = () => {
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
