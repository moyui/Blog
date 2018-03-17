import React from 'react';

import header from '../../image/header.jpg'

const AboutMe = () => {
  return (
    <React.Fragment>
      <img className="my-header-img" src={header} />
      <h2>moyui末御</h2>
      <p>introduction</p>
      <ul>
        <li><a href="https://github.com/moyui"><img /></a></li>
      </ul>
    </React.Fragment>
  );
};

export {AboutMe};