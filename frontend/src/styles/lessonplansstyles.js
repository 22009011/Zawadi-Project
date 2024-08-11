import styled from 'styled-components';

export const LessonPlansContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const LessonPlan = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LessonTitle = styled.h3`
  color: #34495e;
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const LessonContent = styled.p`
  color: #7f8c8d;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const LessonForm = styled.form`
  margin-top: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LessonInput = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
`;

export const LessonTextarea = styled.textarea`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
  height: 150px;
  resize: none;
`;

export const Select = styled.select`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1.1em;
  color: #34495e; /* Text color set to black */
`;

export const AddLessonButton = styled.button`
  padding: 12px 25px;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #1f6391;
  }
`;

export const ViewLessonPlansButton = styled.button`
  padding: 12px 25px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #c0392b;
  }
`;

export const LessonPlansContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LessonPlansHeader = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2em;
  /* Align header with the form */
  margin-left: 20px; /* Adjust as needed */
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
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #c0392b;
  }
`;

export const UpdateButton = styled.button`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    background-color: #1e8449;
  }
`;
