import React, { useState } from 'react';

const OrderForm = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPhoneNumberInput, setUserPhoneNumber] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userFoodInput, setUserFoodInput] = useState('');

  const userNameChangeHandler = e => {
    setUserNameInput(e.target.value);
  };

  const userPhoneNumberChangeHandler = e => {
    setUserPhoneNumber(e.target.value);
  };

  const userEmailChangeHandler = e => {
    setUserEmailInput(e.target.value);
  };

  const userFoodChangeHandler = e => {
    setUserFoodInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    setUserNameInput('');
    setUserEmailInput('');
    setUserFoodInput('');
    setUserPhoneNumber('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputBox">
        <label>name</label>
        <input
          type="text"
          value={userNameInput}
          onChange={userNameChangeHandler}
        />
      </div>

      <div className="inputBox">
        <label>Phone</label>
        <input
          type="number"
          value={userPhoneNumberInput}
          onChange={userPhoneNumberChangeHandler}
        />
      </div>

      <div className="inputBox">
        <label>Email</label>
        <input
          type="text"
          value={userEmailInput}
          onChange={userEmailChangeHandler}
        />
      </div>

      <div className="inputBox">
        <label>Food</label>
        <input
          type="text"
          value={userFoodInput}
          onChange={userFoodChangeHandler}
        />
      </div>

      <button type="submit" className="btn" onSubmit={submitHandler}>
        order now
      </button>
    </form>
  );
};

export default OrderForm;
