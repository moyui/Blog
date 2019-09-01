import React from 'react';
import { withRouter } from 'react-router-dom';

import { ArchiveItems } from './archiveItems.js';

const ArchiveList = props => {
  const { varieties, clickCount } = props;
  const renderList = [];

  for (const key of varieties.keys()) {
    //map遍历元素
    renderList.push(key);
  }

  return (
    <React.Fragment>
      {renderList.map(key => {
        const value = varieties.get(key);

        return <ArchiveItems name={key} list={value} key={key} />;
      })}
    </React.Fragment>
  );
};

export { ArchiveList };
