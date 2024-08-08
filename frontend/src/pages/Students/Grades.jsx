import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from './Sidebar';

// Styled components
const GradesContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const SubjectGrade = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

const SubjectName = styled.h3`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const GradeLabel = styled.span`
  font-weight: bold;
`;

const PerformanceLevel = styled.span`
  margin-left: 10px;
  font-style: italic;
`;

const SidebarContainer = styled.div`
  flex: 0 0 240px;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const studentId = localStorage.getItem('student_id');

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/grades?student_id=${studentId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (Array.isArray(response.data)) {
          setGrades(response.data);
        } else {
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
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
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
      </Content>
    </GradesContainer>
  );
}

export default Grades;
