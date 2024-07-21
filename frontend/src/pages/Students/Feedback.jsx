import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import axios from 'axios';

// Styled components
const FeedbackContainer = styled.div`
  padding: 20px;
`;

const FeedbackItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  const studentId = localStorage.getItem('student_id'); // Assuming student ID is stored in localStorage

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedbacks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            student_id: studentId,
          },
        });
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Failed to fetch feedbacks', error);
      }
    };

    fetchFeedbacks();
  }, [token, studentId]);

  return (
    <FeedbackContainer>
      <Sidebar />
      <h2>Feedback</h2>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.feedback_id}>
          <h3>{feedback.title}</h3>
          <p>{feedback.content}</p>
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
}

export default Feedback;
