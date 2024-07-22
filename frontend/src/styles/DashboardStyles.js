import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5; /* Light gray background */
  padding: 20px;
  min-height: 100vh;
  margin-left: 250px; /* Adjust based on sidebar width */
`;

export const Content = styled.div`
  flex: 1;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #ffffff; /* White background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  font-size: 18px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  background-color: #f7f8fc;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff; /* Updated color */
  border-right: 1px solid #e0e0e0; /* Light gray border */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 150px; /* Increased size */
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
  color: ${(props) => (props.active ? '#1d72b8' : '#000000')}; /* Updated active color */
  background-color: ${(props) => (props.active ? '#e6f4ff' : '#ffffff')}; /* Updated active background color */
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
  background-color: #ffffff; /* White background */
  border-bottom: 1px solid #e0e0e0;
  width: calc(100% - 250px); /* Adjust width according to sidebar */
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
  margin-left: 250px; /* Adjust according to sidebar */
  padding-top: 80px; /* Adjust according to top bar */
  min-height: 100vh;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
