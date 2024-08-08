import React, { useState, useEffect } from 'react';
import {
  LessonPlansContainer, LessonPlan, LessonTitle, LessonContent,
  LessonForm, LessonInput, LessonTextarea, AddLessonButton,
  LessonPlansContent, LessonPlansHeader,
  LessonPlansList, ClassSelect, Actions, DeleteButton, UpdateButton
} from '../../styles/lessonplansstyles.js';

const LessonPlans = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    class_id: ''
  });

  useEffect(() => {
    // Fetch lesson plans from the API
    const fetchLessonPlans = async () => {
      try {
        const response = await fetch('/api/lessonplans');
        const data = await response.json();
        setLessonPlans(data);
      } catch (error) {
        console.error('Error fetching lesson plans:', error);
      }
    };

    fetchLessonPlans();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add lesson plan to the API
    try {
      const response = await fetch('/api/lessonplans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const newLessonPlan = await response.json();
      setLessonPlans([...lessonPlans, newLessonPlan]);
      setFormData({ title: '', content: '', class_id: '' });
    } catch (error) {
      console.error('Error adding lesson plan:', error);
    }
  };

  const handleDelete = async (id) => {
    // Delete lesson plan from the API
    try {
      await fetch(`/api/lessonplans/${id}`, { method: 'DELETE' });
      setLessonPlans(lessonPlans.filter(plan => plan.id !== id));
    } catch (error) {
      console.error('Error deleting lesson plan:', error);
    }
  };

  return (
    <LessonPlansContainer>
      <LessonPlansHeader>Lesson Plans</LessonPlansHeader>
      <LessonPlansContent>
        <LessonPlansList>
          {lessonPlans.length > 0 ? lessonPlans.map(plan => (
            <LessonPlan key={plan.id}>
              <LessonTitle>{plan.title}</LessonTitle>
              <LessonContent>{plan.content}</LessonContent>
              <Actions>
                <DeleteButton onClick={() => handleDelete(plan.id)}>Delete</DeleteButton>
                <UpdateButton>Update</UpdateButton>
              </Actions>
            </LessonPlan>
          )) : <p>No lesson plans available.</p>}
        </LessonPlansList>
        <LessonForm onSubmit={handleSubmit}>
          <LessonInput
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <LessonTextarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
          <ClassSelect
            name="class_id"
            value={formData.class_id}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Class</option>
            {/* Populate options dynamically */}
          </ClassSelect>
          <AddLessonButton type="submit">Add Lesson Plan</AddLessonButton>
        </LessonForm>
      </LessonPlansContent>
    </LessonPlansContainer>
  );
};

export default LessonPlans;
