import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Layout,
  Header,
  Title,
  Breadcrumb,
  Sidebar as StyledSidebar,
  CollapseButton,
  List,
  ListItem,
  MainContent,
  SubtopicsList,
  SubtopicItem,
  RadioButton,
  ProgressBarContainer,
  ProgressBar,
  Progress,
} from '../../styles/ViewCurriculumManagementStyles.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarComponent = ({ grades, onSelectGrade, onSelectSubject }) => {
  const [gradesExpanded, setGradesExpanded] = useState(true);
  const [subjectsExpanded, setSubjectsExpanded] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <StyledSidebar>
      <CollapseButton onClick={() => setGradesExpanded(!gradesExpanded)}>
        {gradesExpanded ? '▼' : '▶'} Grades
      </CollapseButton>
      {gradesExpanded && (
        <List>
          {Object.keys(grades).map(grade => (
            <ListItem
              key={grade}
              onClick={() => {
                setSelectedGrade(grade);
                setSubjectsExpanded(!subjectsExpanded);
                onSelectGrade(grade);
              }}
            >
              {grade}
            </ListItem>
          ))}
        </List>
      )}
      {subjectsExpanded && selectedGrade && (
        <List>
          {grades[selectedGrade].map(subject => (
            <ListItem
              key={subject.subject}
              onClick={() => {
                setSelectedSubject(subject.subject);
                onSelectSubject(subject.subject);
              }}
            >
              {subject.subject}
            </ListItem>
          ))}
        </List>
      )}
    </StyledSidebar>
  );
};

const MainContentComponent = ({ selectedGrade, selectedSubject, curriculums }) => {
  const filteredCurriculums = curriculums.filter(
    curriculum => curriculum.grade === selectedGrade && curriculum.subject === selectedSubject
  );

  const subtopics = filteredCurriculums.flatMap(curriculum => curriculum.subtopics || []);
  const progress = 50; // Example progress value

  return (
    <MainContent>
      <h2>Subtopics</h2>
      {filteredCurriculums.length > 0 ? (
        filteredCurriculums.map(curriculum => (
          <div key={curriculum.id}>
            <h3>{curriculum.lesson}</h3>
            <p>{curriculum.timetable}</p>
            <SubtopicsList>
              {subtopics.map((subtopic, index) => (
                <SubtopicItem key={index}>
                  <RadioButton />
                  {subtopic}
                </SubtopicItem>
              ))}
            </SubtopicsList>
          </div>
        ))
      ) : (
        <p>No curriculum data available for the selected grade and subject.</p>
      )}
      <ProgressBarContainer>
        <h3>Progress</h3>
        <ProgressBar>
          <Progress width={progress} />
        </ProgressBar>
      </ProgressBarContainer>
    </MainContent>
  );
};

const ViewCurriculumManagement = () => {
  const [curriculums, setCurriculums] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/curriculum-entries');
        setCurriculums(response.data);
        toast.success('Curriculums fetched successfully!');
      } catch (error) {
        toast.error('Error fetching curriculums.');
        console.error('Error fetching curriculums:', error);
      }
    };

    fetchCurriculums();
  }, []);

  const getCurriculumsByGrade = () => {
    const grades = {};
    curriculums.forEach(curriculum => {
      if (!grades[curriculum.grade]) {
        grades[curriculum.grade] = [];
      }
      grades[curriculum.grade].push(curriculum);
    });
    return grades;
  };

  const grades = getCurriculumsByGrade();

  return (
    <Layout>
      <ToastContainer />
      <SidebarComponent
        grades={grades}
        onSelectGrade={setSelectedGrade}
        onSelectSubject={setSelectedSubject}
      />
      <MainContentComponent
        selectedGrade={selectedGrade}
        selectedSubject={selectedSubject}
        curriculums={curriculums}
      />
    </Layout>
  );
};

export default ViewCurriculumManagement;
