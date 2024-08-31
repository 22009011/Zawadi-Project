import express from 'express';
import { createReport, getReports } from '../controllers/reportingTimeController.js';

const router = express.Router();

router.post('/', createReport);
router.get('/', getReports);

export default router;
