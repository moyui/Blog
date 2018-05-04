import React from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { ArchiveItems } from './archiveItems.js';

const ArchiveList = (props) => {
  const { varieties, clickCount } = props;
  const renderList = [];

  for (const key of varieties.keys()) { //map遍历元素
    renderList.push(key);
  }

  return(
    <React.Fragment>
      <CSSTransitionGroup
        transitionName="push"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={700}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
        {
          renderList.map((key) => {
            const value = varieties.get(key);

            return (<ArchiveItems 
              name={key}
              list={value}
              key={key}
            />);
          })
        }
      </CSSTransitionGroup>
    </React.Fragment>
  );
}

export {ArchiveList};