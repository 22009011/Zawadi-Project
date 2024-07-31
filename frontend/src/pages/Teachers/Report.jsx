import React, { useState } from 'react';
import StudentForm from './ReportForm';
import StudentReport from './ReportData'
import { Container, Title } from '../../styles/ReportStyles.js';

const App = () => {
  const [studentData, setStudentData] = useState(null);

  const handleStudentData = (data) => {
    setStudentData(data);
  };

  return (
    <Container>
      <Title>Student Report Application</Title>
      <StudentForm onSubmit={handleStudentData} />
      {studentData && <StudentReport data={studentData} />}
    </Container>
  );
};

export default App;
