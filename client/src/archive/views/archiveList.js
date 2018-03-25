import React from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { ArchiveItems } from './archiveItems.js';

const ArchiveList = ({varieties}) => {
  return(
    <React.Fragment>
      <CSSTransitionGroup
        transitionName="push"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={700}
        transitionAppear={true}
        transitionAppearTimeout={1000}>
        {
          (() => {
            for (const [key, value] of varieties.entries()) { //map遍历元素
              return (
                <ArchiveItems 
                  name={key}
                  list={value}
                  key={key}
                />
              );
            }
          })()
        }
      </CSSTransitionGroup>
    </React.Fragment>
  );
}

export {ArchiveList};