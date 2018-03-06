import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav-ul">
      <li><Link to="/home">首页</Link></li>
      <li><Link to="/articleinfo">文章</Link></li>
      <li><Link to="/archive">归档</Link></li>
    </ul>
  )
};

export default NavBar;