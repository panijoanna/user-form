import axios from "axios";
import {
  StyledButton,
  StyledTable,
  StyledTableBody,
  StyledTableDataCell,
  StyledTableHead,
  StyledTableHeading,
  StyledTableRow,
} from "./styled";
import { useEffect, useState } from "react";

const UserDataTable = () => {
  const [users, setUsers] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(apiKey);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUserData();
  }, [apiKey]);

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
        {users.map(user => {
          return (
            <StyledTableRow key={user.id}>
              <StyledTableDataCell>{user.id}</StyledTableDataCell>
              <StyledTableDataCell>{user.name}</StyledTableDataCell>
              <StyledTableDataCell>{user.email}</StyledTableDataCell>
              <StyledTableDataCell>{user.number}</StyledTableDataCell>
              <StyledTableDataCell>
                <StyledButton>edit</StyledButton>
                <StyledButton secondary>delete</StyledButton>
              </StyledTableDataCell>
            </StyledTableRow>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

export default UserDataTable;
