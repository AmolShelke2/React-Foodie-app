import React from 'react';
import './Steps.css';

import step1 from '../../../src/images/step-1.jpg';
import step2 from '../../../src/images/step-2.jpg';
import step3 from '../../../src/images/step-3.jpg';
import step4 from '../../../src/images/step-4.jpg';

import arrowRight from './arrow.png';

const Steps = () => {
  return (
    <section className="steps">
      <h2 className="heading">
        Easy <span>Steps</span>
      </h2>
      <div className="box-container">
        <div className="box">
          <img src={arrowRight} alt="arrow" className="arrow" />
          <img className="step" src={step1} alt="steps" />
          <h3>Choose your favorite food</h3>
        </div>

        <div className="box">
          <img src={arrowRight} alt="arrow" className="arrow" />
          <img className="step" src={step2} alt="steps" />
          <h3>Free and fast delivery</h3>
        </div>

        <div className="box">
          <img src={arrowRight} alt="arrow" className="arrow" />
          <img className="step" src={step3} alt="steps" />
          <h3>Easy Payment methods</h3>
        </div>

        <div className="box">
          <img className="step" src={step4} alt="steps" />
          <h3>And finnaly enjoy your meal</h3>
        </div>
      </div>
    </section>
  );
};

export default Steps;
