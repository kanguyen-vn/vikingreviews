const Joi = require('joi'); // validation
const mongoose = require('mongoose'); // mongoDB

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
});

const Department = mongoose.model('Department', departmentSchema);

function validateDepartment(dep) {
    const schema = {
        name: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(department, schema);
}

exports.departmentSchema = departmentSchema;
exports.Department = Department;
exports.validateDepartment = validateDepartment;