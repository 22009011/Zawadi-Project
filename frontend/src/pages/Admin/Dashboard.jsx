// components/AdminDashboard.js
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
import Teachers from './Teachers'
import { fetchTeacherData } from './teacherData';

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
              <CardContent>32k</CardContent>
            </Card>
          </CardContainer>
        </OverviewSection>

        <HorizontalContainer>
          <HalfWidthSection>
            <SectionTitle>School Performance</SectionTitle>
            <ChartContainer>
              <Analytics />
            </ChartContainer>
          </HalfWidthSection>

          <HalfWidthSection>
            <SectionTitle>School Calendar</SectionTitle>
            <CalendarSection>
              <CalendarTitle>May 2023</CalendarTitle>
              <Calendar>
                {/* Render calendar days dynamically */}
                {[...Array(31)].map((_, i) => (
                  <CalendarDay key={i}>{i + 1}</CalendarDay>
                ))}
              </Calendar>
            </CalendarSection>
          </HalfWidthSection>
        </HorizontalContainer>

        <Section>
          <SectionTitle>Teacher Details</SectionTitle>
          <TeacherDetails>
            <TeacherTable>
              <thead>
                <tr>
                  <TeacherTh>Name</TeacherTh>
                  <TeacherTh>Subject</TeacherTh>
                  <TeacherTh>Qualification</TeacherTh>
                  <TeacherTh>Experience</TeacherTh>
                  <TeacherTh>Performance</TeacherTh>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <TeacherTd>{teacher.name}</TeacherTd>
                    <TeacherTd>{teacher.subject}</TeacherTd>
                    <TeacherTd>{teacher.qualification}</TeacherTd>
                    <TeacherTd>{teacher.experience}</TeacherTd>
                    <TeacherTd>{teacher.performance}</TeacherTd>
                  </tr>
                ))}
              </tbody>
            </TeacherTable>
          </TeacherDetails>
        </Section>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
