import React from 'react';

function NavBars(props) {
  const { navBars = [] } = props;

  return (
    <nav>
      {navBars.map((item, index) => (
        <a key={index}>{item}</a>
      ))}
    </nav>
  );
}

export default NavBars;
