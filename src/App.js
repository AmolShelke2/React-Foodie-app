import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Specials from './components/speciality/Specials';
import Populars from './components/popular/Populars';
import Steps from './components/steps/Steps';
import ImageGallery from './components/gallery/ImageGallery';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Home />
      <Specials />
      <Populars />
      <Steps />
      <ImageGallery />
    </div>
  );
};

export default App;
