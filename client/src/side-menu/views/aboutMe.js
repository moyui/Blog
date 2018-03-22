import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faWeibo from '@fortawesome/fontawesome-free-brands/faWeibo';

import header from '../../image/header.jpg'

const AboutMe = () => {
  return (
    <React.Fragment>
      <img className="my-header-img" src={header} />
      <h2>moyui末御</h2>
      <p>平凡的前端学习者</p>
      <ul className="my-link">
        <li><a href="https://github.com/moyui"><FontAwesomeIcon icon={faGithub} className="fa-2x my-icon"/></a></li>
        <li><a href="https://weibo.com/u/5685710194?refer_flag=1001030201_"><FontAwesomeIcon icon={faWeibo} className="fa-2x my-icon"/></a></li>
      </ul>
    </React.Fragment>
  );
};

export {AboutMe};