import { Container, Image, StyledSection, TableWrapper } from "./styled";
import NavigationBar from "../NavigationBar";
import background from "../../assets/abstract-pattern.png";
import UserDataTable from "./UserDataTable";

const ShowUser = () => {
  return (
    <StyledSection>
      <Container>
        <NavigationBar />
      </Container>
      <Image src={background} alt="abstract pattern" />
      <TableWrapper>
        <UserDataTable />
      </TableWrapper>
    </StyledSection>
  );
};

export default ShowUser;
