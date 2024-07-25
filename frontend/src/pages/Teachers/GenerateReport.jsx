import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';

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

const DownloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// PDF Document Component
const MyDocument = ({ schoolName, studentName, admissionNumber, grades }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>{schoolName}</Text>
        <Text>{studentName}</Text>
        <Text>Admission Number: {admissionNumber}</Text>
        <View style={styles.table}>
          <Text style={styles.tableHeader}>Subject</Text>
          <Text style={styles.tableHeader}>Marks</Text>
          {grades.map((grade, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{grade.subject}</Text>
              <Text style={styles.tableCell}>{grade.grade}</Text>
            </View>
          ))}
        </View>
        <Text>Additional descriptive data here (e.g., Average, Below Average)</Text>
      </View>
    </Page>
  </Document>
);

const GenerateReport = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch students from API
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch grades for the selected student from API
      const fetchGrades = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/api/grades?student_id=${selectedStudent}`);
          setGrades(response.data);
        } catch (error) {
          console.error('Error fetching grades:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchGrades();
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
              {student.name} - {student.admissionNumber}
            </Option>
          ))}
        </Select>
      </InputGroup>

      {selectedStudent && grades.length > 0 && !loading && (
        <div>
          <PDFDownloadLink
            document={<MyDocument 
                        schoolName="Your School Name" 
                        studentName={students.find(student => student.id === selectedStudent)?.name} 
                        admissionNumber={students.find(student => student.id === selectedStudent)?.admissionNumber} 
                        grades={grades} 
                      />}
            fileName={`${students.find(student => student.id === selectedStudent)?.name}_Report.pdf`}
          >
            {({ loading }) => (
              <DownloadButton>
                {loading ? 'Loading document...' : 'Download Report'}
              </DownloadButton>
            )}
          </PDFDownloadLink>

          <h3>Grades for {students.find(student => student.id === selectedStudent)?.name}</h3>
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
                  <TableData>{grade.grade}</TableData>
                </tr>
              ))}
            </tbody>
          </GradesTable>
        </div>
      )}

      {loading && <p>Loading grades...</p>}
    </ReportContainer>
  );
};

export default GenerateReport;

// Styles for PDF Document
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderCollapse: 'collapse',
    marginTop: 10,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
});
