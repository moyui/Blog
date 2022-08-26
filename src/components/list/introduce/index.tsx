import React from 'react';
import type { IntroduceProps } from './index.d';

const Introduce = (props: IntroduceProps) => {
  return (
    <section className="flex flex-row justify-center">
      <div className="w-24 h-24 rounded-3xl overflow-hidden">
        <img src={props.profilePhoto} alt="profile-photo"></img>
      </div>
      <div className="flex flex-col justify-center">
        <span>moyui</span>
        <div>
          <p>fe coder</p>
          <p>major in React, using Typescript, Antd</p>
          <p>familiar with micro-frontend by Qiankun, building inner-platform by Nest.js</p>
          <p>exploring Web3!</p>
        </div>
        <div>
          <div>connect me</div>
          <ul>
            {props.connect.map((item) => (
              <li key={item.id}>
                <a href={item.href}>
                  <i>{item.svg}</i>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Introduce);
