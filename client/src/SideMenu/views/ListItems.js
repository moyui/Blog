import React from 'react';
import { Link } from 'react-router-dom';


const ListItems = () => {
  return (
    <ul>
      <li><Link to="/home">首页</Link></li>
      <li><Link to="/archive">归档</Link></li>
    </ul>
  );
};

export {ListItems};