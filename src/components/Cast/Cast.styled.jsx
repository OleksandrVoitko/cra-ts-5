import styled from "styled-components";

export const ListUl = styled.ul`
  list-style: none;
  display: grid;
  place-items: center;
  padding-left: 30px;
  padding-right: 30px;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 30px;
`;
export const ListItemLi = styled.li`
  width: 160px;
  height: 100%;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  overflow: hidden;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
`;
export const ItemNameP = styled.p`
  font-weight: 700;
`;
