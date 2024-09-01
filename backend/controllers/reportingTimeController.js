import ReportingTime from '../models/reportingTimeModel.js';

export const createReport = async (req, res) => {
  try {
    const { teacherName, arrivalTime, departureTime, session, status, teacherId, schoolId } = req.body;
    const report = await ReportingTime.create({
      teacherName,
      arrivalTime,
      departureTime,
      session,
      status,
      teacherId,
      schoolId,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 
export const getReports = async (req, res) => {
  try {
    const reports = await ReportingTime.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
