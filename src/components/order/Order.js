import React from 'react';

import './styles.css';
import OrderForm from './OrderForm';

// Image
import OrderImage from '../../images/order-img.jpg';

const Order = () => {
  return (
    <section className="order" id="order">
      <h1 className="heading">
        Order <span>Now</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src={OrderImage} alt="order now " />
        </div>

        <OrderForm />
      </div>
    </section>
  );
};

export default Order;
