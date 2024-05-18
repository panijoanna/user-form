import NavigationBar from "./NavigationBar";
import {
  Heading,
  Section,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
  Wrapper,
} from "./styled";
import image from "../../assets/abstract.jpg";

const UserForm = () => {
  return (
    <>
      <NavigationBar />
      <Section>
        <Wrapper>
          <StyledForm>
            <Heading>user form</Heading>
            <StyledInput placeholder="Name" />
            <StyledInput placeholder="Email" />
            <StyledInput placeholder="Phone" />
            <StyledButton>Submit</StyledButton>
          </StyledForm>
          <StyledImg src={image} alt="abstract picture" />
        </Wrapper>
      </Section>
    </>
  );
};

export default UserForm;
