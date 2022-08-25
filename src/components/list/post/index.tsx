import React from 'react';

import type { PostProps } from './index.d';

const Post = (props: PostProps) => {
  return (
    <section>
      <div>
        <img src={props.image} alt="post-image"></img>
      </div>
      <div>
        <h5>{props.title}</h5>
        <div>
          <span>{props.pageView}</span>
          <span>{props.createDate}</span>
          <span>{props.updateDate}</span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Post);
