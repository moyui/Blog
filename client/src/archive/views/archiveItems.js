import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveItems = ({name, list}) => {
  const classPrefix = 'archive-item';

  return (
    <div className={`${classPrefix}-content`}>
      <div className={`${classPrefix} ${classPrefix}-header`}>
        <h3 className="archive-item-title"><Link to={`/archive/${name}`}>{name}</Link></h3>
      </div>
      <div className={`${classPrefix} ${classPrefix}-body`}>
      <ol className={`${classPrefix} ${classPrefix}-list`}>
        {
          list.map((item) => {
            const {id, title} = item;
            return (<li key={id}><Link to={`/articleinfo/${id}`}>{title}</Link></li>);
          })
        }
      </ol>
      </div>
    </div> 
  );
};

export {ArchiveItems};
