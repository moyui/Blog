import React from 'react';

import { ArchiveItems } from './archiveItems.js';

const ArchiveList = ({varieties}) => {
  return(
    <React.Fragment>
      <div>
        {
          varieties.map((item) => {
            <ArchiveItems key={item.id} {...item} />
          })
        }
      </div>
    </React.Fragment>
  );
}

export default ArchiveList;