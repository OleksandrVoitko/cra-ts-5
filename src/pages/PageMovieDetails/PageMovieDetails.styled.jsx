import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapperDiv = styled.div`
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  margin: 0 auto 20px;
  padding: 20px;
  color: #2a363b;
`;

export const WrapperImgDiv = styled.div`
  display: flex;
`;

export const WrapperInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-size: 18px;
`;

export const FirstTitleH1 = styled.h1`
  margin: 0;
`;

export const RateSpan = styled.span`
  padding: 0 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 10px;

  background-color: #ff6b08;
  color: #fff;
  border-radius: 5px;
`;
export const SecondTitleH2 = styled.h2`
  margin: 0;
`;
export const ThirdTitleH3 = styled.h3`
  margin: 0;
`;

export const ButtonsDiv = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const MovieInfoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RouteButtonNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #ff6b08;
  background-color: #ff6b08;
  padding: 8px;
  border-radius: 5px;
  color: #fff;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
    background-color: #fff;
    color: #ff6b08;
    transition: all 1s linear 0s;
  }
`;
