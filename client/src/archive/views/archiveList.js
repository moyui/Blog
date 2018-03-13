import React from 'react';
import { withRouter } from 'react-router-dom';

import { ArchiveItems } from './archiveItems.js';

let id = 0;

const ArchiveList = ({varieties}) => {
  return(
    <React.Fragment>
      <div>
        {
          varieties.map((item, index) => {
            <ArchiveItems 
              key={id++} 
              name={index} 
              list={item} 
            />
          })
        }
      </div>
    </React.Fragment>
  );
}

export default ArchiveList;