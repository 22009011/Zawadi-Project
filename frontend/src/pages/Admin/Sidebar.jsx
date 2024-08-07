import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsChatDots, BsGear } from 'react-icons/bs';
import {
  SidebarContainer,
  SidebarHeader,
  Logo,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  SidebarIcon,
  ToggleButton,
  ToggleIcon,
  MobileToggleButton,
  Overlay
} from '../../styles/AdminSidebarStyles.js';
import bg1 from '../../assets/bg1.png';

const AdminSidebar = ({ onToggle = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(prev => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsMobileOpen(false);
      onToggle(false);
    }
  };

  const handleNavItemClick = () => {
    if (window.innerWidth <= 480) {
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <MobileToggleButton onClick={toggleMobileSidebar}>
        <ToggleIcon isOpen={isMobileOpen}>≡</ToggleIcon>
      </MobileToggleButton>
      {isMobileOpen && <Overlay onClick={toggleMobileSidebar} />}
      <SidebarContainer ref={sidebarRef} isOpen={isOpen || isMobileOpen}>
        <SidebarHeader>
          <ToggleButton onClick={toggleSidebar}>
            <ToggleIcon isOpen={isOpen}>≡</ToggleIcon>
          </ToggleButton>
          <Logo src={bg1} alt="Logo" isOpen={isOpen || isMobileOpen} />
        </SidebarHeader>
        <SidebarNav>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/dashboard">
              <SidebarIcon selected={location.pathname === '/admin/dashboard'}>
                <BsGraphUp />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/dashboard" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/dashboard'}>
              Dashboard
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/classes">
              <SidebarIcon selected={location.pathname === '/admin/classes'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/classes" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/classes'}>
              Classes
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/students">
              <SidebarIcon selected={location.pathname === '/admin/students'}>
                <BsPeople />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/students" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/students'}>
              Students
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/teachers">
              <SidebarIcon selected={location.pathname === '/admin/teachers'}>
                <BsPerson />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/teachers" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/teachers'}>
              Teachers
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/reports">
              <SidebarIcon selected={location.pathname === '/admin/reports'}>
                <BsFileText />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/reports" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/reports'}>
              Reports
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/curriculum-management">
              <SidebarIcon selected={location.pathname === '/admin/curriculum-management'}>
                <BsBook />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/curriculum-management" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/curriculum-management'}>
              Curriculum Management
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/analytics">
              <SidebarIcon selected={location.pathname === '/admin/analytics'}>
                <BsGraphUp />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/analytics" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/analytics'}>
              Analytics
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/messages">
              <SidebarIcon selected={location.pathname === '/admin/messages'}>
                <BsChatDots />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/messages" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/messages'}>
              Messages
            </StyledLink>
          </SidebarNavItem>
          <SidebarNavItem onClick={handleNavItemClick}>
            <Link to="/admin/settings">
              <SidebarIcon selected={location.pathname === '/admin/settings'}>
                <BsGear />
              </SidebarIcon>
            </Link>
            <StyledLink to="/admin/settings" isOpen={isOpen || isMobileOpen} selected={location.pathname === '/admin/settings'}>
              Settings
            </StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
