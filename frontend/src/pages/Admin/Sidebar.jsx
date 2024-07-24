import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsChatDots, BsGear } from 'react-icons/bs';

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
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: width 0.3s ease;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  height: auto;
  transition: width 0.3s ease;
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
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
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
  transition: left 0.3s ease;
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

const AdminSidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader isOpen={isOpen}>
          <Logo src={bg1} alt="Logo" isOpen={isOpen} />
        </SidebarHeader>
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/dashboard'}><BsGraphUp /></SidebarIcon>
            <StyledLink to="/admin/dashboard" isOpen={isOpen} selected={location.pathname === '/admin/dashboard'}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/classes'}><BsPeople /></SidebarIcon>
            <StyledLink to="/admin/classes" isOpen={isOpen} selected={location.pathname === '/admin/classes'}>Classes</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/students'}><BsPeople /></SidebarIcon>
            <StyledLink to="/admin/students" isOpen={isOpen} selected={location.pathname === '/admin/students'}>Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/teachers'}><BsPerson /></SidebarIcon>
            <StyledLink to="/admin/teachers" isOpen={isOpen} selected={location.pathname === '/admin/teachers'}>Teachers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/reports'}><BsFileText /></SidebarIcon>
            <StyledLink to="/admin/reports" isOpen={isOpen} selected={location.pathname === '/admin/reports'}>Reports</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/curriculum-management'}><BsBook /></SidebarIcon>
            <StyledLink to="/admin/curriculum-management" isOpen={isOpen} selected={location.pathname === '/admin/curriculum-management'}>Curriculum Management</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/analytics'}><BsChatDots /></SidebarIcon>
            <StyledLink to="/admin/analytics" isOpen={isOpen} selected={location.pathname === '/admin/analytics'}>Analytics</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/communication'}><BsChatDots /></SidebarIcon>
            <StyledLink to="/admin/communication" isOpen={isOpen} selected={location.pathname === '/admin/communication'}>Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/admin/settings'}><BsGear /></SidebarIcon>
            <StyledLink to="/admin/settings" isOpen={isOpen} selected={location.pathname === '/admin/settings'}>Settings & Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
