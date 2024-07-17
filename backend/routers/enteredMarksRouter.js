// routes/enteredMarkRoutes.js
import express from 'express';
import {
  createEnteredMark,
  getAllEnteredMarks,
  getEnteredMarkById,
  updateEnteredMark,
  deleteEnteredMark,
} from '../controllers/enteredMarksControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createEnteredMark);
router.get('/', auth, getAllEnteredMarks);
router.get('/:id', auth, getEnteredMarkById);
router.put('/:id', auth, updateEnteredMark);
router.delete('/:id', auth, deleteEnteredMark);

export default router;
