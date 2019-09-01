import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import {
  faCalendarAlt,
  faEye,
  faFolderOpen,
  faAngleRight
} from '@fortawesome/fontawesome-free-solid';

const Content = styled.div`
  padding: 10px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArticleItems = props => {
  const classPerfix = 'article-item';

  const { id, title, archive, date, readTimes, abstract, clickCount } = props;

  return (
    <Content>
      <Header>
        <h3
          className={`${classPerfix}-title`}
          onClick={clickCount.bind(this, id)}
        >
          <Link to={`/articleinfo/${id}`}>{title}</Link>
        </h3>
        <div className={`${classPerfix}-meta`}>
          <span className={`${classPerfix}-readtimes`}>
            <FontAwesomeIcon icon={faEye} />
            {`阅读次数：${readTimes}`}
          </span>
          <span className={`${classPerfix}-date`}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {`创建日期：${date}`}
          </span>
          <span className={`${classPerfix}-archive`}>
            <FontAwesomeIcon icon={faFolderOpen} />
            {`归档于：${archive}`}
          </span>
        </div>
      </Header>
      <div className={`${classPerfix}-body`}>
        <p className={`${classPerfix}-abstract`}>{abstract}</p>
        <Link to={`/articleinfo/${id}`}>
          <button
            className={`${classPerfix}-button`}
            onClick={clickCount.bind(this, id)}
          >
            {'阅读全文'}
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </Link>
      </div>
    </Content>
  );
};

ArticleItems.propTypes = {
  title: PropTypes.string,
  archive: PropTypes.string,
  date: PropTypes.string,
  readTimes: PropTypes.number,
  abstract: PropTypes.string
};

export { ArticleItems };
