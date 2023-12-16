import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationHeader = styled.header`
  padding: 0px 40px;
`;

export const NavigationNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  display: inline-block;
  padding: 12px;

  color: #2a363b;

  &.active {
    color: #ff6b08;
  }
`;
