const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const seedEmployee = require('../seeds/employee-seeds');

class Employee extends Model {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee_name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.INTEGER
    },
    specialty: {
      type: DataTypes.INTEGER
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
    modelName: 'employee'
  }
);

module.exports = Employee;