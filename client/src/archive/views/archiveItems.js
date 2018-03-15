import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveItems = ({name, list}) => {
  console.log(name, list);
  return (
    <div>
      <h3><Link to={`/archive/${name}`}>{name}</Link></h3>
      <ul>
        {
          list.map((item) => {
            const {id, title} = item;
            return (<li key={id}><Link to={`/articleinfo/${id}`}>{title}</Link></li>);
          })
        }
      </ul>
      <button><Link to='/notfound'>查看更多</Link></button>
    </div> 
  );
};

export {ArchiveItems};
