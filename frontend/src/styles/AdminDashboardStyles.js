// styles/DashboardStyles.js
import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
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

export const OverviewSection = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
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
`;

export const CardContent = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff; /* Primary color for emphasis */
`;

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HalfWidthSection = styled.div`
  width: 48%;
`;

export const CalendarSection = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

export const CalendarTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarDay = styled.div`
  width: calc(100% / 7);
  text-align: center;
  margin-bottom: 5px;
`;

export const TeacherDetails = styled.div`
  margin-top: 20px;
`;

export const TeacherTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TeacherTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

export const TeacherTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const ChartContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
