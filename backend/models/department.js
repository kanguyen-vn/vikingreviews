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

function validateDepartment(department) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required()
    });

    return schema.validate(department);
}

exports.departmentSchema = departmentSchema;
exports.Department = Department;
exports.validate = validateDepartment;