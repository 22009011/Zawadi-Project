import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100vw; /* Full viewport width */
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;

  margin: 0; /* Remove margin to stretch full width */
`;

const Title = styled.h2`
  color: #FFFFFF; /* White */
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #FFFFFF; /* White */
  margin-bottom: 30px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  color: #FFFFFF; /* White */
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #FFFFFF; /* White */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 1000px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  color: #FFFFFF; /* White */
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #FFFFFF; /* White */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #FFA500; /* Orange */
  color: #FFFFFF; /* White */
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF7F50; /* Darker Orange */
  }
`;

const DemoForm = () => {
  return (
    <FormContainer>
      <Title>Request a Demo</Title>
      <Subtitle>Interested in seeing Zawadi in action? Request a demo now!</Subtitle>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="tel" placeholder="Phone" />
      <Input type="text" placeholder="School Name" />
      <TextArea placeholder="Message" rows="4" />
      <ButtonContainer>
        <Button>SUBMIT REQUEST</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default DemoForm;
