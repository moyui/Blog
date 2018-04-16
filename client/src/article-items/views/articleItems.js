import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faFolderOpen, faAngleRight } from '@fortawesome/fontawesome-free-solid';

const ArticleItems = (props) => {
  const { id, title, archive, date, readTimes, abstract, clickCount } = props;

  return (
    <div className="article-item">
      <h3 className="article-item-title"  onClick={clickCount.bind(this, event, id)}>
        <Link to={`/articleinfo/${id}`}>
          {title}
        </Link>
      </h3>
      <div>
        <span className="article-item-readtimes">
          <FontAwesomeIcon icon={faEye} />
          {`阅读次数：${readTimes}`}
        </span>
        <span className="article-item-date">
          <FontAwesomeIcon icon={faCalendarAlt} />
          {`创建日期：${date}`}
        </span>
        <span className="article-item-archive">
          <FontAwesomeIcon icon={faFolderOpen} />
          {`归档于：${archive}`}
        </span>
      </div>
      <p className="article-item-abstract">{abstract}</p>
      <button className="article-item-all" onClick={clickCount.bind(this, event, id)}>
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
  readTimes: PropTypes.number,
  abstract: PropTypes.string,
}

export {ArticleItems};