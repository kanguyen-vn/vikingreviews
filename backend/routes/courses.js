const { Course, validateCourse } = require('../models/course');
const validate = require('../middleware/validate');
const { Department } = require('../models/department');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const courses = await Course.find().sort('name');
    res.send(courses);
});

router.post('/', validate(validateCourse), async (req, res) => {
    const department = await Department.findById(req.body.departmentId);
    if (!department) return res.status(400).send('Invalid department.');

    const course = new Course({
        title: req.body.title,
        department: {
            _id: department._id,
            name: department.name
        },
        units: req.body.units,
        user: req.body.user
    });
    await course.save();

    res.send(course);
});

router.put('/:id', validate(validateCourse), async (req, res) => {
    const department = await Department.findById(req.body.departmentId);
    if (!department) return res.status(400).send('Invalid department.');

    const course = await Course.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            department: {
                _id: department._id,
                name: department.name
            },
            units: req.body.units,
            user: req.body.user
        }, { new: true });

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

router.delete('/:id', async (req, res) => {
    const course = await Course.findByIdAndRemove(req.params.id);

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).send('The course with the given ID was not found.');

    res.send(course);
});

module.exports = router; 