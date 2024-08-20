import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  Title,
  Subtitle,
  Input,
  TextArea,
  ButtonContainer,
  Button,
} from '../../styles/DemoForm.js';

const DemoForm = () => {
  const [demos, setDemos] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    message: '',
  });

  useEffect(() => {
    fetchDemos();
  }, []);

  const fetchDemos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/request-demo');
      setDemos(response.data.demos);
    } catch (error) {
      console.error('Error fetching demos');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/request-demo', formData);
      toast.success('Demo request submitted successfully!');
      fetchDemos(); // Refresh the list after submission
      setFormData({ name: '', email: '', phone: '', schoolName: '', message: '' }); // Reset form
    } catch (error) {
      toast.error('Error submitting demo request');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/request-demo/${id}`);
      toast.success('Demo request deleted successfully!');
      fetchDemos(); // Refresh the list after deletion
    } catch (error) {
      toast.error('Error deleting demo request');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Request a Demo</Title>
        <Subtitle>Interested in seeing Zawadi in action? Request a demo now!</Subtitle>
        <Input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <Input name="schoolName" type="text" placeholder="School Name" value={formData.schoolName} onChange={handleChange} />
        <TextArea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} />
        <ButtonContainer>
          <Button type="submit">SUBMIT REQUEST</Button>
        </ButtonContainer>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

export default DemoForm;
