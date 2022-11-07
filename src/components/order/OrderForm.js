import React from 'react';

const OrderForm = () => {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Tell us your favorite food and we will deliver it to you!</p>
      <div className="inputBox">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </div>

      <div className="inputBox">
        <input type="number" placeholder="phone number" />
        <input type="text" placeholder="food name" />
      </div>

      <button type="submit" className="btn">
        Order now
      </button>
    </form>
  );
};

export default OrderForm;
