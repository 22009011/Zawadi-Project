import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherSidebar from './Sidebar';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  LogoutButton,
} from '../../styles/SettingsProfileStyles';

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/teacher/signin'); // Redirect if no token is found
    }

    fetch('http://localhost:5000/api/users/teacher/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => setTeacherInfo(data))
    .catch(error => setError('Failed to fetch profile details'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('role'); // Clear role from localStorage
    navigate('/teacher/signin'); // Redirect to sign-in page
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <TeacherSidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.username}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Role:</ProfileLabel>
          <ProfileInfo>{teacherInfo.role}</ProfileInfo>
          <ProfileLabel>School:</ProfileLabel>
          <ProfileInfo>{teacherInfo.schoolName}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Content>
    </ProfileContainer>
  );
};

export default TeacherProfileSection;
