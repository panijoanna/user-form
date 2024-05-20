import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 10px solid #e3a24a;
  background: #cb668f;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 70%;
`;

export const StyledImg = styled.img`
  width: 50%;
`;

export const Wrapper = styled.div`
  background: #1f0d1b;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 50px;
  width: 35%;
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
`;

export const StyledInput = styled.input`
  border-bottom: 1px solid #b3bec9;
  color: white;
  width: 100%;
  background: none;

  ::placeholder {
    color: #939393;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid #b3bec9;
  color: #ffffff;
  padding: 5px;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: #484554;
  }
`;
