import React from 'react';
import { Link, Route } from 'react-router-dom';

const ArticleItems = () => {
  const {title, archive, date, readTimes, abstract, link} = this.props;

  return (
    <div>
      <h3><Link to={link}>{title}</Link></h3>
      <p>{readTimes}</p>
      <p>{archive}</p>
      <p>{date}</p>
      <p>{abstract}</p>
      <button><Link to={link}>阅读全文</Link></button>
      <Route exact path={link} />
    </div>
  );
};

export {ArticleItems};