// styles/lessonplansstyles.js
import styled from 'styled-components';

export const LessonPlansContainer = styled.div`
  padding: 20px;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NavigationButton = styled.button`
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

export const LessonPlan = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;  
  padding: 20px;
  margin-bottom: 20px;
`;

export const LessonTitle = styled.h3`
  color: #333;
`;

export const LessonContent = styled.p`
  color: #555;
`;

export const LessonForm = styled.form`
  margin-bottom: 20px;
`;

export const LessonInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const LessonTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
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
`;

export const Timetable = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TimetableItem = styled.div`
  margin-bottom: 10px;
`;

export const LessonPlansContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LessonPlansHeader = styled.h2`
  color: #007bff;
  margin-bottom: 20px;
`;

export const LessonPlansList = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const ClassSelect = styled(Select)`
  margin-bottom: 20px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export const UpdateButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
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
`;

export const AddLessonPlanForm = styled.form`
  margin-bottom: 20px;
`;

export const AddLessonPlanInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
