import React from 'react';

import './OrderForm.css';

const OrderForm = () => {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputBox">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </div>

      <div className="inputBox">
        <input type="number" placeholder="phone number" />
        <input type="text" placeholder="food name" />
      </div>

      <textarea placeholder="address" cols="30" rows="10"></textarea>

      <button type="submit" className="btn">
        Order now
      </button>
    </form>
  );
};

export default OrderForm;
