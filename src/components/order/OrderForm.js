import React, { useEffect, useState } from 'react';

const OrderForm = () => {
  const initalValues = {
    username: '',
    userPhone: '',
    email: '',
    userFood: '',
  };

  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChangeHandler = e => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initalValues);
    }
  }, [formErrors]);

  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.userPhone) {
      errors.phoneNumber = 'Phone number is required';
    } else if (values.userPhone.length < 10 || values.userPhone.length > 10) {
      errors.phoneNumber = 'Enter a valid phone number';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid format';
    }

    if (!values.userFood) {
      errors.userFood = 'Add a food';
    }

    return errors;
  };

  return (
    <div className="order-form">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="text success">
          Thanks for ordering! but it's just a demo App.
        </p>
      ) : (
        console.log({ ...formValues })
      )}

      <form onSubmit={submitHandler}>
        <div className="inputBox">
          <label>name</label>
          <input
            type="text"
            value={formValues.username}
            onChange={inputChangeHandler}
            name="username"
          />
          <p>{formErrors.username}</p>
        </div>

        <div className="inputBox">
          <label>Phone</label>
          <input
            type="number"
            value={formValues.userPhone}
            onChange={inputChangeHandler}
            name="userPhone"
          />
          <p>{formErrors.phoneNumber}</p>
        </div>

        <div className="inputBox">
          <label>Email</label>
          <input
            type="email"
            value={formValues.email}
            onChange={inputChangeHandler}
            name="email"
          />
          <p>{formErrors.email}</p>
        </div>

        <div className="inputBox">
          <label>Food</label>
          <input
            type="text"
            value={formValues.userFood}
            onChange={inputChangeHandler}
            name="userFood"
          />
          <p>{formErrors.userFood}</p>
        </div>

        <button type="submit" className="btn" onSubmit={submitHandler}>
          order now
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
