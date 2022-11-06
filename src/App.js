import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
