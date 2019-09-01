import React, { useState } from 'react';

import ArticleList from './articleList/index';

export default function Index() {
  const contact = [];
  const article = [];

  return (
    <div>
      {/* 导航栏位置<div></div> */}
      <aside>
        <h2>关于我</h2>
        <img />
        <div>昵称：moyui（末御/默羽）。英文名：Sean</div>
        <div>职业：前端开发工程师/图形学爱好者/音游er</div>
        <div>
          <span>联系我：</span>
          <div>
            {contact.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </aside>
      {/* 大pic位置 */}
      {/* <div></div> */}
      <ArticleList />
    </div>
  );
}
