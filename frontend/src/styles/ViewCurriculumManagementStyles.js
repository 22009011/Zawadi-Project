import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
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

export const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
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

export const CollapseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 5px;
  display: block;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SubtopicsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubtopicItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`;

export const ProgressBarContainer = styled.div`
  margin-top: 20px;
`;

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #007bff;
`;
