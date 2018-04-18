import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faWeibo, faBook } from '@fortawesome/fontawesome-free-brands';
import fabook from '@fortawesome/fontawesome-free-solid/faBook';

import header from '../../image/header.jpg'

const AboutMe = () => {
  const classPerfix = 'side-bar';

  return (
    <React.Fragment>
      <img className={`${classPerfix} ${classPerfix}-img`} src={header}/>
      <h3 className={`${classPerfix}`}>{'moyui末御'}</h3>
      <p className={`${classPerfix}`}>{'平凡的前端学习者'}</p>
      <ul className={`${classPerfix} ${classPerfix}-link`}>
        <li><a href="https://github.com/moyui"><FontAwesomeIcon icon={faGithub} className={`fa-2x ${classPerfix}-icon`}/></a></li>
        <li><a href="https://weibo.com/u/5685710194?refer_flag=1001030201_"><FontAwesomeIcon icon={faWeibo} className={`fa-2x ${classPerfix}-icon`}/></a></li>
        <li><a href="https://www.zhihu.com/people/gao-xi-yu-44/activities"><FontAwesomeIcon icon={fabook} className={`fa-2x ${classPerfix}-icon`}/></a></li>
      </ul>
      <div className={`${classPerfix}`}>
        <Link to={'/archive'} className={`${classPerfix}`}>
          <span>{'文章总数：'}</span><span></span>
        </Link>
        <Link to={'/'} className={`${classPerfix}`}>
          <span>{'分类：'}</span><span></span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export {AboutMe};