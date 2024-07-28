import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AssessmentsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#6BD4E7' : '#ccc')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#4CAAB1' : '#bbb')};
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #6BD4E7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4CAAB1;
  }
`;

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
              <FormGroup>
                <Label>Title:</Label>
                <Input
                  type="text"
                  name="title"
                  value={newAssessment.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>
                <TextArea
                  name="description"
                  value={newAssessment.description}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Class ID:</Label>
                <Select
                  name="classId"
                  value={newAssessment.classId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  {classes.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  value={newAssessment.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Date:</Label>
                <Input
                  type="date"
                  name="date"
                  value={newAssessment.date}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Duration:</Label>
                <Input
                  type="text"
                  name="duration"
                  value={newAssessment.duration}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Total Marks:</Label>
                <Input
                  type="number"
                  name="totalMarks"
                  value={newAssessment.totalMarks}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Teacher ID:</Label>
                <Select
                  name="teacherId"
                  value={newAssessment.teacherId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Student ID:</Label>
                <Select
                  name="studentId"
                  value={newAssessment.studentId}
                  onChange={handleChange}
                >
                  <option value="">Select Student (optional)</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <SubmitButton type="submit">Create Assessment</SubmitButton>
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


//Test it on my postman

// {
//   "title": "Math Assessment 1",
//   "description": "Chapter 1: Algebra",
//   "classId": 1,
//   "subject": "Mathematics",
//   "date": "2024-08-01",
//   "duration": 60,
//   "totalMarks": 100,
//   "teacherId": 1,
//   "studentId": 1
// }
