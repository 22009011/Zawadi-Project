import React, { useState } from 'react';
import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  ToggleButton,
} from '../../styles/styles';
import bg1 from "../../assets/bg1.png";
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  const handleToggleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Navbar>
      <ToggleButton onClick={handleToggleClick}>
        {showLinks ? '✖' : '☰'}
      </ToggleButton>
      <Logo src={bg1} alt="Logo" />
      <NavigationLinks show={showLinks}>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Request a Demo</NavLink>
      </NavigationLinks>
      <ButtonsContainer>
        <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
      </ButtonsContainer>
    </Navbar>
  );
};

export default NavbarComponent;
