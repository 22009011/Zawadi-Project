import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StudentsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
`;

export const StudentDetails = styled.div`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c82333;
  }
`;

export const UpdateButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

export const IconWrapper = styled.span`
  margin-left: 5px;
`;

export const AddStudentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%; /* Ensure form takes full width */
`;

export const AddStudentInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const AddStudentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const SelectOption = styled.option`
  font-size: 16px;
`;
