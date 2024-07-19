import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
`;

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 48%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const FullWidthInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  resize: none;
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
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa500;
  }
`;

const ContactInfo = styled.div`
  flex: 0.5;
  padding-left: 40px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactDetails = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 2;

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

const GetInTouchSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <SectionContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Get In Touch</Title>
        <Subtitle>We love to hear from you.</Subtitle>
        <InputGroup>
          <Input type="text" placeholder="First name" required />
          <Input type="text" placeholder="Last name" required />
        </InputGroup>
        <FullWidthInput type="email" placeholder="Email address" required />
        <TextArea placeholder="Message" rows="4" required />
        <Button type="submit">SEND MESSAGE</Button>
      </FormContainer>
      <ContactInfo>
        <ContactTitle>Contact Info</ContactTitle>
        <ContactDetails>
          <p>5th Floor, SUS Center, Keri Rd, Madaraka</p>
          <p><FaPhone /> 020 8000 208</p>
          <p><FaEnvelope /> hello@kurasa.org</p>
          <p><FaGlobe /> https://kurasa.org</p>
        </ContactDetails>
      </ContactInfo>
    </SectionContainer>
  );
};

export default GetInTouchSection;
