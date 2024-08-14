// src/Grades.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  GradesContainer,
  Content,
  SubjectGrade,
  SubjectName,
  GradeLabel,
  PerformanceLevel,
  SidebarContainer,
  Spinner,
} from '../../styles/GradesStyles.js';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const studentId = localStorage.getItem('student_id');

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        console.log('Fetching grades for student_id:', studentId);
        const response = await axios.get(
          `http://localhost:5000/api/grades?student_id=${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Response data:', response.data);

        if (Array.isArray(response.data)) {
          setGrades(response.data);
          console.log('Grades set:', response.data);
        } else {
          setError('Unexpected response format.');
        }
      } catch (err) {
        console.error('Error fetching grades:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (studentId && token) {
      fetchGrades();
    } else {
      setError('Missing student ID or token.');
    }
  }, [studentId, token]);

  return (
    <GradesContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h2>Grades</h2>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error loading grades: {error}</p>
        ) : grades.length > 0 ? (
          grades.map((grade) => (
            <SubjectGrade key={grade.grade_id}>
              <SubjectName>{grade.subject}</SubjectName>
              <p>
                <GradeLabel>Grade:</GradeLabel> {grade.grade}
              </p>
              <p>
                <PerformanceLevel>{grade.performance_level}</PerformanceLevel>
              </p>
            </SubjectGrade>
          ))
        ) : (
          <p>No grades available.</p>
        )}
      </Content>
    </GradesContainer>
  );
};

export default Grades;
