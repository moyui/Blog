import React from 'react';

import type { PostProps } from './index.d';

const Post = (props: PostProps) => {
  return (
    <li className="inline-flex flex-col mr-16 even:mr-0 mt-6 w-[448px] border-2 pb-2">
      <a href={props.href} target="_blank" className="flex flex-col">
        <div className="w-[444px] h-[200px]">
          <img src={props.image} className="w-full h-full object-cover" alt="post-image"></img>
        </div>
        <div className="flex flex-col items-center mt-1">
          <h5 className="text-xl text-gray-800">{props.title}</h5>
          <div className="flex flex-col w-full text-gray-600 items-end mt-1">
            <span className="mt-0.5 pr-4">更新时间：{props.updateDate}</span>
            <span className="mt-0.5 pr-4">发布时间：{props.createDate}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default React.memo(Post);
