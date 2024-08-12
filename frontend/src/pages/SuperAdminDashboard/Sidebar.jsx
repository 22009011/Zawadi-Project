import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsPeople, BsPerson, BsGear } from 'react-icons/bs';
import { FaUserPlus, FaUserTie } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  height: 100%;
  background-color: #ffffff;
  color: #000;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
  border-right: 1px solid #e0e0e0;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  height: auto;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ToggleIcon = styled.span`
  color: #000;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #000;
  font-size: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: none;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SubMenuItem = styled.li`
  padding: 10px 20px;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SuperAdminSidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  const toggleAssessments = () => {
    setIsAssessmentsOpen(!isAssessmentsOpen);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Logo src={bg1} alt="Logo" isOpen={isOpen} />
        </SidebarHeader>
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/dashboard'}><BsGraphUp /></SidebarIcon>
            <StyledLink to="/super-admin/dashboard" isOpen={isOpen} selected={location.pathname === '/super-admin/dashboard'}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/advanced-analytics'}><BsPeople /></SidebarIcon>
            <StyledLink to="/super-admin/advanced-analytics" isOpen={isOpen} selected={location.pathname === '/super-admin/advanced-analytics'}>Advanced Analytics</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/integration-options'}><BsPeople /></SidebarIcon>
            <StyledLink to="/super-admin/integration-options" isOpen={isOpen} selected={location.pathname === '/super-admin/integration-options'}>Integration Options</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/schools'}><BsPerson /></SidebarIcon>
            <StyledLink to="/super-admin/schools" isOpen={isOpen} selected={location.pathname === '/super-admin/schools'}>Schools</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/add-teachers'}><BsGear /></SidebarIcon>
            <StyledLink to="/super-admin/add-teachers" isOpen={isOpen} selected={location.pathname === '/super-admin/add-teachers'}>Add Teachers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/add-parents'}><BsGear /></SidebarIcon>
            <StyledLink to="/super-admin/add-parents" isOpen={isOpen} selected={location.pathname === '/super-admin/add-parents'}>Add Parents</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/super-admin/system-settings'}><BsGear /></SidebarIcon>
            <StyledLink to="/super-admin/system-settings" isOpen={isOpen} selected={location.pathname === '/super-admin/system-settings'}>Settings</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={toggleAssessments}>
            <SidebarIcon selected={location.pathname.startsWith('/super-admin/add-assessments')}><BsGear /></SidebarIcon>
            <StyledLink to="#" isOpen={isOpen} selected={location.pathname.startsWith('/super-admin/add-assessments')}>Add Assessments</StyledLink>
          </SidebarNavItem>
          <SubMenu isOpen={isAssessmentsOpen}>
            <SubMenuItem>
              <SidebarIcon><BsGear /></SidebarIcon>
              <StyledLink to="/super-admin/add-assessments/summative" isOpen={isOpen}>Add Summative Assessments</StyledLink>
            </SubMenuItem>
            <SubMenuItem>
              <SidebarIcon><BsGear /></SidebarIcon>
              <StyledLink to="/super-admin/add-assessments/formative" isOpen={isOpen}>Add Formative Assessments</StyledLink>
            </SubMenuItem>
          </SubMenu>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default SuperAdminSidebar;
