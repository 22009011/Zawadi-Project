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
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    box-shadow: none;
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

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 1em;
  }
`;

export const AssignmentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const AssignmentTitle = styled.h3`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const AssignmentDescription = styled.p`
  color: #555;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const AssignmentTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  width: 100%;
  font-size: 1em;

  @media screen and (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

export const AssignmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
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
  resize: vertical;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const AddAssignmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
  }
`;
