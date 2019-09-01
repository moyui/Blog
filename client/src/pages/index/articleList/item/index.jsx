import React from 'react';

export default function ArticleItem(props) {
  return (
    <li>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      <span>日期： {props.date}</span>
    </li>
  );
}
