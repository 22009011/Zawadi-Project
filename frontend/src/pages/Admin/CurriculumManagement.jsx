import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import {
  CurriculumContainer,
  Content,
  CurriculumContent,
  CurriculumHeader,
  CurriculumList,
  CurriculumItem,
  CurriculumDetails,
  Actions,
  AddCurriculumForm,
  AddCurriculumInput,
  AddCurriculumButton,
  Select,
  DeleteButton,
  UpdateButton,
  IconWrapper,
  SubTopicWrapper,
  AddSubTopicButton,
  OptionalText,
} from '../../styles/CurriculumStyles';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

const CurriculumManagement = () => {
  const [newCurriculum, setNewCurriculum] = useState({
    section: '',
    grade: '',
    subject: '',
    lesson: '',
    topic: '',
    subTopics: [''], // Initialize with one empty subTopic
    teacherId: '',
    timetable: '',
    class_id: '',
  });
  const [curriculums, setCurriculums] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchCurriculums();
    fetchSubjects();
    fetchClasses();
    fetchTeachers();
  }, []);

  const fetchCurriculums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/curriculums');
      setCurriculums(response.data);
    } catch (error) {
      console.error('Error fetching curriculums:', error);
    }
  };

  const fetchSubjects = async () => {
    // Example subjects
    setSubjects([
      { id: 1, name: 'Mathematics' },
      { id: 2, name: 'Science' },
      { id: 3, name: 'History' },
      { id: 4, name: 'English' },
      { id: 5, name: 'Geography' },
    ]);
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/teachers');
      setTeachers(response.data);
    } catch (error) {
      toast.error('Error fetching teachers.');
      console.error('Error fetching teachers:', error);
    }
  };

  const handleAddCurriculum = async (e) => {
    e.preventDefault();
    const { section, grade, subject, lesson, topic, subTopics, teacherId, timetable, class_id } = newCurriculum;

    if (subject && topic && subTopics.length > 0 && teacherId && timetable && class_id) {
      try {
        const response = await axios.post('http://localhost:5000/api/curriculums', {
          section,
          grade,
          subject,
          lesson,
          topic,
          subTopics,
          teacherId,
          timetable,
          class_id,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setCurriculums([...curriculums, response.data]);
        setNewCurriculum({
          section: '',
          grade: '',
          subject: '',
          lesson: '',
          topic: '',
          subTopics: [''], // Reset to one empty subTopic
          teacherId: '',
          timetable: '',
          class_id: '',
        });
        toast.success('Curriculum added successfully', { autoClose: 2000 });
      } catch (error) {
        console.error('Error adding curriculum:', error.response?.data || error.message);
        toast.error('Failed to add curriculum');
      }
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleDeleteCurriculum = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/curriculums/${id}`);
      setCurriculums(curriculums.filter((curriculum) => curriculum.id !== id));
      toast.success('Curriculum deleted successfully', { autoClose: 2000 });
    } catch (error) {
      console.error('Error deleting curriculum:', error);
      toast.error('Failed to delete curriculum');
    }
  };

  const handleUpdateCurriculum = async (id, updatedCurriculum) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/curriculums/${id}`, updatedCurriculum);
      setCurriculums(curriculums.map((curriculum) => (curriculum.id === id ? response.data : curriculum)));
      toast.success('Curriculum updated successfully', { autoClose: 2000 });
    } catch (error) {
      console.error('Error updating curriculum:', error);
      toast.error('Failed to update curriculum');
    }
  };

  const handleAddSubTopic = () => {
    setNewCurriculum((prev) => ({
      ...prev,
      subTopics: [...prev.subTopics, ''],
    }));
  };

  const handleSubTopicChange = (index, value) => {
    const updatedSubTopics = [...newCurriculum.subTopics];
    updatedSubTopics[index] = value;
    setNewCurriculum((prev) => ({
      ...prev,
      subTopics: updatedSubTopics,
    }));
  };

  return (
    <CurriculumContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <CurriculumContent>
          <CurriculumHeader>Curriculum Management</CurriculumHeader>
          <AddCurriculumForm onSubmit={handleAddCurriculum}>
            <AddCurriculumInput
              type="text"
              placeholder="Enter section (optional)"
              value={newCurriculum.section}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, section: e.target.value })}
            />
            <Select
              value={newCurriculum.grade}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, grade: e.target.value })}
              required
            >
              <option value="" disabled>Select class</option>
              {classes.map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.grade}
                </option>
              ))}
            </Select>
            <Select
              value={newCurriculum.subject}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, subject: e.target.value })}
              required
            >
              <option value="" disabled>Select subject</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </Select>
            <AddCurriculumInput
              type="text"
              placeholder="Enter lesson (optional)"
              value={newCurriculum.lesson}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, lesson: e.target.value })}
            />
            <AddCurriculumInput
              type="text"
              placeholder="Enter topic"
              value={newCurriculum.topic}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, topic: e.target.value })}
              required
            />
            <SubTopicWrapper>
              {newCurriculum.subTopics.map((subTopic, index) => (
                <AddCurriculumInput
                  key={index}
                  type="text"
                  placeholder={`Enter sub-topic ${index + 1}`}
                  value={subTopic}
                  onChange={(e) => handleSubTopicChange(index, e.target.value)}
                  required
                />
              ))}
              <AddSubTopicButton type="button" onClick={handleAddSubTopic}>
                Add Sub-Topic <FaPlus />
              </AddSubTopicButton>
            </SubTopicWrapper>
            <Select
              value={newCurriculum.teacherId}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, teacherId: e.target.value })}
              required
            >
              <option value="">Select Teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </Select>
            <AddCurriculumInput
              type="text"
              placeholder="Enter timetable"
              value={newCurriculum.timetable}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, timetable: e.target.value })}
              required
            />
            <Select
              value={newCurriculum.class_id}
              onChange={(e) => setNewCurriculum({ ...newCurriculum, class_id: e.target.value })}
              required
            >
              <option value="" disabled>Select Class ID</option>
              {classes.map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.grade}
                </option>
              ))}
            </Select>
            <OptionalText>Section and Lesson are optional.</OptionalText>
            <AddCurriculumButton type="submit">Add Curriculum</AddCurriculumButton>
          </AddCurriculumForm>
          <CurriculumList>
            {curriculums.map((curriculum) => (
              <CurriculumItem key={curriculum.id}>
                <CurriculumDetails>
                  <h3>{curriculum.topic}</h3>
                  <p>Subject: {curriculum.subject}</p>
                  <p>Teacher: {curriculum.teacher.name}</p>
                  <p>Timetable: {curriculum.timetable}</p>
                </CurriculumDetails>
                <Actions>
                  <IconWrapper>
                    <UpdateButton
                      onClick={() => handleUpdateCurriculum(curriculum.id, curriculum)}
                    >
                      <FaEdit />
                    </UpdateButton>
                    <DeleteButton
                      onClick={() => handleDeleteCurriculum(curriculum.id)}
                    >
                      <FaTrash />
                    </DeleteButton>
                  </IconWrapper>
                </Actions>
              </CurriculumItem>
            ))}
          </CurriculumList>
        </CurriculumContent>
      </Content>
    </CurriculumContainer>
  );
};

export default CurriculumManagement;
