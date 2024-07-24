// SuperAdminDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import AdvancedAnalytics from './AdvancedAnalytics';
import IntegrationOptions from './IntergrationOptions';
import SystemSettings from './SystemSettings';
import UserManagement from './UserManagement';
import SuperAdminSidebar from './Sidebar';

const DashboardWrapper = styled.div`
  display: flex;
`;

const DashboardContainer = styled.div`
  flex-grow: 1;
  padding: 40px 60px;
  background-color: #f7f9fc; /* Light background color */
  min-height: 100vh;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
`;

const Section = styled.section`
  background: white;
  padding: 20px 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #4caf50;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #555;
`;

const SuperAdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <DashboardWrapper>
      <SuperAdminSidebar onToggle={handleToggleSidebar} />
      <DashboardContainer isOpen={isSidebarOpen}>
        <Section>
          <SectionHeading>Advanced Analytics</SectionHeading>
          <AdvancedAnalytics />
        </Section>

        <Section>
          <SectionHeading>Integration Options</SectionHeading>
          <IntegrationOptions />
        </Section>

        <Section>
          <SectionHeading>System Settings</SectionHeading>
          <SystemSettings />
        </Section>

        <Section>
          <SectionHeading>User Management</SectionHeading>
          <UserManagement />
        </Section>

        <Section>
          <SectionHeading>Quick Overview</SectionHeading>
          <CardContainer>
            <Card>
              <CardTitle>Number of Users</CardTitle>
              <CardContent>1500</CardContent>
            </Card>
            <Card>
              <CardTitle>Active Sessions</CardTitle>
              <CardContent>120</CardContent>
            </Card>
            <Card>
              <CardTitle>Pending Tasks</CardTitle>
              <CardContent>10</CardContent>
            </Card>
          </CardContainer>
        </Section>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default SuperAdminDashboard;
