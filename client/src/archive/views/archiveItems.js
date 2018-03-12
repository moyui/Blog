import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveItems = ({name, list}) => {
  return (
    <div>
      <li><Link to={`/archive/${name}`}>{name}</Link></li>
      <ul>
        {
          list.map((item) => {
            const {id, title} = item;
            <li key={id}><Link to={`/articleinfo/${id}`}>{title}</Link></li>
          })
        }
      </ul>
      <button><Link>查看更多</Link></button>
    </div> 
  );
};

export {ArchiveItems};
