import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash, FaCheckCircle, FaEye } from 'react-icons/fa';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
  AssignmentTypeSelect,
  AddChoiceButton,
  ChoiceInputContainer,
  ChoiceInput,
  SeeAssignmentsButton,
  StudentAssignmentsButton,
  ButtonContainer,
} from '../../styles/AssignmentsStyles';
import { useNavigate } from 'react-router-dom';

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });
  const [assignments, setAssignments] = useState([]);
  const [showAssignments, setShowAssignments] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
      toast.error('Failed to fetch assignments');
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.description && newAssignment.grade && newAssignment.deadline) {
      try {
        const response = await axios.post('http://localhost:5000/api/assignments', newAssignment);
        setAssignments([...assignments, response.data]);
        setNewAssignment({ title: '', description: '', grade: '', deadline: '', type: 'Essay', choices: [] });
        toast.success('Assignment added successfully');
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('Failed to add assignment');
      }
    } else {
      toast.warning('Please fill in all fields');
    }
  };

  const handleDeleteAssignment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/assignments/${id}`);
      setAssignments(assignments.filter(assignment => assignment.id !== id));
      toast.success('Assignment deleted successfully');
    } catch (error) {
      console.error('Error deleting assignment:', error);
      toast.error('Failed to delete assignment');
    }
  };

  const handleEditAssignment = (assignment) => {
    setNewAssignment(assignment);
  };

  const handleAddChoice = () => {
    const newChoiceLabel = String.fromCharCode(65 + newAssignment.choices.length); // A, B, C, ...
    setNewAssignment({
      ...newAssignment,
      choices: [...newAssignment.choices, { label: newChoiceLabel, text: '' }]
    });
  };

  const handleChoiceTextChange = (index, text) => {
    const updatedChoices = [...newAssignment.choices];
    updatedChoices[index].text = text;
    setNewAssignment({ ...newAssignment, choices: updatedChoices });
  };

  const handleToggleAssignments = () => {
    setShowAssignments(!showAssignments);
    if (!showAssignments) {
      navigate('/teacher/assignments');
    }
  };

  const handleNavigateToStudentAssignments = () => {
    navigate('/teacher/student-assignments-submitted');
  };

  return (
    <AssignmentsContainer>
      <TeacherSidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <ButtonContainer>
            <SeeAssignmentsButton onClick={handleToggleAssignments}>
              {showAssignments ? 'Hide Assignments' : 'See Assignments'}
            </SeeAssignmentsButton>
            <StudentAssignmentsButton onClick={handleNavigateToStudentAssignments}>
              Students Assignments Submitted
            </StudentAssignmentsButton>
          </ButtonContainer>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="date"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AssignmentTypeSelect
              value={newAssignment.type}
              onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
            >
              <option value="Essay">Essay</option>
              <option value="Multiple Choice">Multiple Choice</option>
            </AssignmentTypeSelect>
            {newAssignment.type === 'Multiple Choice' && (
              <>
                <AddChoiceButton type="button" onClick={handleAddChoice}>
                  +add the choices
                </AddChoiceButton>
                {newAssignment.choices.map((choice, index) => (
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
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          {showAssignments && (
            <AssignmentList>
              {assignments && assignments.length > 0 ? assignments.map((assignment) => (
                <AssignmentItem key={assignment.id}>
                  <strong>{assignment.title}: </strong>
                  {assignment.description}, {assignment.grade}, {assignment.deadline}, {assignment.type}
                  <FaEdit style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }} onClick={() => handleEditAssignment(assignment)} />
                  <FaTrash style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteAssignment(assignment.id)} />
                  <FaEye style={{ marginLeft: '10px', cursor: 'pointer', color: 'green' }} onClick={() => {/* View submissions */}} />
                  <FaCheckCircle style={{ marginLeft: '10px', cursor: 'pointer', color: 'orange' }} onClick={() => {/* Mark and give feedback */}} />
                </AssignmentItem>
              )) : (
                <p>No assignments available</p>
              )}
            </AssignmentList>
          )}
        </AssignmentsContent>
      </Content>
      <ToastContainer />
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
