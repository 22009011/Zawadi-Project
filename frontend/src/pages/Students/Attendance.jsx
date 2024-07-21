import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/attendance', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Failed to fetch attendance data', error);
      }
    };

    fetchAttendanceData();
  }, [token]);

  return (
    <div>
      <h2>Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.student_name}</td>
              <td>{entry.attendance_date}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
