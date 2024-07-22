// AttendanceStyles.js

// AttendanceStyles.js
import styled from 'styled-components';

// export const AttendanceContainer = styled.div`
//   display: flex;
// `;

// export const Content = styled.div`
//   flex: 1;
//   background-color: #f7f8fc;
//   padding: 20px;
// `;

// export const AttendanceContent = styled.div`
//   background-color: #ffffff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// export const AttendanceHeader = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// export const AttendanceList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const AttendanceItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;
//   border-bottom: 1px solid #e0e0e0;
// `;

// export const StudentName = styled.div`
//   font-size: 18px;
// `;

export const StatusButton = styled.button`
  background-color: ${(props) => (props.selected ? '#3498db' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#3498db')};
  border: 1px solid #3498db;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#2980b9' : '#e6f4ff')};
    color: ${(props) => (props.selected ? '#ffffff' : '#2980b9')};
  }
`;

// export const SubmitButton = styled.button`
//   background-color: #3498db;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;


// import styled from 'styled-components';

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const AttendanceContent = styled.div`
  padding: 20px;
`;

export const AttendanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AttendanceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StudentName = styled.span`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

export const Divider = styled.hr`
  margin-top: 5px;
  border: 0;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const AttendanceDate = styled.span`
  font-weight: bold;
`;

export const AttendanceStatus = styled.span`
  margin-left: 10px;
  color: ${({ present }) => (present ? 'green' : 'red')};
`;
