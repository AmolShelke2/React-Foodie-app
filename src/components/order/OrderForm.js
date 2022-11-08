import React, { useState } from 'react';

const OrderForm = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userPhoneNumberInput, setUserPhoneNumber] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userFoodInput, setUserFoodInput] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    userNameError: '',
    userPhoneNumberError: '',
    userEmailError: '',
  });

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

    const userInfoData = {
      name: userNameInput,
      phone: userPhoneNumberInput,
      email: userEmailInput,
    };

    console.log(userInfoData);

    setUserNameInput('');
    setUserEmailInput('');
    setUserPhoneNumber('');
    setUserFoodInput('');
  };

  // Input Validator functions
  const validateNameInput = input => {
    if (input === '') {
      setErrorMessages({
        ...errorMessages,
        userNameError: 'Username cannnot be empty',
      });
    }
  };

  const validatePhoneNumber = input => {
    if (input === '') {
      setErrorMessages({
        ...errorMessages,
        userPhoneNumberError: 'Please Enter Your Phone Number',
      });
    } else if (input.length < 10 || input.length > 10) {
      setErrorMessages({
        ...errorMessages,
        userPhoneNumberError: 'Please Enter a valid Phone Number',
      });
    }
  };

  const validateEmail = input => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(mailFormat)) {
    } else if (input === '') {
      setErrorMessages({
        ...errorMessages,
        userEmailError: 'Please enter a email address',
      });
    } else {
      setErrorMessages({
        ...errorMessages,
        userEmailError: 'You have entered a invalid email address',
      });
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
        <p>{errorMessages.userNameError}</p>
      </div>

      <div className="inputBox">
        <label>Phone</label>
        <input
          type="number"
          value={userPhoneNumberInput}
          onChange={userPhoneNumberChangeHandler}
        />
        <p>{errorMessages.userPhoneNumberError}</p>
      </div>

      <div className="inputBox">
        <label>Email</label>
        <input
          type="email"
          value={userEmailInput}
          onChange={userEmailChangeHandler}
        />
        <p>{errorMessages.userEmailError}</p>
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
