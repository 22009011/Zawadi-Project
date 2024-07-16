// routes/attendanceRoutes.js
import express from 'express';
import {
  createAttendanceRecord,
  getAllAttendanceRecords,
  getAttendanceRecordById,
  updateAttendanceRecord,
  deleteAttendanceRecord,
} from '../controllers/attendanceControllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createAttendanceRecord);
router.get('/', auth, getAllAttendanceRecords);
router.get('/:id', auth, getAttendanceRecordById);
router.put('/:id', auth, updateAttendanceRecord);
router.delete('/:id', auth, deleteAttendanceRecord);

export default router;
