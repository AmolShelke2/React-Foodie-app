import React from 'react';

import homeImage from '../../../src/images/home-img.png';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Food made with love</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam
          suscipit nemo, natus assumenda, similique placeat illo distinctio
          exercitationem ea, mollitia officiis nulla vel iure illum aliquid
          eaque et accusamus?
        </p>
        <a href="#!" className="btn">
          order now
        </a>
      </div>

      <div className="image">
        <img src={homeImage} alt="home page" />
      </div>
    </section>
  );
};

export default Home;
