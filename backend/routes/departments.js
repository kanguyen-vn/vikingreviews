const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateObjectId = require('../middleware/validateObjectId');
const { Department, validateDepartment } = require('../models/department');
const validate = require('../middleware/validate');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const departments = await Department.find().sort('name');
    res.send(departments);
});

router.post('/', [auth, admin, validate(validateDepartment)], async (req, res) => {
    let department = new Department({ name: req.body.name });
    department = await department.save();

    res.send(department);
});

router.put('/:id', [auth, admin, validateObjectId, validate(validateDepartment)], async (req, res) => {
    const department = await Department.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });

    if (!department) return res.status(404).send('The department with the given ID was not found.');

    res.send(department);
});

router.delete('/:id', [auth, admin, validateObjectId], async (req, res) => {
    const department = await Department.findByIdAndRemove(req.params.id);

    if (!department) return res.status(404).send('The department with the given ID was not found.');

    res.send(department);
});

router.get('/:id', validateObjectId, async (req, res) => {
    const department = await Department.findById(req.params.id);

    if (!department) return res.status(404).send('The department with the given ID was not found.');

    res.send(department);
});

module.exports = router;