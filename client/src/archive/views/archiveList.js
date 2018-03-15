import React from 'react';
import { withRouter } from 'react-router-dom';

import { ArchiveItems } from './archiveItems.js';

let id = 0;

const ArchiveList = ({varieties}) => {
  return(
    <React.Fragment>
      <div>
        {
          (() => {
            for (const [key, value] of varieties.entries()) { //map遍历元素
              return (
                <ArchiveItems 
                  name={key}
                  list={value}
                />
              );
            }
          })()
        }
      </div>
    </React.Fragment>
  );
}

export {ArchiveList};