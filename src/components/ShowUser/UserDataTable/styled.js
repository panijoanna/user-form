import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  position: absolute;
  top: 20%;
  width: 80%;
`;

export const StyledTableHead = styled.thead``;

export const StyledTableRow = styled.tr`
  text-align: center;
`;

export const StyledTableHeading = styled.th`
  background: #e3a24a;
  padding: 5px;
  border: 1px solid #cfcfcf;
  color: #514538;
  font-weight: 500;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableDataCell = styled.td`
  background: #f5f5f6;
  border: 1px solid #cfcfcf;
  font-size: 14px;
  padding: 5px;
`;

export const StyledButton = styled.button`
  background: #008f5e;
  color: #effcf5;
  padding: 4px;
  width: 45%;
  margin: 0 2px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    filter: brightness(80%);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border: 2px solid #8b2e3c;
      color: #ab4a37;
      background: none;

      &:hover {
        background: #d19f9f;
      }
    `}
`;
