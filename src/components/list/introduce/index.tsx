import React from 'react';
import type { IntroduceProps } from './index.d';

const Introduce = (props: IntroduceProps) => {
  return (
    <section className="flex flex-row justify-between px-16 py-10">
      <div className="w-48 h-48 overflow-hidden rounded-full">
        <img
          src={props.profilePhoto}
          className="w-full h-full object-cover"
          alt="profile-photo"
        ></img>
      </div>
      <div className="flex flex-col justify-center text-gray-600">
        <span className="text-4xl text-gray-800">I`m moyui</span>
        <div className="mt-4">
          <p className="mt-1">FE coder</p>
          <p className="mt-1">major in React, using Typescript, Antd</p>
          <p className="mt-1">
            familiar with micro-frontend by Qiankun, building inner-platform by Nest.js
          </p>
          <p className="mt-1">exploring Web3!</p>
        </div>
        <div className="flex flex-col justify-center mt-4">
          <ul className="flex flex-row justify-center w-full">
            {props.connect.map((item) => (
              <li key={item.id} className="flex-1">
                <a
                  className="w-full h-full inline-flex flex-col items-center"
                  href={item.href}
                  target={item.name === 'email' ? '_self' : '_blank'}
                >
                  <i className="w-8 h-8">{item.svg}</i>
                  <span className="text-gray-600">{item.nameCN}</span>
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
