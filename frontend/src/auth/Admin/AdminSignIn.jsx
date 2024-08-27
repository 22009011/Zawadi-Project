import React, { useState } from 'react';
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../../styles/AdminSignInStyles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const REACT_APP_API_URL = "https://zawadii.tech/api"; 


  const handleSignIn = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL; // Use environment variable

    try {
      const response = await axios.post(`${apiUrl}/users/login`, { email, password });
      if (response.status === 200) {
        // Store the token and role in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        // Redirect to admin dashboard
        navigate('/admin/dashboard');
        toast.success('Logged in successfully!');
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
        toast.error('Failed to sign in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <AdminSignInContainer>
      <ToastContainer />
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
