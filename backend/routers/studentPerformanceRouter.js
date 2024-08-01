import express from 'express';
import {
  createStudentPerformance,
  getAllStudentPerformances,
  getStudentPerformanceById,
  updateStudentPerformance,
  deleteStudentPerformance
} from '../controllers/studentPerformanceController.js';

const router = express.Router();

router.post('/', createStudentPerformance);
router.get('/', getAllStudentPerformances);
router.get('/:id', getStudentPerformanceById);
router.put('/:id', updateStudentPerformance);
router.delete('/:id', deleteStudentPerformance);

export default router;
