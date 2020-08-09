const express = require('express');
const users = require('../routes/users');
<<<<<<< HEAD
const reviews = require('../routes/reviews');
=======
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
<<<<<<< HEAD
<<<<<<< HEAD
    app.use('/api/departments', departments);
    app.use('/api/courses', courses);
<<<<<<< HEAD
    app.use('/api/reviews', reviews);
=======
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
=======
>>>>>>> parent of 42b6f72... Added routes for courses, departments, fixed some bugs, database now works preliminarily
=======
>>>>>>> parent of 42b6f72... Added routes for courses, departments, fixed some bugs, database now works preliminarily
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);
}