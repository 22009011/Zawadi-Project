import express from 'express';
import { createReport, getReports } from 
'../controllers/reportingTimeController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/',auth , createReport);
router.get('/',auth , getReports);

export default router;
 