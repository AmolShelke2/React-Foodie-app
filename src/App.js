import React from 'react';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Specials from './components/speciality';
import Populars from './components/popular';
import Steps from './components/steps';
import ImageGallery from './components/gallery';
import Order from './components/order';
import Footer from './components/footer';
import Loader from './components/loader';

const App = () => {
  return (
    <div className="main-container">
      <Loader />
      <Header />
      <Home />
      <Specials />
      <Populars />
      <Steps />
      <ImageGallery />
      <Order />
      <Footer />
    </div>
  );
};

export default App;
