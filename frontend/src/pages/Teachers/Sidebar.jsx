import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChartBar, FaUsers, FaUserGraduate, FaClipboardList,
  FaChartLine, FaCalendarAlt, FaCog, FaComments, FaCaretDown, FaCaretUp, FaBook, FaFileAlt, FaClipboardCheck
} from 'react-icons/fa';
import {
  SidebarContainer, SidebarHeader, Logo, 
  SidebarNav, SidebarNavItem, SubNavItem, StyledLink, 
  SidebarIcon, ToggleButton, ToggleIcon, CloseButton, Spacer
} from '../../styles/TeacherSidebarStyles.js';
import bg1 from '../../assets/bg1.png';

const TeacherSidebar = ({ isOpen, toggleSidebar }) => {
  const [isAcademicRecordsOpen, setIsAcademicRecordsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar();
    }
  };
 
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
      <SidebarHeader>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
        </ToggleButton>
        <Logo src={bg1} alt="Logo" isOpen={isOpen} />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <Link to="/teacher/dashboard">
            <SidebarIcon selected={location.pathname === '/teacher/dashboard'}>
              <FaChartBar />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/dashboard" isOpen={isOpen} selected={location.pathname === '/teacher/dashboard'}>
            Dashboard
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <Link to="/teacher/lesson-plans">
            <SidebarIcon selected={location.pathname === '/teacher/lesson-plans'}>
              <FaClipboardList />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/lesson-plans" isOpen={isOpen} selected={location.pathname === '/teacher/lesson-plans'}>
            Lesson Plans
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <Link to="/teacher/student-progress">
            <SidebarIcon selected={location.pathname === '/teacher/student-progress'}>
              <FaUserGraduate />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/student-progress" isOpen={isOpen} selected={location.pathname === '/teacher/student-progress'}>
            Students Progress
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <Link to="/teacher/assessments">
            <SidebarIcon selected={location.pathname === '/teacher/assessments'}>
              <FaClipboardList />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/assessments" isOpen={isOpen} selected={location.pathname === '/teacher/assessments'}>
            Assessments
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <Link to="/teacher/assignments">
            <SidebarIcon selected={location.pathname === '/teacher/assignments'}>
              <FaFileAlt />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/assignments" isOpen={isOpen} selected={location.pathname === '/teacher/assignments'}>
            Assignments
          </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <Link to="/teacher/view-curriculum">
            <SidebarIcon selected={location.pathname === '/teacher/view-curriculum'}>
              <FaBook />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/view-curriculum" isOpen={isOpen} selected={location.pathname === '/teacher/view-curriculum'}>
            View Curriculum
          </StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <Link to="/teacher/current-view-curriculum">
            <SidebarIcon selected={location.pathname === '/teacher/current-view-curriculum'}>
              <FaBook />
            </SidebarIcon>
          </Link>
          <StyledLink to="/teacher/current-view-curriculum" isOpen={isOpen} selected={location.pathname === '/teacher/current-view-curriculum'}>
           Current View Curriculum
          </StyledLink>
        </SidebarNavItem>


        <SidebarNavItem onClick={() => setIsAcademicRecordsOpen(!isAcademicRecordsOpen)}>
          <SidebarIcon selected={isAcademicRecordsOpen}>
            <FaChartLine />
          </SidebarIcon>
          <StyledLink to="#" isOpen={isOpen} selected={isAcademicRecordsOpen}>
            Academic Records {isAcademicRecordsOpen ? <FaCaretUp /> : <FaCaretDown />}
          </StyledLink>
        </SidebarNavItem>
        {isAcademicRecordsOpen && (
          <>
            <SubNavItem>
              <Link to="/teacher/enter-marks">
                <SidebarIcon selected={location.pathname === '/teacher/enter-marks'}>
                  <FaChartLine />
                </SidebarIcon>
              </Link>
              <StyledLink to="/teacher/enter-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-marks'}>
                Enter Marks
              </StyledLink>
            </SubNavItem>
            <SubNavItem>
              <Link to="/teacher/performance-analysis">
                <SidebarIcon selected={location.pathname === '/teacher/performance-analysis'}>
                  <FaChartBar />
                </SidebarIcon>
              </Link>
              <StyledLink to="/teacher/performance-analysis" isOpen={isOpen} selected={location.pathname === '/teacher/performance-analysis'}>
                Performance Analysis
              </StyledLink>
            </SubNavItem>
            <SubNavItem>
              <Link to="/teacher/enter-assessments-marks">
                <SidebarIcon selected={location.pathname === '/teacher/enter-assessments-marks'}>
                  <FaChartBar />
                </SidebarIcon>
              </Link>
              <StyledLink to="/teacher/enter-assessments-marks" isOpen={isOpen} selected={location.pathname === '/teacher/enter-assessments-marks'}>
                Enter Assessment Marks
              </StyledLink>
            </SubNavItem>
          </>
          )}
          <SidebarNavItem>
            <Link to="/teacher/calendar">
              <SidebarIcon selected={location.pathname === '/teacher/calendar'}>
                <FaCalendarAlt />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/calendar" isOpen={isOpen} selected={location.pathname === '/teacher/calendar'}>
              Calendar
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/teacher/settings">
              <SidebarIcon selected={location.pathname === '/teacher/settings'}>
                <FaCog />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/settings" isOpen={isOpen} selected={location.pathname === '/teacher/settings'}>
              Settings
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <Link to="/teacher/attendance">
              <SidebarIcon selected={location.pathname === '/teacher/attendance'}>
                <FaCog />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/attendance" isOpen={isOpen} selected={location.pathname === '/teacher/attendance'}>
              Mark Attendnce
            </StyledLink>
          </SidebarNavItem>

          <SidebarNavItem>
            <Link to="/teacher/announcement">
              <SidebarIcon selected={location.pathname === '/teacher/announcement'}>
                <FaComments />
              </SidebarIcon>
            </Link>
            <StyledLink to="/teacher/announcement" isOpen={isOpen} selected={location.pathname === '/teacher/announcement'}>
            Announcement
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
        <Spacer />
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
      </SidebarContainer>
    
  );

  function toggleAcademicRecords() {
    setIsAcademicRecordsOpen(!isAcademicRecordsOpen);
  }
};

export default TeacherSidebar;
