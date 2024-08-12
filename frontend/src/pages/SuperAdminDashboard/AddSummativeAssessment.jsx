import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import {
  AddAssessmentForm,
  AddAssessmentInput,
  AddAssessmentTextArea,
  AddAssessmentButton,
  AssessmentTypeSelect,
  AddChoiceButton,
  ChoiceInputContainer,
  ChoiceInput,
} from '../../styles/SuperAssessments.js'; // Import the same styles

const AddSummativeAssessment = () => {
  const [newAssessment, setNewAssessment] = useState({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });

  const handleAddAssessment = async (e) => {
    e.preventDefault();
    if (newAssessment.title && newAssessment.description && newAssessment.grade && newAssessment.deadline) {
      try {
        const response = await axios.post('http://localhost:5000/api/summative-assessments', newAssessment);
        toast.success('Summative assessment added successfully');
        // Optionally handle response or reset form
      } catch (error) {
        console.error('Error adding summative assessment:', error);
        toast.error('Failed to add summative assessment');
      }
    } else {
      toast.warning('Please fill in all fields');
    }
  };

  const handleAddChoice = () => {
    const newChoiceLabel = String.fromCharCode(65 + newAssessment.choices.length);
    setNewAssessment({
      ...newAssessment,
      choices: [...newAssessment.choices, { label: newChoiceLabel, text: '' }]
    });
  };

  const handleChoiceTextChange = (index, text) => {
    const updatedChoices = [...newAssessment.choices];
    updatedChoices[index].text = text;
    setNewAssessment({ ...newAssessment, choices: updatedChoices });
  };

  return (
    <AddAssessmentForm onSubmit={handleAddAssessment}>
      <AddAssessmentInput
        type="text"
        placeholder="Enter assessment title"
        value={newAssessment.title}
        onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })}
      />
      <AddAssessmentTextArea
        placeholder="Enter assessment description"
        value={newAssessment.description}
        onChange={(e) => setNewAssessment({ ...newAssessment, description: e.target.value })}
      />
      <AddAssessmentInput
        type="text"
        placeholder="Enter assessment grade"
        value={newAssessment.grade}
        onChange={(e) => setNewAssessment({ ...newAssessment, grade: e.target.value })}
      />
      <AddAssessmentInput
        type="date"
        placeholder="Enter assessment deadline"
        value={newAssessment.deadline}
        onChange={(e) => setNewAssessment({ ...newAssessment, deadline: e.target.value })}
      />
      <AssessmentTypeSelect
        value={newAssessment.type}
        onChange={(e) => setNewAssessment({ ...newAssessment, type: e.target.value })}
      >
        <option value="Essay">Essay</option>
        <option value="Multiple Choice">Multiple Choice</option>
      </AssessmentTypeSelect>
      {newAssessment.type === 'Multiple Choice' && (
        <>
          <AddChoiceButton type="button" onClick={handleAddChoice}>
            +add the choices
          </AddChoiceButton>
          {newAssessment.choices.map((choice, index) => (
            <ChoiceInputContainer key={index}>
              <span>{choice.label}</span>
              <ChoiceInput
                type="text"
                value={choice.text}
                onChange={(e) => handleChoiceTextChange(index, e.target.value)}
              />
            </ChoiceInputContainer>
          ))}
        </>
      )}
      <AddAssessmentButton type="submit">Add Summative Assessment</AddAssessmentButton>
      <ToastContainer />
    </AddAssessmentForm>
  );
};

export default AddSummativeAssessment;
