import Student from '../models/studentModel.js';
import Assessment from '../models/assessmentModel.js';
import Rubric from '../models/rubricModel.js';

export const getStudentsByClass = async (req, res) => {
  try {
    const students = await Student.findAll({ where: { class_id: req.params.class_id } });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAssessment = async (req, res) => {
  try {
    const { date, type, competency, student_id, rubric } = req.body;
    const assessment = await Assessment.create({ date, type, competency, student_id });
    
    await Rubric.create({
      level: rubric.level,
      comments: rubric.comments,
      assessment_id: assessment.id,
    });

    res.status(201).json({ message: 'Assessment created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



  