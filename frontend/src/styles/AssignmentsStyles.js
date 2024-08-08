import styled from 'styled-components';

export const AssignmentsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 240px;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
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
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media screen and (max-width: 768px) {
    padding: 8px;
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
