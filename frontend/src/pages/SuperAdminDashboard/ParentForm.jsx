import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormContainer,
  FormTitle,
  FieldContainer,
  Label,
  Select,
  Button,
  Input,
  AddChildButton,
  ChildContainer,
  RemoveChildButton,
  ResponsiveContainer,
} from '../../styles/FormStyles.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ParentForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    school_id: '',
  });

  const [children, setChildren] = useState([{ student_id: '' }]);
  const [message, setMessage] = useState('');
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);

  // Function to get the token from local storage
  const getAuthToken = () => localStorage.getItem('token');

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        setSchools(response.data);
        toast.success('Schools fetched successfully!');
      } catch (error) {
        console.error('Error fetching schools:', error);
        toast.error('Failed to fetch schools.');
      }
    };

    const fetchStudents = async () => {
      try {
        const token = getAuthToken(); // Get the token from local storage
        const response = await axios.get('http://localhost:5000/api/students', {
          headers: {
            'Authorization': `Bearer ${token}` // Use the token here
          }
        });
        setStudents(response.data);
        toast.success('Students fetched successfully!');
      } catch (error) {
        console.error('Error fetching students:', error);
        toast.error('Failed to fetch students.');
      }
    };

    fetchSchools();
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChildChange = (index, e) => {
    const newChildren = [...children];
    newChildren[index].student_id = e.target.value;
    setChildren(newChildren);
  };

  const handleAddChild = () => {
    setChildren([...children, { student_id: '' }]);
  };

  const handleRemoveChild = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/create-parent', {
        ...formData,
        children,
      });
      setMessage(response.data.message);
      toast.success('Parent created successfully!');
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || error.message));
      toast.error('Parent creation failed.');
    }
  };

  return (
    <ResponsiveContainer>
      <ToastContainer />
      <FormContainer>
        <FormTitle>Create Parent</FormTitle>
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
          <FieldContainer>
            <Label>Children</Label>
            {children.map((child, index) => (
              <ChildContainer key={index}>
                <Select
                  id={`child_${index}`}
                  name={`child_${index}`}
                  value={child.student_id}
                  onChange={(e) => handleChildChange(index, e)}
                >
                  <option value="">Select Child</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))}
                </Select>
                {children.length > 1 && (
                  <RemoveChildButton
                    type="button"
                    onClick={() => handleRemoveChild(index)}
                  >
                    Remove
                  </RemoveChildButton>
                )}
              </ChildContainer>
            ))}
            <AddChildButton type="button" onClick={handleAddChild}>
              + Add Child
            </AddChildButton>
          </FieldContainer>
          <Button type="submit">Submit</Button>
          {message && <p>{message}</p>}
        </form>
      </FormContainer>
    </ResponsiveContainer>
  );
};

export default ParentForm;
