import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  OverviewSection,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  HorizontalContainer,
  HalfWidthSection,
  CalendarSection,
  CalendarTitle,
  Calendar,
  CalendarDay,
  TeacherDetails,
  TeacherTable,
  TeacherTh,
  TeacherTd,
  ChartContainer
} from '../../styles/DashboardStyles.js';
import Analytics from './Analytics';
import { fetchTeacherData } from './teacherData';
import AdminSidebar from './Sidebar.jsx';

const AdminDashboard = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
    fetchTeacherData().then(setTeachers);
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/announcements');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  return (
    <AdminDashboardContainer>
      <AdminSidebar />
      <Content>
        <OverviewSection>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>932</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>754</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Events</CardTitle>
              <CardContent>40</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Foods</CardTitle>
              <CardContent>32</CardContent>
            </Card>
          </CardContainer>
        </OverviewSection>
        <HorizontalContainer>
          <HalfWidthSection>
            <SectionTitle>Recent Announcements</SectionTitle>
            <Section>
              <TeacherTable>
                <thead>
                  <tr>
                    <TeacherTh>Date</TeacherTh>
                    <TeacherTh>Title</TeacherTh>
                    <TeacherTh>Content</TeacherTh>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((announcement) => (
                    <tr key={announcement.id}>
                      <TeacherTd>{announcement.date}</TeacherTd>
                      <TeacherTd>{announcement.title}</TeacherTd>
                      <TeacherTd>{announcement.content}</TeacherTd>
                    </tr>
                  ))}
                </tbody>
              </TeacherTable>
            </Section>
          </HalfWidthSection>
          <HalfWidthSection>
            <CalendarSection>
              <CalendarTitle>Weekly Schedule</CalendarTitle>
              <Calendar>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <CalendarDay key={day}>{day}</CalendarDay>
                ))}
              </Calendar>
            </CalendarSection>
          </HalfWidthSection>
        </HorizontalContainer>
        <HorizontalContainer>
          <HalfWidthSection>
            <SectionTitle>Teachers Details</SectionTitle>
            <TeacherTable>
              <thead>
                <tr>
                  <TeacherTh>Name</TeacherTh>
                  <TeacherTh>Subject</TeacherTh>
                  <TeacherTh>Experience</TeacherTh>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <TeacherTd>{teacher.name}</TeacherTd>
                    <TeacherTd>{teacher.subject}</TeacherTd>
                    <TeacherTd>{teacher.experience} years</TeacherTd>
                  </tr>
                ))}
              </tbody>
            </TeacherTable>
          </HalfWidthSection>
          <HalfWidthSection>
            <ChartContainer>
              <Analytics />
            </ChartContainer>
          </HalfWidthSection>
        </HorizontalContainer>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
