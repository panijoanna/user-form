import styled from "styled-components";

export const Navigation = styled.nav`
  margin-bottom: 3vh;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 50px;
`;

export const NavigationItem = styled.li`
  color: #eeeeee;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #e3b3af;
  }
`;
