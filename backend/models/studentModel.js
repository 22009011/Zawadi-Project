import { DataTypes } from 'sequelize';
import config from '../config.js';
import Class from './classModel.js';
import School from './schoolModel.js';

const { sequelize } = config;

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  registrationNumber: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  parentName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  parentEmail: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  parentPhone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: School,
      key: 'id',
    },
  },
}, {
  tableName: 'Students',
  timestamps: true,
});

Student.belongsTo(Class, { foreignKey: 'class_id' });
Student.belongsTo(School, { foreignKey: 'school_id' });

export default Student;
