// AttendanceStyles.js
import styled from 'styled-components';

export const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
`;

export const AttendanceContent = styled.div`
  margin: 20px auto;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border: 1px solid #e1e5e8;
`;

export const AttendanceHeader = styled.h2`
  margin-bottom: 25px;
  color: #333;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export const AttendanceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AttendanceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e1e5e8;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StudentName = styled.div`
  font-size: 18px;
  color: #333;
  flex: 1;
`;

export const StatusButton = styled.button`
  padding: 8px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) =>
    props.selected
      ? props.status === 'Absent'
        ? '#e53935' // Red for Absent
        : '#4caf50' // Green for Present
      : '#e0e0e0'};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.status === 'Absent'
          ? '#d32f2f' // Darker red for Absent
          : '#45a049' // Darker green for Present
        : '#c0c0c0'};
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
`;

export const ClassSelector = styled.div`
  margin-bottom: 1em;

  label {
    font-size: 1em;
    color: #333;
    margin-right: 0.5em;
  }

  select {
    padding: 0.5em;
    font-size: 1em;
    margin-left: 0.5em;
    background-color: #ffffff;
    color: #333;
    border: 1px solid #e1e5e8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    option {
      color: #333;
    }
  }
`;