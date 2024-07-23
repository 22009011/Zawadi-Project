import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  height: 100%;
  background-color: #ffffff; /* Change to white background */
  color: #000; /* Change to black text color */
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
  border-right: 1px solid #e0e0e0; /* Light gray border */
  @media (min-width: 769px) {
    width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
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
  border-bottom: 1px solid #f0f0f0; /* Very light gray border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5; /* Light gray hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')}; /* Light blue for selected, black for others */
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')}; /* Light blue for selected, black for others */
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  width: 30px;
  height: 30px;
  background-color: #f5f5f5; /* Light gray background */
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
  color: #000; /* Black color */
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #000; /* Black color */
  font-size: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: none;
  }
`;

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Logo src={bg1} alt="Logo" />
        </SidebarHeader>
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/dashboard'}><BsGraphUp /></SidebarIcon>
            <StyledLink to="/student/dashboard" isOpen={isOpen} selected={location.pathname === '/student/dashboard'}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/assignments'}><BsFileText /></SidebarIcon>
            <StyledLink to="/student/assignments" isOpen={isOpen} selected={location.pathname === '/student/assignments'}>Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/feedback'}><BsBook /></SidebarIcon>
            <StyledLink to="/student/feedback" isOpen={isOpen} selected={location.pathname === '/student/feedback'}>Feedback</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/grades'}><BsGraphDown /></SidebarIcon>
            <StyledLink to="/student/grades" isOpen={isOpen} selected={location.pathname === '/student/grades'}>Grades</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/learning-materials'}><BsCalendar /></SidebarIcon>
            <StyledLink to="/student/learning-materials" isOpen={isOpen} selected={location.pathname === '/student/learning-materials'}>Learning Materials</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/attendance'}><BsPeople /></SidebarIcon>
            <StyledLink to="/student/attendance" isOpen={isOpen} selected={location.pathname === '/student/attendance'}>Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/communication'}><BsPerson /></SidebarIcon>
            <StyledLink to="/student/communication" isOpen={isOpen} selected={location.pathname === '/student/communication'}>Announcements</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/student/settings'}><BsGear /></SidebarIcon>
            <StyledLink to="/student/settings" isOpen={isOpen} selected={location.pathname === '/student/settings'}>Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default StudentSidebar;
