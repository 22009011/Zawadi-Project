import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormContainer,
  FormTitle,
  FieldContainer,
  Label,
  Input,
  Select,
  Button,
  ResponsiveContainer,
} from '../../styles/FormStyles.js';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    school_id: '',
  });
  const [message, setMessage] = useState('');
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/create-teacher', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <ResponsiveContainer>
      <FormContainer>
        <FormTitle>Create Teacher</FormTitle>
        <form onSubmit={handleSubmit}>
          <FieldContainer>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="school_id">School</Label>
            <Select id="school_id" name="school_id" value={formData.school_id} onChange={handleChange}>
              <option value="">Select School</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </Select>
          </FieldContainer>
          <Button type="submit">Submit</Button>
          {message && <p>{message}</p>}
        </form>
      </FormContainer>
    </ResponsiveContainer>
  );
};

export default TeacherForm;
