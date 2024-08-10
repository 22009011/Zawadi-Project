import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export const Dashboard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #999;
`;

export const DateRangeSelector = styled.div`
  font-size: 14px;
  color: #333;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

export const CollapseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 5px;
  display: block;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const SearchFilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CompletionTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #e0e0e0;
    padding: 10px;
    text-align: left;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BarChart = styled.div`
  width: 48%;
  height: 150px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PieChart = styled.div`
  width: 48%;
  height: 150px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
