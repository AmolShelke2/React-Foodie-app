import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <h1 className="heading">
        Know more <span>about us</span>
      </h1>
      <div className="share">
        <a href="#!" class="btn">
          Facebook
        </a>
        <a href="#!" class="btn">
          twitter
        </a>
        <a href="#!" class="btn">
          instagram
        </a>
        <a href="#!" class="btn">
          linkedin
        </a>
        <a href="#!" class="btn">
          Github
        </a>
      </div>

      <h1 class="credit">
        created by <span>Amol Shelke </span> | All rights reserved
      </h1>
    </section>
  );
};

export default Footer;
