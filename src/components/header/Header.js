import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };

  return (
    <header>
      <a href="#!" className="logo">
        <i className="fas fa-utensils"></i>Food
      </a>

      <div
        id="menu-bar"
        className="fas fa-bars"
        onClick={showAndHideHandler}
      ></div>

      <nav className={show ? "navbar active" : "navbar"} id="nav">
        <a href="#!">home</a>
        <a href="#!">speciality</a>
        <a href="#!">popular</a>
        <a href="#!">preview</a>
        <a href="#!">order</a>
      </nav>
    </header>
  );
};

export default Header;
