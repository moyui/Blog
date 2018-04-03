import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faFolderOpen, faAngleRight } from '@fortawesome/fontawesome-free-solid';

const ArticleItems = ({id, title, archive, date, readTimes, abstract}) => {
  return (
    <div className="article-item">
      <h3 className="article-item-title">
        <Link to={`/articleinfo/${id}`}>
          {title}
        </Link>
      </h3>
      <ul className="article-item-ul">
        <li className="article-item-readtimes">
          <FontAwesomeIcon icon={faEye} />
          {`阅读次数：${readTimes}`}
        </li>
        <li className="article-item-date">
          <FontAwesomeIcon icon={faCalendarAlt} />
          {`创建日期：${date}`}
        </li>
        <li className="article-item-archive">
          <FontAwesomeIcon icon={faFolderOpen} />
          {`归档于：${archive}`}
        </li>
      </ul>
      <br />
      <p className="article-item-abstract">{abstract}</p>
      <br />
      <button className="article-item-all">
        <Link to={`/articleinfo/${id}`}>
          {'阅读全文'}
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </button>
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