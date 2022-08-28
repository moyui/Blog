import React from 'react';

import { MAIN_ICON } from '@/constants';

const Header = () => {
  return (
    <>
      <header className="flex flex-col fixed top-0 left-0 right-0 bg-gray-100">
        <ul className="flex flex-row w-[1088px] mx-auto">
          <li className="flex px-4">
            <a className="inline-flex flex-row items-center">
              <i className="w-5 h-5">{MAIN_ICON}</i>
              <span className="p-2">首页</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="h-10 w-full"></div>
    </>
  );
};

export default React.memo(Header);
