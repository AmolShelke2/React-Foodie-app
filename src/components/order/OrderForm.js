import React, { useState } from 'react';

const OrderForm = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPhoneNumberInput, setUserPhoneNumber] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userFoodInput, setUserFoodInput] = useState('');

  // Input Hanlders
  const userNameChangeHandler = e => {
    const inputVal = e.target.value;
    setUserNameInput(inputVal);
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

    validateNameInput(userNameInput);
    validatePhoneNumber(userPhoneNumberInput);
    validateEmail(userEmailInput);

    setUserNameInput('');
    setUserEmailInput('');
    setUserPhoneNumber('');
    setUserFoodInput('');
  };

  // Input Validator functions
  const validateNameInput = input => {
    if (input === '') {
      alert('Username cannnot be empty');
    }
  };

  const validatePhoneNumber = input => {
    if (input === '') {
      alert('Please Enter Your Phone Number');
    } else if (input.length < 10 || input.length > 10) {
      alert('Please Enter a valid Number');
    }
  };

  const validateEmail = input => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(mailFormat)) {
      alert('Email address is valid');
    } else if (input === '') {
      alert('please entered a email address');
    } else {
      alert('You have Entered Invalid Email address');
    }
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
          type="email"
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
