// controllers/enteredMarkController.js
import EnteredMark from '../models/enteredMarksModel.js';
import School from '../models/schoolModel.js';
import Class from '../models/classModel.js';

// Create Entered Mark
export const createEnteredMark = async (req, res) => {
  const { student_name, class_level, admission_number, subject, marks } = req.body;

  if (!student_name || !class_level || !admission_number || !subject || !marks) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const school = await School.findByPk(req.school_id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    const selectedClass = await Class.findOne({ where: { id: class_level, school_id: req.school_id } });
    if (!selectedClass) {
      return res.status(404).json({ error: 'Class not found in the school' });
    }

    const newEnteredMark = await EnteredMark.create({
      student_name,
      class_level: selectedClass.id,
      admission_number,
      subject,
      marks,
      school_id: req.school_id,
    });
    res.status(201).json(newEnteredMark);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create entered mark', details: error.message });
  }
};

// Get All Entered Marks
export const getAllEnteredMarks = async (req, res) => {
  try {
    const enteredMarks = await EnteredMark.findAll({ where: { school_id: req.school_id } });
    res.json(enteredMarks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve entered marks', details: error.message });
  }
};

// Get Entered Mark by ID
export const getEnteredMarkById = async (req, res) => {
  const { id } = req.params;

  try {
    const enteredMark = await EnteredMark.findOne({ where: { id, school_id: req.school_id } });
    if (enteredMark) {
      res.json(enteredMark);
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve entered mark', details: error.message });
  }
};

// Update Entered Mark
export const updateEnteredMark = async (req, res) => {
  const { id } = req.params;
  const { student_name, class_level, admission_number, subject, marks } = req.body;

  try {
    const existingEnteredMark = await EnteredMark.findOne({ where: { id, school_id: req.school_id } });
    if (existingEnteredMark) {
      const selectedClass = await Class.findOne({ where: { id: class_level, school_id: req.school_id } });
      if (!selectedClass) {
        return res.status(404).json({ error: 'Class not found in the school' });
      }

      await existingEnteredMark.update({
        student_name,
        class_level: selectedClass.id,
        admission_number,
        subject,
        marks,
      });
      res.json({ message: 'Entered mark updated successfully' });
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update entered mark', details: error.message });
  }
};

// Delete Entered Mark
export const deleteEnteredMark = async (req, res) => {
  const { id } = req.params;

  try {
    const enteredMark = await EnteredMark.findOne({ where: { id, school_id: req.school_id } });
    if (enteredMark) {
      await enteredMark.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete entered mark', details: error.message });
  }
};
