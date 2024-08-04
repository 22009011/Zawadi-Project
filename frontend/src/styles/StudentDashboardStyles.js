import styled from 'styled-components';

export const StudentDashboardContainer = styled.div`
padding: 20px;
`;

export const Content = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

export const Section = styled.div`
background: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333; /* Darker title color for better contrast */
`;

export const CardContainer = styled.div`
display: flex;
justify-content: space-around;
`;

export const Card = styled.div`
  flex: 1; /* Grow to fill space */
  min-width: 200px; /* Minimum width for responsiveness */
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02); /* Slight scale effect on hover */
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em; /* Slightly larger title */
`;

export const CardContent = styled.div`
  font-size: 24px; 
  font-weight: bold;
  color: #007bff; /* Primary color for emphasis */
`;
