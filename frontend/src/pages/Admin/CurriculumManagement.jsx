import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import CurriculumForm from './CurriculumForm';
import CurriculumListDisplay from './CurriculumList';
import {
  CurriculumContainer,
  Content,
  CurriculumContent,
  CurriculumHeader,
  CurriculumButton,
} from '../../styles/CurriculumStyles';

const CurriculumManagement = () => {
  const [curriculums, setCurriculums] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showAllCurriculums, setShowAllCurriculums] = useState(false);

  useEffect(() => {
    fetchCurriculums();
    fetchSubjects();
    fetchClasses();
    fetchTeachers();
  }, []);

  const fetchCurriculums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/curriculum-entries');
      setCurriculums(response.data);
    } catch (error) {
      console.error('Error fetching curriculums:', error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/subjects');
      setSubjects(response.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
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
      console.error('Error fetching teachers:', error);
    }
  };

  const handleDeleteCurriculum = async (curriculumId) => {
    try {
      await axios.delete(`http://localhost:5000/api/curriculum-entries/${curriculumId}`);
      fetchCurriculums();
      toast.success('Curriculum deleted successfully', { autoClose: 2000 });
    } catch (error) {
      console.error('Error deleting curriculum:', error);
      toast.error('Failed to delete curriculum');
    }
  };

  const handleUpdateCurriculum = (curriculumId, curriculumData) => {
    // Implement the logic to update curriculum
    console.log('Updating curriculum:', curriculumId, curriculumData);
  };

  return (
    <CurriculumContainer>
      <Content>
        <CurriculumHeader>
          <h2>Curriculum Management</h2>
          <CurriculumButton onClick={() => setShowAllCurriculums(!showAllCurriculums)}>
            {showAllCurriculums ? 'Hide All Curriculums' : 'Show All Curriculums'}
          </CurriculumButton>
        </CurriculumHeader>
        <CurriculumContent>
          <CurriculumForm
            fetchCurriculums={fetchCurriculums}
            classes={classes}
            subjects={subjects}
            teachers={teachers}
          />
          {showAllCurriculums && (
            <CurriculumListDisplay
              curriculums={curriculums}
              handleDeleteCurriculum={handleDeleteCurriculum}
              handleUpdateCurriculum={handleUpdateCurriculum}
            />
          )}
        </CurriculumContent>
      </Content>
      <ToastContainer />
    </CurriculumContainer>
  );
};

export default CurriculumManagement;
