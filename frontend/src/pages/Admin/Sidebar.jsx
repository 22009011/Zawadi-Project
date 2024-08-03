import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsChatDots, BsGear } from 'react-icons/bs';
import { SidebarContainer, SidebarHeader, Logo, SidebarNav, SidebarNavItem, StyledLink, SidebarIcon, 
  ToggleButton, ToggleIcon, Spacer } from '../../styles/AdminSidebarStyles.js';
import bg1 from '../../assets/bg1.png';

const AdminSidebar = ({ onToggle = () => {} }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const location = useLocation();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(prev => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      onToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
        <SidebarHeader>
          <ToggleButton onClick={toggleSidebar}>
            <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
          </ToggleButton>
          <Logo src={bg1} alt="Logo" isOpen={isOpen} />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <Link to="/admin/dashboard">
              <SidebarIcon selected={location.pathname === '/admin/dashboard'}>
                <BsGraphUp />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/dashboard" isOpen={isOpen} selected={location.pathname === '/admin/dashboard'}>
              Dashboard
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/classes">
              <SidebarIcon selected={location.pathname === '/admin/classes'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/classes" isOpen={isOpen} selected={location.pathname === '/admin/classes'}>
              Classes
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/students">
              <SidebarIcon selected={location.pathname === '/admin/students'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/students" isOpen={isOpen} selected={location.pathname === '/admin/students'}>
              Students
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/teachers">
              <SidebarIcon selected={location.pathname === '/admin/teachers'}>
                <BsPerson />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/teachers" isOpen={isOpen} selected={location.pathname === '/admin/teachers'}>
              Teachers
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/reports">
              <SidebarIcon selected={location.pathname === '/admin/reports'}>
                <BsFileText />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/reports" isOpen={isOpen} selected={location.pathname === '/admin/reports'}>
              Reports
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/curriculum-management">
              <SidebarIcon selected={location.pathname === '/admin/curriculum-management'}>
                <BsBook />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/curriculum-management" isOpen={isOpen} selected={location.pathname === '/admin/curriculum-management'}>
              Curriculum Management
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/analytics">
              <SidebarIcon selected={location.pathname === '/admin/analytics'}>
                <BsGraphUp /> {/* Using BsGraphUp for Analytics as a substitute */}
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/analytics" isOpen={isOpen} selected={location.pathname === '/admin/analytics'}>
              Analytics
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/communication">
              <SidebarIcon selected={location.pathname === '/admin/communication'}>
                <BsChatDots />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/communication" isOpen={isOpen} selected={location.pathname === '/admin/communication'}>
              Announcement
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <Link to="/admin/settings">
              <SidebarIcon selected={location.pathname === '/admin/settings'}>
                <BsGear />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/settings" isOpen={isOpen} selected={location.pathname === '/admin/settings'}>
              Settings & Profile
            </StyledLink>
          </SidebarNavItem>
          <Spacer />
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
