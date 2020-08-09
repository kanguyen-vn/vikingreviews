const Joi = require('joi');
const mongoose = require('mongoose');
// const { departmentSchema } = require('./department');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    department: {
        // type: departmentSchema,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    units: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

function validateCourse(course) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        department: Joi.objectId().required(),
        units: Joi.number().min(1).max(6).required(),
        addedBy: Joi.objectId().required()
    });

    return schema.validate(course);
}

exports.Course = Course;
<<<<<<< HEAD
exports.validateCourse = validateCourse;
=======
exports.validate = validateCourse;
>>>>>>> parent of 42b6f72... Added routes for courses, departments, fixed some bugs, database now works preliminarily
