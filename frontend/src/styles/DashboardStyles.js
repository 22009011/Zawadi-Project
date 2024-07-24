// styles/DashboardStyles.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  background-color: #f7f8fc;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 150px;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  width: 100%;
`;

export const NavLink = styled.div`
  width: 100%;
  padding: 15px;
  text-align: left;
  color: ${(props) => (props.active ? '#1d72b8' : '#000000')};
  background-color: ${(props) => (props.active ? '#e6f4ff' : '#ffffff')};
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  width: calc(100% - 250px);
  position: fixed;
  top: 0;
  left: 250px;
  z-index: 1000;
`;

export const SearchBar = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

export const DashboardContent = styled.div`
  background-color: #f7f8fc;
  padding: 20px;
  margin-left: 250px;
  padding-top: 80px;
  min-height: 100vh;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
  margin-left: 250px;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
  margin-left: 250px;
`;

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Section = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HalfWidthSection = styled(Section)`
  flex: 1;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CalendarSection = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CalendarTitle = styled.h3`
  margin-bottom: 20px;
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const CalendarDay = styled.div`
  padding: 10px;
  background: #007bff;
  color: white;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TeacherDetails = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const TeacherTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TeacherTh = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TeacherTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const PerformanceSection = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ChartContainer = styled.div`
  position: relative;
  height: 300px;
`;

// Additional styles for the AddTeacherForm
export const AddTeacherForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const AddTeacherInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const AddTeacherButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;



export const TeachersContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const TeacherCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const TeacherInfo = styled.div`
  margin-left: 16px;
`;

export const TeacherName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const TeacherSubject = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

export const EditIcon = styled.div`
  color: #3498db;
  cursor: pointer;
`;

export const DeleteIcon = styled.div`
  color: #e74c3c;
  cursor: pointer;
`;

export const TeachersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TeachersHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;













