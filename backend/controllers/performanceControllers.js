// controllers/performanceController.js
import Performance from '../models/performanceModel.js';
import School from '../models/schoolModel.js';

// Create Performance
export const createPerformance = async (req, res) => {
  const { student_id, class_id, subject, marks } = req.body;

  if (!student_id || !class_id || !subject || !marks) {
    return res.status(400).json({ error: 'Student ID, class ID, subject, and marks are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newPerformance = await Performance.create({
      student_id,
      class_id,
      subject,
      marks,
      school_id: req.school_id,
    });
    res.status(201).json(newPerformance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create performance record', details: error.message });
  }
};

// Get All Performances
export const getAllPerformances = async (req, res) => {
  try {
    const performances = await Performance.findAll({ where: { school_id: req.school_id } });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve performance records', details: error.message });
  }
};

// Get Performance by ID
export const getPerformanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (performance) {
      res.json(performance);
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve performance record', details: error.message });
  }
};

// Update Performance
export const updatePerformance = async (req, res) => {
  const { id } = req.params;
  const { student_id, class_id, subject, marks } = req.body;

  try {
    const existingPerformance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (existingPerformance) {
      await existingPerformance.update({
        student_id,
        class_id,
        subject,
        marks,
      });
      res.json({ message: 'Performance record updated successfully' });
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update performance record', details: error.message });
  }
};

// Delete Performance
export const deletePerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await Performance.findOne({ where: { id, school_id: req.school_id } });
    if (performance) {
      await performance.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Performance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete performance record', details: error.message });
  }
};
