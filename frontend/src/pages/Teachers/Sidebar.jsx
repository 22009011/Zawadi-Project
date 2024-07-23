import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText,
  BsGraphDown, BsCalendar, BsGear, BsChatDots,
} from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  height: 100%;
  background-color: #ffffff;
  color: #000;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
  border-right: 1px solid #e0e0e0;
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
  @media (min-width: 769px) {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  color: ${({ selected }) => (selected ? '#3498db' : '#000')};
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

const TeacherSidebar = () => {
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
            <SidebarIcon selected={location.pathname === '/teacher/dashboard'}><BsGraphUp /></SidebarIcon>
            <StyledLink to="/teacher/dashboard" isOpen={isOpen} selected={location.pathname === '/teacher/dashboard'}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/lesson-plans'}><BsPeople /></SidebarIcon>
            <StyledLink to="/teacher/lesson-plans" isOpen={isOpen} selected={location.pathname === '/teacher/lesson-plans'}>Lesson Plans</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/students-progress'}><BsPeople /></SidebarIcon>
            <StyledLink to="/teacher/students-progress" isOpen={isOpen} selected={location.pathname === '/teacher/students-progress'}>Students Progress</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/assessments'}><BsPeople /></SidebarIcon>
            <StyledLink to="/teacher/assessments" isOpen={isOpen} selected={location.pathname === '/teacher/assessments'}>Assessments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/assignments'}><BsFileText /></SidebarIcon>
            <StyledLink to="/teacher/assignments" isOpen={isOpen} selected={location.pathname === '/teacher/assignments'}>Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/performance'}><BsGraphDown /></SidebarIcon>
            <StyledLink to="/teacher/performance" isOpen={isOpen} selected={location.pathname === '/teacher/performance'}>Performance Data</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/attendance'}><BsCalendar /></SidebarIcon>
            <StyledLink to="/teacher/attendance" isOpen={isOpen} selected={location.pathname === '/teacher/attendance'}>Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/announcement'}><BsChatDots /></SidebarIcon>
            <StyledLink to="/teacher/announcement" isOpen={isOpen} selected={location.pathname === '/teacher/announcement'}>Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon selected={location.pathname === '/teacher/settings'}><BsGear /></SidebarIcon>
            <StyledLink to="/teacher/settings" isOpen={isOpen} selected={location.pathname === '/teacher/settings'}>Settings</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default TeacherSidebar;
