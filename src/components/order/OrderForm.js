import React, { useState } from 'react';

const OrderForm = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPhoneNumberInput, setUserPhoneNumber] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userFoodInput, setUserFoodInput] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputBox">
        <label>name</label>
        <input type="text" value={userNameInput} />
      </div>

      <div className="inputBox">
        <label>Phone</label>
        <input type="number" value={userPhoneNumberInput} />
      </div>

      <div className="inputBox">
        <label>Email</label>
        <input type="text" value={userEmailInput} />
      </div>

      <div className="inputBox">
        <label>Food</label>
        <input type="text" value={userFoodInput} />
      </div>

      <button type="submit" className="btn">
        order now
      </button>
    </form>
  );
};

export default OrderForm;
