import styled from 'styled-components';

// Container for the entire curriculum management page
export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// Container for the main content area
export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

// Styling for the content area of the curriculum management
export const CurriculumContent = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Header of the curriculum management
export const CurriculumHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

// List of curriculums
export const CurriculumList = styled.div`
  margin-top: 20px;
`;

// Each curriculum item in the list
export const CurriculumItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

// Details of the curriculum
export const CurriculumDetails = styled.div`
  flex: 1;
`;

// Actions like edit and delete buttons
export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

// Wrapper for icon buttons
export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

// Button for adding a new curriculum
export const AddCurriculumButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

// Form for adding a new curriculum
export const AddCurriculumForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Input fields for the form
export const AddCurriculumInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

// Select dropdowns
export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

// Wrapper for subtopics
export const SubTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Button to add a new subtopic input
export const AddSubTopicButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #1976d2;
  }
`;

// Text indicating optional fields
export const OptionalText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

// Buttons for updating and deleting
export const UpdateButton = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ff8c00;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;
