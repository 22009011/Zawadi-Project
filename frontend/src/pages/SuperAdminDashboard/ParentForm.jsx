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
  AddChildButton,
  ChildContainer,
  ChildInput,
  RemoveChildButton,
  ResponsiveContainer,
} from '../../styles/FormStyles.js';

const ParentForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    school_id: '',
  });

  const [children, setChildren] = useState([{ name: '' }]);
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

  const handleChildChange = (index, e) => {
    const newChildren = [...children];
    newChildren[index].name = e.target.value;
    setChildren(newChildren);
  };

  const handleAddChild = () => {
    setChildren([...children, { name: '' }]);
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
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <ResponsiveContainer>
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
                <ChildInput
                  type="text"
                  name={`child_${index}`}
                  value={child.name}
                  onChange={(e) => handleChildChange(index, e)}
                  placeholder={`Child ${index + 1} Name`}
                />
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
