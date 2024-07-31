import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText,
  BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCaretDown, BsCaretUp, BsBook, BsFileEarmarkText, BsCardChecklist
} from 'react-icons/bs';

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
  font-size: 24px;
  font-weight: bold;
  text-align: center;
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
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SubNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px 12px 40px;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  cursor: pointer;
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

const Spacer = styled.div`
  flex-grow: 1;
`;

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicRecordsOpen, setIsAcademicRecordsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAcademicRecords = () => {
    setIsAcademicRecordsOpen(!isAcademicRecordsOpen);
  };

  const toggleReport = () => {
    setIsReportOpen(!isReportOpen);
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
            <Link to="/teacher/dashboard">
              <SidebarIcon selected={location.pathname === '/teacher/dashboard'}>
                <BsGraphUp />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/dashboard" isOpen={isOpen} selected={location.pathname === '/teacher/dashboard'}>
              Dashboard
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/lesson-plans">
              <SidebarIcon selected={location.pathname === '/teacher/lesson-plans'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/lesson-plans" isOpen={isOpen} selected={location.pathname === '/teacher/lesson-plans'}>
              Lesson Plans
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/students-progress">
              <SidebarIcon selected={location.pathname === '/teacher/students-progress'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/students-progress" isOpen={isOpen} selected={location.pathname === '/teacher/students-progress'}>
              Students Progress
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/assessments">
              <SidebarIcon selected={location.pathname === '/teacher/assessments'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/assessments" isOpen={isOpen} selected={location.pathname === '/teacher/assessments'}>
              Assessments
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/assignments">
              <SidebarIcon selected={location.pathname === '/teacher/assignments'}>
                <BsFileText />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/assignments" isOpen={isOpen} selected={location.pathname === '/teacher/assignments'}>
              Assignments
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/view-curriculum">
              <SidebarIcon selected={location.pathname === '/teacher/view-curriculum'}>
                <BsBook />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/view-curriculum" isOpen={isOpen} selected={location.pathname === '/teacher/view-curriculum'}>
              View Curriculum
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={toggleAcademicRecords}>
            <SidebarIcon selected={isAcademicRecordsOpen}>
              <BsGraphDown />
            </SidebarIcon>
            <StyledLink to="#" isOpen={isOpen} selected={isAcademicRecordsOpen}>
              Academic Records {isAcademicRecordsOpen ? <BsCaretUp /> : <BsCaretDown />}
            </StyledLink>
          </SidebarNavItem>
          {isAcademicRecordsOpen && (
            <>
              <SubNavItem>
                <Link to="/teacher/enter-marks">
                  <SidebarIcon selected={location.pathname === '/teacher/enter-marks'}>
                    <BsGraphDown />
                  </SidebarIcon>
                </Link>
                <StyledLink to="/teacher/enter-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-marks'}>
                  Enter Marks
                </StyledLink>
              </SubNavItem>
              <SubNavItem>
                <Link to="/teacher/performance">
                  <SidebarIcon selected={location.pathname === '/teacher/performance'}>
                    <BsGraphDown />
                  </SidebarIcon>
                </Link>
                <StyledLink to="/teacher/performance" isOpen={isOpen} selected={location.pathname === '/teacher/performance'}>
                  Performance
                </StyledLink>
              </SubNavItem>
            </>
          )}
          <SidebarNavItem onClick={toggleReport}>
            <SidebarIcon selected={isReportOpen}>
              <BsFileEarmarkText />
            </SidebarIcon>
            <StyledLink to="#" isOpen={isOpen} selected={isReportOpen}>
              Report {isReportOpen ? <BsCaretUp /> : <BsCaretDown />}
            </StyledLink>
          </SidebarNavItem>
          {isReportOpen && (
            <>
              <SubNavItem>
                <Link to="/teacher/report-form">
                  <SidebarIcon selected={location.pathname === '/teacher/report-form'}>
                    <BsFileEarmarkText />
                  </SidebarIcon>
                </Link>
                <StyledLink to="/teacher/report-form" isOpen={isOpen} selected={location.pathname === '/teacher/report-form'}>
                  Report Form
                </StyledLink>
              </SubNavItem>
              <SubNavItem>
                <Link to="/teacher/student-report">
                  <SidebarIcon selected={location.pathname === '/teacher/student-report'}>
                    <BsCardChecklist />
                  </SidebarIcon>
                </Link>
                <StyledLink to="/teacher/student-report" isOpen={isOpen} selected={location.pathname === '/teacher/student-report'}>
                  Student Report
                </StyledLink>
              </SubNavItem>  
            </>
          )}
          <SidebarNavItem>
            <Link to="/teacher/schedule">
              <SidebarIcon selected={location.pathname === '/teacher/schedule'}>
                <BsCalendar />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/schedule" isOpen={isOpen} selected={location.pathname === '/teacher/schedule'}>
              Schedule
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/profile">
              <SidebarIcon selected={location.pathname === '/teacher/profile'}>
                <BsPerson />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/profile" isOpen={isOpen} selected={location.pathname === '/teacher/profile'}>
              Profile
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/settings">
              <SidebarIcon selected={location.pathname === '/teacher/settings'}>
                <BsGear />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/settings" isOpen={isOpen} selected={location.pathname === '/teacher/settings'}>
              Settings
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/messages">
              <SidebarIcon selected={location.pathname === '/teacher/messages'}>
                <BsChatDots />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/messages" isOpen={isOpen} selected={location.pathname === '/teacher/messages'}>
              Messages
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
        <Spacer />
      </SidebarContainer>
    </>
  );
};

export default TeacherSidebar;
