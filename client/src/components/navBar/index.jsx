import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getNavBar } from "./api";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(40, 42, 44, 0.6);
  z-index: 1;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 38px;
`;

const MenuItem = styled(Link)`
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
`;

const initialNav = { status: "loading", value: [], error: null };

function NavBars() {
  const [navBar, setNavBar] = useState(initialNav);

  useEffect(() => {
    getNavBar()
      .then(res => setNavBar({ status: "success", value: res.data.data.list }))
      .catch(error => setNavBar({ status: "error", value: [], error }));
  }, []);

  return (
    <Nav>
      <Menu>
        {navBar.value.map(item => (
          <MenuItem key={item.id} to={item.url}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
}

export default React.memo(NavBars);
