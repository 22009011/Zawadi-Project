import express from 'express';
import { createAssessment, getStudentsByClass } from '../controllers/teacherController.js';

const router = express.Router();

router.get('/students/:class_id', getStudentsByClass);
router.post('/', createAssessment);

export default router;

