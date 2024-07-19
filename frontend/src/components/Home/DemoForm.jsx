import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 750px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const Button = styled.button`
  background-color: #fdbb2d;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa500;
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
      <Button>SUBMIT REQUEST</Button>
    </FormContainer>
  );
};

export default DemoForm;
