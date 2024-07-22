import express from 'express';
import {
  registerSuperAdmin,
  login,
  createAdmin,
  createTeacher,
  createParent,
  getAdminProfile, 
} from '../controllers/userControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/register-super-admin', registerSuperAdmin);
router.post('/login', login);
router.post('/create-admin', createAdmin);
router.post('/create-teacher', createTeacher);
router.post('/create-parent', createParent);
router.get('/admin/profile', auth, getAdminProfile);

export default router;
