const { Employee } = require('../models');

const employeeData = [
    {
     id: 1,
     employee_name: "NA",
     address: "NA",
     phone_number: "NA",
     email:  "NA",
     specialty:  "NA",
     foreign_key: "NA"
    },
    {
     id: 2,
     employee_name: "NA",
     address: "NA",
     phone_number: "NA",
     email:  "NA",
     specialty:  "NA",
     foreign_key: "NA"
    },
    {
     id: 3,
     employee_name: "NA",
     address: "NA",
     phone_number: "NA",
     email:  "NA",
     specialty:  "NA",
     foreign_key: "NA"
    },
    {
     id: 4,
     employee_name: "NA",
     address: "NA",
     phone_number: "NA",
     email:  "NA",
     specialty:  "NA",
     foreign_key: "NA"
       },


]

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;