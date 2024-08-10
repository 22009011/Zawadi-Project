import React, { useState } from 'react';
import {
  Layout,
  Header,
  Title,
  Breadcrumb,
  Sidebar,
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

const HeaderComponent = () => (
  <Header>
    <Title>Curriculum Management</Title>
    <Breadcrumb>Grade 1 / Math / Algebra / Linear Equations</Breadcrumb>
  </Header>
);

const SidebarComponent = () => {
  const [gradesExpanded, setGradesExpanded] = useState(true);
  const [subjectsExpanded, setSubjectsExpanded] = useState(false);
  const [topicsExpanded, setTopicsExpanded] = useState(false);

  return (
    <Sidebar>
      <CollapseButton onClick={() => setGradesExpanded(!gradesExpanded)}>
        {gradesExpanded ? '▼' : '▶'} Grades
      </CollapseButton>
      {gradesExpanded && (
        <List>
          <ListItem onClick={() => setSubjectsExpanded(!subjectsExpanded)}>
            Grade 1
          </ListItem>
          {subjectsExpanded && (
            <List>
              <ListItem onClick={() => setTopicsExpanded(!topicsExpanded)}>
                Math
              </ListItem>
              {topicsExpanded && (
                <List>
                  <ListItem>Algebra</ListItem>
                  <ListItem>Geometry</ListItem>
                </List>
              )}
            </List>
          )}
        </List>
      )}
    </Sidebar>
  );
};

const MainContentComponent = () => {
  const subtopics = ['Linear Equations', 'Quadratic Equations', 'Polynomials'];
  const progress = 50; // Example progress value

  return (
    <MainContent>
      <h2>Subtopics</h2>
      <SubtopicsList>
        {subtopics.map((subtopic, index) => (
          <SubtopicItem key={index}>
            <RadioButton />
            {subtopic}
          </SubtopicItem>
        ))}
      </SubtopicsList>
      <ProgressBarContainer>
        <h3>Progress</h3>
        <ProgressBar>
          <Progress width={progress} />
        </ProgressBar>
      </ProgressBarContainer>
    </MainContent>
  );
};

const ViewCurriculumManagement = () => (
  <Layout>
    <SidebarComponent />
    <MainContentComponent />
  </Layout>
);

export default ViewCurriculumManagement;
