import styled from 'styled-components';

export const CurriculumContainer = styled.div`
  display: flex;
  transition: margin-left 0.3s;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '60px')}; // Adjust based on sidebar state
  width: 100%;
  @media (max-width: 768px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '200px' : '0')}; // Adjust for smaller screens
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  transition: padding-left 0.3s;
  padding-left: ${({ sidebarOpen }) => (sidebarOpen ? '20px' : '10px')}; // Adjust based on sidebar state
  @media (max-width: 768px) {
    padding-left: 10px; // Adjust for smaller screens
  }
`;

export const CurriculumHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CurriculumButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CurriculumContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0; // Adjust for smaller screens
  }
`;

export const AddCurriculumForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AddCurriculumInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const AddCurriculumButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddSubTopicButton = styled.button`
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #117a8b;
  }
`;

export const CurriculumList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CurriculumItem = styled.li`
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export const CurriculumDetails = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionalText = styled.p`
  font-style: italic;
  color: gray;
`;
