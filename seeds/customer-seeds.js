const { Customer } = require('../models');

const customerData = [
{
 id: 1,
 name: "Janice Monahan",
 address: "Port Beulah, Iowa 90717, United States of America",
 phone_number: "969-068-8439",
 email: "Janice_Monahan@yahoo.com"
},
{
 id: 2,
 name: "Rollin Fadel",
 address: "Lake Matilde, Tennessee 74062, United States of America",
 phone_number: "017-057-6055",
 email: "Rollin_Fadel@gmail.com"   
},
{
 id: 3,
 name: "Lera Stroman",
 address: "Vicentaview, Missussuppi 47576-9639, United States of America",
 phone_number: "166-619-2267",
 email: "Lera_Stroman3@gmail.com"
},
{
 id: 4,
 name: "Adan Schiller",
 address: "VonRuedenberg, Delaware 99072-4003, United States of America",
 phone_number: "699-824-5724",
 email: "Adan_Schiller19@yahoo.com"
}
]

const seedCustomer = () => {
    console.log(Customer);
    return Customer.bulkCreate(customerData);
}

module.exports = seedCustomer;