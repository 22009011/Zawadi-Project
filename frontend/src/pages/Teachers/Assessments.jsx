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
  DownloadButton,
  ExpandableContainer,
  AssessmentBox,
  AssessmentTitle,
  AssessmentContent,
  GradeContainer,
  PDFDownloadButton,
} from '../../styles/AssessmentsStyles.js';
import axios from 'axios';

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('summative'); // Default to Summative assessments
  const [showAllAssessments, setShowAllAssessments] = useState(false); // Manage visibility of expanded content
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
      <DownloadButton onClick={() => setShowAllAssessments(!showAllAssessments)}>
        {showAllAssessments ? 'Collapse Assessments' : 'Download All Grade Assessments'}
      </DownloadButton>
      {showAllAssessments && (
        <ExpandableContainer>
          {['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].map(grade => (
            <GradeContainer key={grade}>
              <AssessmentTitle>{grade} Assessments</AssessmentTitle>
              <AssessmentBox>
                <AssessmentContent>Click below to download the assessment document for {grade}.</AssessmentContent>
                <PDFDownloadButton href="/path/to/assessment.pdf" download={`${grade}_Assessment.pdf`}>
                  Download {grade} Assessment PDF
                </PDFDownloadButton>
              </AssessmentBox>
            </GradeContainer>
          ))}
        </ExpandableContainer>
      )}
      {activeTab === 'summative' && (
        <div>
          <h3>Summative Assessments Content</h3>
          <p>Here teachers can create, view, assign, and submit results for Summative assessments.</p>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" name="title" value={newAssessment.title} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea id="description" name="description" value={newAssessment.description} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="classId">Class</Label>
                <Select id="classId" name="classId" value={newAssessment.classId} onChange={handleChange} required>
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" name="subject" value={newAssessment.subject} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="date">Date</Label>
                <Input type="date" id="date" name="date" value={newAssessment.date} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="duration">Duration</Label>
                <Input type="text" id="duration" name="duration" value={newAssessment.duration} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="totalMarks">Total Marks</Label>
                <Input type="number" id="totalMarks" name="totalMarks" value={newAssessment.totalMarks} onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="teacherId">Teacher</Label>
                <Select id="teacherId" name="teacherId" value={newAssessment.teacherId} onChange={handleChange} required>
                  {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="studentId">Student</Label>
                <Select id="studentId" name="studentId" value={newAssessment.studentId} onChange={handleChange} required>
                  {students.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </Select>
              </FormGroup>
              <SubmitButton type="submit">Submit</SubmitButton>
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
