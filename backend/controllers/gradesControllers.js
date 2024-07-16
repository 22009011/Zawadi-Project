// controllers/gradesController.js
import Grade from '../models/gradesModel.js';
import School from '../models/schoolModel.js';

// Create Grade
export const createGrade = async (req, res) => {
  const { student_id, subject, grade, performance_level } = req.body;

  if (!student_id || !subject || !grade) {
    return res.status(400).json({ error: 'Student ID, subject, and grade are required fields' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newGrade = await Grade.create({
      student_id,
      subject,
      grade,
      performance_level,
      school_id: req.school_id,
    });
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create grade', details: error.message });
  }
};

// Get All Grades
export const getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll({ where: { school_id: req.school_id } });
    res.json(grades);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve grades', details: error.message });
  }
};

// Get Grade by ID
export const getGradeById = async (req, res) => {
  const { id } = req.params;

  try {
    const grade = await Grade.findOne({ where: { grade_id: id, school_id: req.school_id } });
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve grade', details: error.message });
  }
};

// Update Grade
export const updateGrade = async (req, res) => {
  const { id } = req.params;
  const { student_id, subject, grade, performance_level } = req.body;

  try {
    const existingGrade = await Grade.findOne({ where: { grade_id: id, school_id: req.school_id } });
    if (existingGrade) {
      await existingGrade.update({
        student_id,
        subject,
        grade,
        performance_level,
      });
      res.json({ message: 'Grade updated successfully' });
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update grade', details: error.message });
  }
};

// Delete Grade
export const deleteGrade = async (req, res) => {
  const { id } = req.params;

  try {
    const grade = await Grade.findOne({ where: { grade_id: id, school_id: req.school_id } });
    if (grade) {
      await grade.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete grade', details: error.message });
  }
};
