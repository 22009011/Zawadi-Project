import StudentPerformance from '../models/studentPerformanceModel.js';
import Student from '../models/studentModel.js';
import Class from '../models/classModel.js';
import Subject from '../models/subjectModel.js';
import PerformanceLevel from '../models/performanceLevelModel.js';

// Create Student Performance
export const createStudentPerformance = async (req, res) => {
  const { studentId, gradeId, subjects } = req.body;

  try {
    const performances = await Promise.all(subjects.map(async (subject) => {
      return await StudentPerformance.create({
        student_id: studentId,
        grade_id: gradeId,
        subject_id: subject.subject,
        performance_level_id: subject.performanceLevel,
        feedback: subject.feedback,
      });
    }));
    res.status(201).json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student performance', details: error.message });
  }
};

// Get All Student Performances
export const getAllStudentPerformances = async (req, res) => {
  try {
    const performances = await StudentPerformance.findAll({
      include: [Student, Class, Subject, PerformanceLevel],
    });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performances', details: error.message });
  }
};

// Get Student Performance by ID
export const getStudentPerformanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await StudentPerformance.findOne({
      where: { id },
      include: [Student, Class, Subject, PerformanceLevel],
    });
    if (performance) {
      res.json(performance);
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student performance', details: error.message });
  }
};

// Update Student Performance
export const updateStudentPerformance = async (req, res) => {
  const { id } = req.params;
  const { studentId, gradeId, subjects } = req.body;

  try {
    const performance = await StudentPerformance.findOne({ where: { id } });
    if (performance) {
      await performance.update({ student_id: studentId, grade_id: gradeId, subjects });
      res.json({ message: 'Student performance updated successfully' });
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student performance', details: error.message });
  }
};

// Delete Student Performance
export const deleteStudentPerformance = async (req, res) => {
  const { id } = req.params;

  try {
    const performance = await StudentPerformance.findOne({ where: { id } });
    if (performance) {
      await performance.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Student performance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student performance', details: error.message });
  }
};
