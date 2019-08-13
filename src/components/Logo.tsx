import React from "react";
import styled from "styled-components";

const Logo = styled.a`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  padding: 1rem;

  :hover {
    color: #ccc;
  }
`;

export default () => <Logo href="/">React Parcel</Logo>;
