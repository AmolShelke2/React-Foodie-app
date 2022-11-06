import React from 'react';

import './Specials.css';
import SpecialItem from './Specialtem';

// Special images
import special1 from '../../../src/images/special-img-1.jpg';
import special2 from '../../../src/images/special-img-2.jpg';
import special3 from '../../../src/images/special-img-3.jpg';
import special4 from '../../../src/images/special-img-4.jpg';
import special5 from '../../../src/images/special-img-5.jpg';
import special6 from '../../../src/images/special-img-6.jpg';

// special icons
import specialIcon1 from '../../../src/images/s-1.png';
import specialIcon2 from '../../../src/images/s-2.png';
import specialIcon3 from '../../../src/images/s-3.png';
import specialIcon4 from '../../../src/images/s-4.png';
import specialIcon5 from '../../../src/images/s-5.png';
import specialIcon6 from '../../../src/images/s-6.png';

const Specials = () => {
  const specials = [
    {
      title: 'Tasty Burger',
      image: special1,
      specialIcon: specialIcon1,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's1',
    },

    {
      title: 'Tasty Pizza',
      image: special2,
      specialIcon: specialIcon2,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's2',
    },

    {
      title: 'Cold Ice Cream ',
      image: special3,
      specialIcon: specialIcon3,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's3',
    },

    {
      title: 'Cold Drinks',
      image: special4,
      specialIcon: specialIcon4,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's4',
    },

    {
      title: 'Tasty sweets',
      image: special5,
      specialIcon: specialIcon5,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's5',
    },

    {
      title: 'Healthy Breakfast',
      image: special6,
      specialIcon: specialIcon6,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum numquam porro, animi impedit praesentium provident officiis aut commodi autem!',
      id: 's6',
    },
  ];

  return (
    <section className="speciality">
      <h1 className="heading">
        our <span>Speciality</span>
      </h1>

      <div className="box-container">
        {specials.map(special => (
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
