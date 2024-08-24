import styled from 'styled-components';

export const TeacherContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const ClassDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StudentListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }
`;

export const AssessmentForm = styled.div`
  margin-top: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
  }
`;

export const RubricForm = styled.div`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;



export const AssessmentsTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

export const StudentDetailsSection = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;

  p {
    margin: 5px 0;
  }
`;

export const Spacer = styled.div`
  margin: 30px 0; /* Adjust the space as needed */
`;

export const AddButton = styled.button`
  background-color: #4CAF50; /* Example color */
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

