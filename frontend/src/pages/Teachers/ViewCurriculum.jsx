import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const Container = styled.div`
  padding: 20px;
  padding-left: 100px;
`;

const GradeSection = styled.div`
  margin-bottom: 20px;
`;

const SubjectSection = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
`;

const CurriculumItem = styled.div`
  margin-left: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ViewCurriculum = () => {
  const [curriculums, setCurriculums] = useState([]);
  const { grade, subject } = useParams();

  useEffect(() => {
    fetchCurriculums();
  }, []);

  const fetchCurriculums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/curriculum-entries');
      setCurriculums(response.data);
      toast.success('Curriculums fetched successfully!');
    } catch (error) {
      toast.error('Error fetching curriculums.');
      console.error('Error fetching curriculums:', error);
    }
  };

  const getCurriculumsByGrade = () => {
    const grades = {};
    curriculums.forEach(curriculum => {
      if (!grades[curriculum.grade]) {
        grades[curriculum.grade] = [];
      }
      grades[curriculum.grade].push(curriculum);
    });
    return grades;
  };

  const grades = getCurriculumsByGrade();

  return (
    <Container>
      <Sidebar />
      <ToastContainer />
      <h2>View Curriculum</h2>
      {Object.keys(grades).map(grade => (
        <GradeSection key={grade}>
          <h3>{grade}</h3>
          {grades[grade].map(curriculum => (
            <SubjectSection key={curriculum.subject}>
              <Link to={`/teacher/view-curriculum/${grade}/${curriculum.subject}`}>
                <h4>{curriculum.subject}</h4>
              </Link>
              {curriculum.subject === subject && (
                <CurriculumItem>
                  <h5>{curriculum.lesson}</h5>
                  <p>{curriculum.timetable}</p>
                </CurriculumItem>
              )}
            </SubjectSection>
          ))}
        </GradeSection>
      ))}
    </Container>
  );
};

export default ViewCurriculum;
