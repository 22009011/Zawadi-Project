import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 50px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ADD8E6, #9370DB); /* Light Blue to Medium Purple */
  border-radius: 10px;
  margin: 0; /* Remove margin */
  width: 100vw; /* Full viewport width */
  max-width: 100vw; /* Ensure it doesn't exceed viewport width */
  display: flex; /* Align children side by side */
  justify-content: space-between; /* Distribute space between children */
  position: relative; /* For absolute positioning of the border */
  box-sizing: border-box; /* Include padding in the width calculation */
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #000; /* Black border for the container */
    border-radius: 12px; /* Slightly larger border radius */
    z-index: -1; /* Ensure the border is behind the content */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
    align-items: center;
    justify-content: center;
  }
`;

const FormContainer = styled.form`
  flex: 1; /* Allow to take up available space */
  display: flex;
  flex-direction: column;
  margin-right: 50px; /* Space between form and contact info */
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 48%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  box-sizing: border-box;
  color: #FFFFFF; /* White */
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const FullWidthInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  box-sizing: border-box;
  color: #FFFFFF; /* White */
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #FFFFFF; /* White */
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  color: #FFFFFF; /* White */
  background-color: transparent;

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

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }
`;

const ContactInfo = styled.div`
  flex: 0.5;
  padding-left: 40px;
  /* Add any additional styling for alignment and spacing */

  @media screen and (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    margin-top: 30px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactDetails = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 2;

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
    }
  }

  svg {
    margin-right: 10px;
    
    @media screen and (max-width: 768px) {
      margin-right: 8px;
    }
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
