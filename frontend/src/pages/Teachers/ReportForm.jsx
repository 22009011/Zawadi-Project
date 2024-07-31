import React, { useState } from 'react';
import { FormContainer, Input, Button, Select, FormTitle } from '../../styles/ReportStyles.js';

const performanceLevels = [
  'Emerging',
  'Developing',
  'Proficient',
  'Advanced',
  'Exceptional'
];

const StudentForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [subjects, setSubjects] = useState([
    { subject: '', performanceLevel: '', feedback: '' }
  ]);

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
      studentName,
      gradeLevel,
      subjects
    });
    setStudentName('');
    setGradeLevel('');
    setSubjects([{ subject: '', performanceLevel: '', feedback: '' }]);
  };

  return (
    <FormContainer>
      <FormTitle>Enter Student Details</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
          required
        />
        <Input
          type="text"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          placeholder="Grade Level"
          required
        />
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
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default StudentForm;
