import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <header>
      <a href="#!" className="logo">
        <i className="fas fa-utensils"></i>Foodie
      </a>

      <div
        id="menu-bar"
        className="fas fa-bars"
        onClick={showAndHideHandler}
      ></div>

      <nav className={show ? 'navbar active' : 'navbar'} id="nav">
        <a href="#home">home</a>
        <a href="#specials">speciality</a>
        <a href="#popular">popular</a>
        <a href="#gallery">gallery</a>
        <a href="#order">order</a>
      </nav>
    </header>
  );
};

export default Header;
