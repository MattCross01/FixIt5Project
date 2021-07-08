const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const seedJob = require('../seeds/job-seeds');

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job_name: {
      type: DataTypes.STRING
    },
    job_description: {
      type: DataTypes.STRING
    },
    job_pricing: {
      type: DataTypes.STRING
    },
    foreign_key: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job'
  }
);

module.exports = Job;