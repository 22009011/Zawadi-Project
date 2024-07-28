import { DataTypes } from 'sequelize';
import config from '../config.js';
import School from './schoolModel.js';
import Teacher from './teachersModel.js';

const { sequelize } = config;

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: School,
      key: 'id',
    },
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Class.belongsTo(School, { foreignKey: 'school_id' });
Class.belongsTo(Teacher, { foreignKey: 'teacherId' }); // Add this line to create the association with Teacher

export default Class;
