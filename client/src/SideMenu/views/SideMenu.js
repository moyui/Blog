import React from 'react';
import { MenuList } from './MenuList.js';
import { AboutMe } from './AboutMe.js';

const SideMenu = () => {
  return (
    <div>
      <MenuList />
      <AboutMe />
    </div>
  );
};

export default SideMenu;
