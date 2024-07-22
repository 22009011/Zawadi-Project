// controllers/userController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../models/userModel.js';
import School from '../models/schoolModel.js';

const { jwtSecret } = config;

// Register Super-admin
export const registerSuperAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'super-admin',
    });
    res.status(201).json({ message: 'Super-admin registered successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Super-admin registration failed', details: error.message });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role, school_id: user.school_id }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
};

// Create Admin by Super-admin
export const createAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newSchool = await School.create({
      name: `School for ${username}`,
      address: 'Default Address',
      director: username,
      location: 'Default Location',
      number_of_students: 0,
      plan: 'free',
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'admin',
      school_id: newSchool.id,
    });
    res.status(201).json({ message: 'Admin created successfully', userId: user.id, schoolId: newSchool.id });
  } catch (error) {
    res.status(500).json({ error: 'Admin creation failed', details: error.message });
  }
};

// Create Teacher by Admin
export const createTeacher = async (req, res) => {
  const { username, email, password, school_id } = req.body;

  if (!username || !email || !password || !school_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'teacher',
      school_id,
    });
    res.status(201).json({ message: 'Teacher created successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Teacher creation failed', details: error.message });
  }
};

// Create Parent by Admin
export const createParent = async (req, res) => {
  const { username, email, password, school_id } = req.body;

  if (!username || !email || !password || !school_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: 'parent',
      school_id,
    });
    res.status(201).json({ message: 'Parent created successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Parent creation failed', details: error.message });
  }
};


// controllers/userController.js

export const getAdminProfile = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId, {
      include: [{ model: School, attributes: ['name'] }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role,
      schoolName: user.School ? user.School.name : 'No School Assigned'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile details', details: error.message });
  }
};


