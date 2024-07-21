import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from './Sidebar';

// Styled components
const GradesContainer = styled.div`
  padding: 20px;
`;

const SubjectGrade = styled.div`
  margin-bottom: 20px;
`;

const SubjectName = styled.h3`
  margin-bottom: 10px;
`;

const GradeLabel = styled.span`
  font-weight: bold;
`;

const PerformanceLevel = styled.span`
  margin-left: 10px;
  font-style: italic;
`;

const Grades = () => {
  const [grades, setGrades] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  const studentId = localStorage.getItem('student_id'); // Assuming student_id is stored in localStorage

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/grades?student_id=${studentId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Grades data:', response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setGrades(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGrades();
  }, [studentId, token]);

  return (
    <GradesContainer>
      <Sidebar />
      <h2>Grades</h2>
      {loading ? (
        <p>Loading grades...</p>
      ) : error ? (
        <p>Error loading grades: {error}</p>
      ) : grades.length > 0 ? (
        grades.map(grade => (
          <SubjectGrade key={grade.grade_id}>
            <SubjectName>{grade.subject}</SubjectName>
            <p><GradeLabel>Grade:</GradeLabel> {grade.grade}</p>
            <p><PerformanceLevel>{grade.performance_level}</PerformanceLevel></p>
          </SubjectGrade>
        ))
      ) : (
        <p>No grades available.</p>
      )}
    </GradesContainer>
  );
}

export default Grades;
