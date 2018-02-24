import React from 'react';
import { Link, Route } from 'react-router-dom';

const ArticleItems = () => {
  return (
    <div>
      <h3><Link to="/">title</Link></h3>
      <p>time</p>
      <p>archive</p>
      <p>readtimes</p>
      <p>articleparts</p>
      <button><Link to="/">阅读全文</Link></button>
    </div>
  );
};

export {ArticleItems};