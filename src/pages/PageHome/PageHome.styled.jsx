import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerDiv = styled.div`
  padding: 0px 30px;
  margin: 0px auto;
`;

export const ListUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 20px 0px;
  list-style: none;
`;

export const ListItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  &:hover {
    cursor: pointer;
    transform: scale(1.03) translateY(-3px);
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  }
`;

export const RoutItemLink = styled(Link)`
  text-decoration: none;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ItemInfoDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ItemTitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2a363b;
  text-decoration: none;
  margin-left: 10px;
`;

export const ItemRateSpan = styled.span`
  padding: 0 10px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: #ff6b08;
  color: #fff;
  border-radius: 5px;
`;
