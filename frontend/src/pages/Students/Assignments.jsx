import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentTextArea,
  AssignmentButton,
} from '../../styles/AssignmentsStyles'; 

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [submission, setSubmission] = useState('');

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDoAssignment = async (assignmentId) => {
    try {
      await axios.post('http://localhost:5000/api/student-assignments', {
        assignment_id: assignmentId,
        submission,
      });
      setSubmission('');
      alert('Assignment submitted successfully');
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Failed to submit assignment');
    }
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>
            <AssignmentTextArea
              placeholder="Enter your submission"
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
            />
            <AssignmentButton onClick={() => handleDoAssignment(assignment.id)}>
              Submit
            </AssignmentButton>
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;
