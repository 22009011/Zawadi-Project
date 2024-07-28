import Assessment from '../models/assessmentModel.js';
import School from '../models/schoolModel.js';
import Teacher from '../models/teachersModel.js';
import Class from '../models/classModel.js';
import Student from '../models/studentModel.js';

export const createAssessment = async (req, res) => {
  const { title, description, date, subject, classId, duration, totalMarks, teacherId, studentId } = req.body;

  if (!title || !description || !date || !subject || !classId || !duration || !totalMarks || !teacherId || !studentId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const newAssessment = await Assessment.create({
      title,
      description,
      dueDate: date, // Assuming 'date' should be 'dueDate' in your model
      subject,
      classId,
      teacherId,
      schoolId: req.school_id,
      studentId,
    });
    res.status(201).json(newAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all assessments for a school
export const getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.findAll({
      where: { schoolId: req.school_id },
      include: [
        { model: Class, include: [Teacher] }, // Including associated class and teacher
        { model: Student } // Including associated students
      ]
    });
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an assessment by ID
export const getAssessmentById = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
      include: [
        { model: Class, include: [Teacher] }, // Including associated class and teacher
        { model: Student } // Including associated students
      ]
    });
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }
    res.status(200).json(assessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an assessment
export const updateAssessment = async (req, res) => {
  const { title, description, dueDate, subject, classId } = req.body;

  try {
    const existingAssessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
    });
    if (!existingAssessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    existingAssessment.title = title || existingAssessment.title;
    existingAssessment.description = description || existingAssessment.description;
    existingAssessment.dueDate = dueDate || existingAssessment.dueDate;
    existingAssessment.subject = subject || existingAssessment.subject;
    existingAssessment.classId = classId || existingAssessment.classId;
    await existingAssessment.save();

    res.status(200).json(existingAssessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an assessment
export const deleteAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      where: {
        id: req.params.id,
        schoolId: req.school_id,
      },
    });
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }
    await assessment.destroy();
    res.status(204).json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
