// components/Teachers.js
import React from 'react';
import {
  TeacherDetails,
  TeacherTable,
  TeacherTh,
  TeacherTd
} from '../../styles/DashboardStyles';

const Teachers = ({ teachers }) => (
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
);

export default Teachers;
