import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  height: 80px;
  background-color: #00b4ff;
  color: #fff;
  display: flex;
  align-items: center;
`;

export default () => (
  <Header>
    <Logo />
  </Header>
);
