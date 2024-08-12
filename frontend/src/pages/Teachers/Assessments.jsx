import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AssessmentsContainer,
  SectionTitle,
  ButtonGroup,
  Button,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
} from '../../styles/AssessmentsStyles.js';
import axios from 'axios';

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('summative'); // Default to Summative assessments
  const [newAssessment, setNewAssessment] = useState({
    title: '',
    description: '',
    classId: '',
    subject: '',
    date: '',
    duration: '',
    totalMarks: '',
    teacherId: '',
    studentId: '',
  });
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data for classes, teachers, and students from the backend
    axios.get('http://localhost:5000/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));

    axios.get('http://localhost:5000/api/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));

    axios.get('http://localhost:5000/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleManualEntry = () => {
    navigate('/teacher/manual-assessments');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssessment({ ...newAssessment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/assessment', newAssessment)
      .then(response => {
        console.log('New Assessment created:', response.data);
        // Clear form after submission
        setNewAssessment({
          title: '',
          description: '',
          classId: '',
          subject: '',
          date: '',
          duration: '',
          totalMarks: '',
          teacherId: '',
          studentId: '',
        });
      })
      .catch(error => console.error('Error creating assessment:', error));
  };

  return (
    <AssessmentsContainer>
      <SectionTitle>Assessments</SectionTitle>
      <ButtonGroup>
        <Button isActive={activeTab === 'summative'} onClick={() => handleTabChange('summative')}>
          Summative Assessments
        </Button>
        <Button onClick={handleManualEntry}>Enter Assessments Manually</Button>
        <Button isActive={activeTab === 'formative'} onClick={() => handleTabChange('formative')}>
          Formative Assessments
        </Button>
      </ButtonGroup>
      {activeTab === 'summative' && (
        <div>
          <h3>Summative Assessments Content</h3>
          <p>Here teachers can create, view, assign, and submit results for Summative assessments.</p>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              {/* Same form code as before */}
            </form>
          </FormContainer>
        </div>
      )}
      {activeTab === 'formative' && (
        <div>
          <h3>Formative Assessments Content</h3>
          <p>Here teachers can view and send Formative assessments.</p>
        </div>
      )}
    </AssessmentsContainer>
  );
};

export default Assessments;
