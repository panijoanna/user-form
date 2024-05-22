import NavigationBar from "../NavigationBar";
import {
  Heading,
  Section,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
  Wrapper,
  Container,
} from "./styled";
import image from "../../assets/abstract.jpg";

const UserForm = () => {
  return (
    <>
      <Section>
        <Container>
          <NavigationBar />
        </Container>
        <Wrapper>
          <StyledForm>
            <Heading>user form</Heading>
            <StyledInput type="text" placeholder="Name" />
            <StyledInput type="email" placeholder="Email" />
            <StyledInput type="number" placeholder="Phone" />
            <StyledButton>Submit</StyledButton>
          </StyledForm>
          <StyledImg src={image} alt="abstract picture" />
        </Wrapper>
      </Section>
    </>
  );
};

export default UserForm;
