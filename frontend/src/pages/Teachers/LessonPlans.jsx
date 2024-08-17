import React, { useState, useEffect } from 'react';
import {
  LessonPlansContainer, LessonPlan, LessonTitle, LessonContent,
  LessonForm, LessonInput, LessonTextarea, AddLessonButton,
  LessonPlansContent, LessonPlansHeader,
  LessonPlansList, ClassSelect, Actions, DeleteButton, UpdateButton,
  ViewLessonPlansButton, DownloadLessonPlansButton, GradeSection, GradeItem
} from '../../styles/lessonplansstyles.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LessonPlans = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [myLessonPlans, setMyLessonPlans] = useState([]);
  const [classes, setClasses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    class_id: ''
  });
  const [showMyPlans, setShowMyPlans] = useState(false);
  const [showDownloadSection, setShowDownloadSection] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLessonPlans = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/lesson-plans', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setLessonPlans(data);
      } catch (error) {
        console.error('Error fetching lesson plans:', error);
      }
    };

    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/classes', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchLessonPlans();
    fetchClasses();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/lesson-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const newLessonPlan = await response.json();
      setLessonPlans([...lessonPlans, newLessonPlan]);
      setFormData({ title: '', content: '', class_id: '' });
      toast.success('Lesson plan added successfully!');
    } catch (error) {
      console.error('Error adding lesson plan:', error);
      toast.error('Error adding lesson plan!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/lesson-plans/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLessonPlans(lessonPlans.filter(plan => plan.id !== id));
      toast.success('Lesson plan deleted successfully!');
    } catch (error) {
      console.error('Error deleting lesson plan:', error);
      toast.error('Error deleting lesson plan!');
    }
  };

  const handleViewMyLessonPlans = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lesson-plans?creator=true', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setMyLessonPlans(data);
      setShowMyPlans(!showMyPlans);
    } catch (error) {
      console.error('Error fetching my lesson plans:', error);
    }
  };

  const handleDownloadSectionToggle = () => {
    setShowDownloadSection(!showDownloadSection);
  };

  return (
    <LessonPlansContainer>
      <LessonPlansHeader>Lesson Plans</LessonPlansHeader>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <ViewLessonPlansButton onClick={handleViewMyLessonPlans}>
          {showMyPlans ? 'Hide My Lesson Plans' : 'View My Lesson Plans'}
        </ViewLessonPlansButton>
        <DownloadLessonPlansButton onClick={handleDownloadSectionToggle}>
          Download Lesson Plans
        </DownloadLessonPlansButton>
      </div>
      {showDownloadSection && (
        <GradeSection>
          {[
            { grade: 'PP1', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'PP2', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 1', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 2', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 3', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 4', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 5', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' },
            { grade: 'Grade 6', link: 'https://drive.google.com/uc?export=download&id=1ZCl0n1oCGqmb9BZvmZqwQOgIqXi4FN6o' }
          ].map((gradeInfo, index) => (
            <GradeItem key={index}>
              <h3>{gradeInfo.grade}</h3>
              <a href={gradeInfo.link} download>
                Download {gradeInfo.grade} Lesson Plan
              </a>
            </GradeItem>
          ))}
        </GradeSection>
      )}
      <LessonPlansContent>
        {showMyPlans && (
          <LessonPlansList>
            {myLessonPlans.map(plan => (
              <LessonPlan key={plan.id}>
                <LessonTitle>{plan.title}</LessonTitle>
                <LessonContent>{plan.content}</LessonContent>
                <p><strong>Class:</strong> {classes.find(c => c.id === plan.class_id)?.name}</p>
                <Actions>
                  <UpdateButton>Update</UpdateButton>
                  <DeleteButton onClick={() => handleDelete(plan.id)}>Delete</DeleteButton>
                </Actions>
              </LessonPlan>
            ))}
          </LessonPlansList>
        )}
      </LessonPlansContent>
      <LessonForm onSubmit={handleSubmit}>
        <LessonInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <LessonTextarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
        />
        <ClassSelect
          name="class_id"
          value={formData.class_id}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a class</option>
          {classes.map(cls => (
            <option key={cls.id} value={cls.id}>{cls.name}</option>
          ))}
        </ClassSelect>
        <AddLessonButton type="submit">Add Lesson Plan</AddLessonButton>
      </LessonForm>
      <ToastContainer />
    </LessonPlansContainer>
  );
};

export default LessonPlans;
