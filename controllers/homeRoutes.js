const path = require('path');

module.exports = (app) => {
    app.get('/customer', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/customer.html'));
    });

    app.get('/employee', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/employee.html'));
    });

    app.get('*', (req,res) => {
        res.sendfile(path.join(__dirname, '../public/index.html'));
    });
}