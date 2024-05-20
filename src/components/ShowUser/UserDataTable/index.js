import {
  StyledButton,
  StyledTable,
  StyledTableBody,
  StyledTableDataCell,
  StyledTableHead,
  StyledTableHeading,
  StyledTableRow,
} from "./styled";

const UserDataTable = () => {
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledTableHeading>Id</StyledTableHeading>
          <StyledTableHeading>Name</StyledTableHeading>
          <StyledTableHeading>Email</StyledTableHeading>
          <StyledTableHeading>Phone</StyledTableHeading>
          <StyledTableHeading></StyledTableHeading>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        <StyledTableRow>
          <StyledTableDataCell></StyledTableDataCell>
          <StyledTableDataCell>
            <StyledButton>edit</StyledButton>
            <StyledButton secondary>delete</StyledButton>
          </StyledTableDataCell>
        </StyledTableRow>
      </StyledTableBody>
    </StyledTable>
  );
};

export default UserDataTable;
