const express = require('express');
const departments = require('../routes/departments');
const courses = require('../routes/courses');
const users = require('../routes/users');
const reviews = require('../routes/reviews');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/departments', departments);
    app.use('/api/courses', courses);
    app.use('/api/reviews', reviews);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);
}