import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background: #232323;
  padding: 15px 0 10px;
  text-align: center;
  color: #888;
  font-size: 12px;
  line-height: 1.5;
`;

export default React.memo(function Footer({ className }) {
  return <Foot className={className}>moyui的个人博客</Foot>;
});
