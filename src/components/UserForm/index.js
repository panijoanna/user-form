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
import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Section>
        <Container>
          <NavigationBar />
        </Container>
        <Wrapper>
          <StyledForm onSubmit={handleSubmit}>
            <Heading>user form</Heading>
            <StyledInput
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              name="name"
              id="name"
            />
            <StyledInput
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <StyledInput
              value={formData.number}
              onChange={handleChange}
              type="number"
              placeholder="Phone"
              name="number"
              id="number"
            />
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
          <StyledImg src={image} alt="abstract picture" />
        </Wrapper>
      </Section>
    </>
  );
};

export default UserForm;
