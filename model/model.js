const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String
})

const Employee = mongoose.model("employee", employeeSchema);

module.exports ={Employee};