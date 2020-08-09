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

<<<<<<< HEAD
function validateDepartment(department) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required()
    });

    return schema.validate(department);
=======
function validateDepartment(dep) {
    const schema = {
        name: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(department, schema);
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
}

exports.departmentSchema = departmentSchema;
exports.Department = Department;
<<<<<<< HEAD
exports.validateDepartment = validateDepartment;
=======
exports.validateDepartment = validateDepartment;
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
