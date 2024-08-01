import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const PerformanceLevel = sequelize.define('PerformanceLevel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  level: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'PerformanceLevels',
  timestamps: true,
});

export default PerformanceLevel;
