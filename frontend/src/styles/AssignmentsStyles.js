import styled from 'styled-components';

export const AssignmentsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const SidebarContainer = styled.div`
  width: 240px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const AssignmentsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AssignmentsHeader = styled.h1`
  margin-bottom: 30px;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 1.5em;
  }
`;

export const AssignmentList = styled.ul`
  padding: 0;
`;

export const AssignmentItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  font-size: 1.1em;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 1em;
  }
`;

export const AddAssignmentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const AddAssignmentInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const AddAssignmentTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const AddAssignmentButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const AssignmentTypeSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const AddChoiceButton = styled.button`
  padding: 5px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0b79d0;
  }
`;

export const ChoiceInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ChoiceInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SeeAssignmentsButton = styled.button`
  padding: 10px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #fb8c00;
  }
`;








// New styles for StudentAssignments component

export const AssignmentCard = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const AssignmentTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
    margin-bottom: 8px;
  }
`;

export const AssignmentDescription = styled.p`
  font-size: 1em;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 12px;
  }
`;

export const AssignmentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const AssignmentButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;
