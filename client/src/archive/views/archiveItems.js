import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveItems = ({name, list}) => {
  return (
    <div className="archive-item">
      <h3 className="archive-item-title"><Link to={`/archive/${name}`}>{name}</Link></h3>
      <ol className="archive-item-ol">
        {
          list.map((item) => {
            const {id, title} = item;
            return (<li key={id}><Link to={`/articleinfo/${id}`}>{title}</Link></li>);
          })
        }
      </ol>
      <button className="archive-item-btn"><Link to='/notfound'>查看更多</Link></button>
    </div> 
  );
};

export {ArchiveItems};
