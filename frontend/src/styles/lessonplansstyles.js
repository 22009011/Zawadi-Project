import styled from 'styled-components';

export const LessonPlansContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const LessonPlan = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;  
  padding: 15px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const LessonTitle = styled.h3`
  color: #333;
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const LessonContent = styled.p`
  color: #555;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const LessonForm = styled.form`
  margin-bottom: 20px;
`;

export const LessonInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const LessonTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const AddLessonButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const LessonPlansContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LessonPlansHeader = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const LessonPlansList = styled.div`
  width: 100%;
  max-width: 800px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ClassSelect = styled(Select)`
  margin-bottom: 20px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const UpdateButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const IconWrapper = styled.span`
  margin-left: 5px;
`;

export const AddLessonPlanButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const AddLessonPlanForm = styled.form`
  margin-bottom: 20px;
`;

export const AddLessonPlanInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LessonPlanDetails = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const LessonPlanItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const LessonPlanList = styled.div`
  margin-bottom: 20px;
`;
