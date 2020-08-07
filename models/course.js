const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
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
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        department: Joi.objectId().required(),
        units: Joi.number().min(1).max(6).required(),
        addedBy: Joi.objectId().required()
    };

    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;