// PerformanceSection.js

import React, { useState } from 'react';
import styled from 'styled-components';

const PerformanceContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#6BD4E7' : '#ccc')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#4CAAB1' : '#bbb')};
  }
`;

const PerformanceSection = () => {
  const [showPerformanceData, setShowPerformanceData] = useState(true);

  const handleShowPerformanceData = () => {
    setShowPerformanceData(true);
    // Logic to fetch and display performance data (e.g., fetch from API, update state)
  };

  return (
    <PerformanceContainer>
      <SectionTitle>Performance Section</SectionTitle>
      <ButtonGroup>
        <Button active={showPerformanceData} onClick={handleShowPerformanceData}>
          Performance Data
        </Button>
      </ButtonGroup>
      {/* Add the logic to display performance data here */}
    </PerformanceContainer>
  );
};

export default PerformanceSection;
