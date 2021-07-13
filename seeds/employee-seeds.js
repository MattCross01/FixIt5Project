const { Employee } = require('../models');

const employeeData = [
    {
     id: 1,
     employee_name: "Garry Russell",
     address: "NA",
     phone_number: "126-3134-02",
     email:  "g.russell@randatmail.com",
     specialty:  "Home Repair",
     foreign_key: "NA"
    },
    {
     id: 2,
     employee_name: "Alen Dixon",
     address: "NA",
     phone_number: "003-2368-99",
     email:  "a.dixon@randatmail.com",
     specialty:  "Appliancer Repair",
     foreign_key: "NA"
    },
    {
     id: 3,
     employee_name: "Julian West",
     address: "NA",
     phone_number: "858-9040-34	",
     email:  "j.west@randatmail.com",
     specialty:  "Roof & Exterior Cleaning",
     foreign_key: "NA"
    },
    {
     id: 4,
     employee_name: "Vinent Allen",
     address: "NA",
     phone_number: "903-1289-80	",
     email:  "v.allen@randatmail.com",
     specialty:  "Home Maintenance Specialist",
     foreign_key: "NA"
       },


]

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;