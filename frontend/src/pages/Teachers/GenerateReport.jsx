import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const ReportContainer = styled.div`
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

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
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

const GradesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// PDF Document Component
const MyDocument = ({ schoolName, studentName, grades }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>{schoolName}</Text>
        <Text>{studentName}</Text>
        <GradesTable style={styles.table}>
          <thead>
            <tr>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Marks</TableHeader>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <TableData>{grade.subject}</TableData>
                <TableData>{grade.marks}</TableData>
              </tr>
            ))}
          </tbody>
        </GradesTable>
        <Text>Additional descriptive data here (e.g., Average, Below Average)</Text>
      </View>
    </Page>
  </Document>
);

const GenerateReport = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Fetch students from API or use static data
    setStudents([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ]);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch grades for the selected student from API or use static data
      setGrades([
        { subject: 'Math', marks: 90 },
        { subject: 'Science', marks: 85 },
        { subject: 'English', marks: 88 },
      ]);
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  return (
    <ReportContainer>
      <SectionTitle>Generate Student Report</SectionTitle>
      <InputGroup>
        <Label>Select Student:</Label>
        <Select value={selectedStudent} onChange={handleStudentChange}>
          <Option value="">Select Student</Option>
          {students.map((student) => (
            <Option key={student.id} value={student.id}>
              {student.name}
            </Option>
          ))}
        </Select>
      </InputGroup>

      {selectedStudent && grades.length > 0 && (
        <div>
          <PDFDownloadLink
            document={<MyDocument schoolName="Your School Name" studentName={students.find(student => student.id == selectedStudent)?.name} grades={grades} />}
            fileName={`${students.find(student => student.id == selectedStudent)?.name}_Report.pdf`}
          >
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF Report')}
          </PDFDownloadLink>

          <h3>Grades for {students.find(student => student.id == selectedStudent)?.name}</h3>
          <GradesTable>
            <thead>
              <tr>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Marks</TableHeader>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <TableData>{grade.subject}</TableData>
                  <TableData>{grade.marks}</TableData>
                </tr>
              ))}
            </tbody>
          </GradesTable>
        </div>
      )}
    </ReportContainer>
  );
};

export default GenerateReport;

// Styles for PDF Document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: 10,
  },
});
