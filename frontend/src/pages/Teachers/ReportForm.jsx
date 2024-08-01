import React, { useState, useEffect } from 'react';
import { FormContainer, Input, Button, Select, FormTitle } from '../../styles/ReportStyles.js';
import axios from 'axios';

const performanceLevels = [
  'Emerging',
  'Developing',
  'Proficient',
  'Advanced',
  'Exceptional'
];

const StudentForm = ({ onSubmit }) => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedGradeId, setSelectedGradeId] = useState('');
  const [subjects, setSubjects] = useState([
    { subject: '', performanceLevel: '', feedback: '' }
  ]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classes');
        setGrades(response.data);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchStudents();
    fetchGrades();
  }, []);

  const handleAddSubject = () => {
    setSubjects([...subjects, { subject: '', performanceLevel: '', feedback: '' }]);
  };

  const handleSubjectChange = (index, e) => {
    const newSubjects = subjects.slice();
    newSubjects[index][e.target.name] = e.target.value;
    setSubjects(newSubjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentId: selectedStudentId,
      gradeId: selectedGradeId,
      subjects
    });
    setSelectedStudentId('');
    setSelectedGradeId('');
    setSubjects([{ subject: '', performanceLevel: '', feedback: '' }]);
  };

  return (
    <FormContainer>
      <FormTitle>Enter Student Details</FormTitle>
      <form onSubmit={handleSubmit}>
        <Select
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
          required
        >
          <option value="">Select Student Name</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </Select>
        <Select
          value={selectedGradeId}
          onChange={(e) => setSelectedGradeId(e.target.value)}
          required
        >
          <option value="">Select Grade Level</option>
          {grades.map(grade => (
            <option key={grade.id} value={grade.id}>{grade.name}</option>
          ))}
        </Select>
        {subjects.map((subject, index) => (
          <div key={index}>
            <Input
              type="text"
              name="subject"
              value={subject.subject}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Subject"
              required
            />
            <Select
              name="performanceLevel"
              value={subject.performanceLevel}
              onChange={(e) => handleSubjectChange(index, e)}
              required
            >
              <option value="">Select Performance Level</option>
              {performanceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Select>
            <Input
              type="text"
              name="feedback"
              value={subject.feedback}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Feedback"
              required
            />
          </div>
        ))}
        <Button type="button" onClick={handleAddSubject}>Add Another Subject</Button>
        <Button type="submit" onSubmit={handleFormSubmit}>Submit</Button>
      </form>
    </FormContainer>
  );
};

export default StudentForm;
