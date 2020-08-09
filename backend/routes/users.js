const auth = require('../middleware/auth');
<<<<<<< HEAD
<<<<<<< HEAD
=======
// const jwt = require('jsonwebtoken');
// const config = require('config');

>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
=======
const jwt = require('jsonwebtoken');
const config = require('config');
>>>>>>> parent of 42b6f72... Added routes for courses, departments, fixed some bugs, database now works preliminarily
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser } = require('../models/user');
const validate = require('../middleware/validate');
<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => { // localhost:3000/api/users/me
=======
// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

<<<<<<< HEAD
router.post('/', validate(validateUser), async (req, res) => { // localhost:3000/api/users
=======
router.post('/', validate(validateUser), async (req, res) => {
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User is already registered.');

    user = new User(_.pick(req.body, ['name', 'email', 'password', 'class', 'major']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'class', 'major']));
});

module.exports = router; 
