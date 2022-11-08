import React, { useState } from 'react';

import loaderImg from '../../images/loader.gif';

import './styles.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  loader();

  return (
    <div className={isLoading ? 'loader' : 'loader fade-out'}>
      <img src={loaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
