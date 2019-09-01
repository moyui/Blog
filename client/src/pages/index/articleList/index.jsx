import React from 'react';
import { Link } from 'react-router-dom';

import Item from './item/index';

export default class ArticleList extends React.Component {
  render() {
    const { articleList = [] } = this.props;

    return (
      <ul>
        {articleList.map(item => {
          <Link to={item.url}>
            <Item {...item} key={item.id} />;
          </Link>;
        })}
      </ul>
    );
  }
}
