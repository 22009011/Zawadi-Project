// routes/gradesRoutes.js
import express from 'express';
import {
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade,
} from '../controllers/gradesControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createGrade);
router.get('/', auth, getAllGrades);
router.get('/:id', auth, getGradeById);
router.put('/:id', auth, updateGrade);
router.delete('/:id', auth, deleteGrade);

export default router;
