import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Importing the logout icon
import {
  ProfileContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  LogoutButton,
} from '../../styles/SettingsProfileStyles'; // Import styled components from SettingsProfileStyles.js

const SettingsProfile = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/admin/signin'); // Redirect if no token is found
    }

    fetch('http://localhost:5000/api/users/admin/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => setAdminInfo(data))
    .catch(error => setError('Failed to fetch profile details'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    localStorage.removeItem('role'); // Clear role from localStorage
    navigate('/admin/signin'); // Redirect to sign-in page
  };

  return (
    <ProfileContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{adminInfo.username}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{adminInfo.email}</ProfileInfo>
          <ProfileLabel>Role:</ProfileLabel>
          <ProfileInfo>{adminInfo.role}</ProfileInfo>
          <ProfileLabel>School Name:</ProfileLabel>
          <ProfileInfo>{adminInfo.schoolName}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;
