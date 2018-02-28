import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

const ArticleItems = ({title, archive, date, readTimes, abstract, link}) => {
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

ArticleItems.propTypes = {
  title: PropTypes.string,
  archive: PropTypes.string,
  date: PropTypes.string,
  readTimes: PropTypes.string,
  abstract: PropTypes.string,
}


export {ArticleItems};