import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Subject = sequelize.define('Subject', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'Subjects',
  timestamps: true,
});

export default Subject;
