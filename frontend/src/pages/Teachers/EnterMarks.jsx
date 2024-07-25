import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import jsPDF from 'jspdf';

const EnterMarksContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
  display: block;
  margin-top: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
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

const Option = styled.option`
  padding: 8px;
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

const DownloadButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #45A049;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f1f1f1;
  border-bottom: 2px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const EnterMarksSection = () => {
  const [studentName, setStudentName] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [enteredMarks, setEnteredMarks] = useState([]);

  const handleSubmitMarks = async (e) => {
    e.preventDefault();
    const newMark = { studentName, classLevel, admissionNumber, subject, marks };

    try {
      const response = await axios.post('http://localhost:5000/api/grades', {
        student_id: admissionNumber, // Assuming admissionNumber is the student_id
        subject,
        grade: marks,
        performance_level: getPerformanceLevel(marks), // Custom function to determine performance level
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
        },
      });

      setEnteredMarks([...enteredMarks, newMark]);
      setStudentName('');
      setClassLevel('');
      setAdmissionNumber('');
      setSubject('');
      setMarks('');
    } catch (error) {
      console.error('Error submitting marks:', error);
    }
  };

  const getPerformanceLevel = (marks) => {
    if (marks >= 90) return 'Excellent';
    if (marks >= 75) return 'Meets Expectation';
    if (marks >= 50) return 'Average';
    return 'Below Average';
  };

  const handleDownloadReport = (student) => {
    const doc = new jsPDF();
    doc.text('School Name: Your School Name', 10, 10);
    doc.text(`Student Name: ${student.studentName}`, 10, 20);
    doc.text(`Class: ${student.classLevel}`, 10, 30);
    doc.text(`Admission Number: ${student.admissionNumber}`, 10, 40);
    doc.text('Grades:', 10, 50);

    const startY = 60;
    let y = startY;

    student.grades.forEach((grade, index) => {
      doc.text(`${index + 1}. Subject: ${grade.subject}, Marks: ${grade.marks}, Performance: ${getPerformanceLevel(grade.marks)}`, 10, y);
      y += 10;
    });

    doc.save(`${student.studentName}_Report.pdf`);
  };

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/grades', {
          params: { student_id: admissionNumber }, // Fetch grades for specific student
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Assuming response contains an array of grades for the student
        setEnteredMarks(response.data.map((grade) => ({
          studentName: grade.student_id, // Modify this based on your actual data structure
          classLevel: '', // Add the correct class level data if available
          admissionNumber: grade.student_id,
          subject: grade.subject,
          marks: grade.grade,
          performance_level: grade.performance_level,
        })));
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchGrades();
  }, [admissionNumber]);

  return (
    <EnterMarksContainer>
      <FormContainer>
        <form onSubmit={handleSubmitMarks}>
          <InputGroup>
            <Label>Student Name:</Label>
            <Input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Class:</Label>
            <Input type="text" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Admission Number:</Label>
            <Input type="text" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Subject:</Label>
            <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <Option value="">Select Subject</Option>
              <Option value="Math">Math</Option>
              <Option value="Science">Science</Option>
              <Option value="English">English</Option>
              {/* Add more subjects as needed */}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Marks:</Label>
            <Input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} />
          </InputGroup>
          <SubmitButton type="submit">Submit Marks</SubmitButton>
        </form>
      </FormContainer>

      {enteredMarks.length > 0 && (
        <div>
          <h3>Entered Marks</h3>
          <Table>
            <thead>
              <tr>
                <TableHeader>Student Name</TableHeader>
                <TableHeader>Class</TableHeader>
                <TableHeader>Admission Number</TableHeader>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Marks</TableHeader>
              </tr>
            </thead>
            <tbody>
              {enteredMarks.map((mark, index) => (
                <tr key={index}>
                  <TableCell>{mark.studentName}</TableCell>
                  <TableCell>{mark.classLevel}</TableCell>
                  <TableCell>{mark.admissionNumber}</TableCell>
                  <TableCell>{mark.subject}</TableCell>
                  <TableCell>{mark.marks}</TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
          <DownloadButton onClick={() => handleDownloadReport({ studentName, classLevel, admissionNumber, grades: enteredMarks })}>
            Download Report
          </DownloadButton>
        </div>
      )}
    </EnterMarksContainer>
  );
};

export default EnterMarksSection;
