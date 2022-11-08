import React from 'react';

import './styles.css';
import SpecialItem from './Specialtem';

import { specialsData } from '../Data';

const Specials = () => {
  return (
    <section className="speciality" id="specials">
      <h1 className="heading">
        our <span>Speciality</span>
      </h1>

      <div className="box-container">
        {specialsData.map(special => (
          <SpecialItem
            title={special.title}
            image={special.image}
            specialIcon={special.specialIcon}
            text={special.text}
            key={special.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
