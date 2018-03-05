import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleItems = ({id, title, archive, date, readTimes, abstract}) => {
  return (
    <div>
      <h3><Link to={`/articleInfo/${id}`}>{title}</Link></h3>
      <p>{readTimes}</p>
      <p>{archive}</p>
      <p>{date}</p>
      <p>{abstract}</p>
      <button><Link to={`/articleInfo/${id}`}>阅读全文</Link></button>
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