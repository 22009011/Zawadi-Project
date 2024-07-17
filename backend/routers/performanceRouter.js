// routes/performanceRoutes.js
import express from 'express';
import {
  createPerformance,
  getAllPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
} from '../controllers/performanceControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPerformance);
router.get('/', auth, getAllPerformances);
router.get('/:id', auth, getPerformanceById);
router.put('/:id', auth, updatePerformance);
router.delete('/:id', auth, deletePerformance);

export default router;
