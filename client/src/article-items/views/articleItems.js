import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleItems = ({id, title, archive, date, readTimes, abstract}) => {
  return (
    <div className="article-items">
      <h3><Link to={`/articleinfo/${id}`}>{title}</Link></h3>
      <ul className="article-items-ul">
        <li>{`阅读次数：${readTimes}`}</li>
        <li>{`归档：${archive}`}</li>
        <li>{`日期：${date}`}</li>
      </ul>
      <p>{abstract}</p>
      <button><Link to={`/articleinfo/${id}`}>阅读全文</Link></button>
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