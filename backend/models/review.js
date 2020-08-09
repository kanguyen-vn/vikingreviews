const Joi = require('joi');
const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const reviewSchema = new mongoose.Schema({
<<<<<<< HEAD
    content: [{
        type: String,
        required: true,
        trim: true
    }],
=======
    content: {
        type: String,
        required: true,
        trim: true
    },
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    instructor: {
        type: String,
        maxlength: 255
    },
    term: String,
    year: {
        type: Number,
        max: currentYear
    },
    anonymous: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
<<<<<<< HEAD
    time: [{
        type: Date,
        required: true
    }],
=======
    time: {
        type: Date,
        required: true
    },
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
<<<<<<< HEAD
    original: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }
=======
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
});

const Review = mongoose.model('Review', reviewSchema);

function validateReview(review) {
<<<<<<< HEAD
    const schema = Joi.object({
        content: Joi.array().items(Joi.string().required()),
=======
    const schema = {
        content: Joi.string().required(),
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
        rating: Joi.number().min(0).max(5).required(),
        course: Joi.objectId().required(),
        instructor: Joi.string().max(255).required(),
        term: Joi.string(),
        year: Joi.number().max(currentYear),
        anonymous: Joi.bool(),
        user: Joi.objectId().required(),
<<<<<<< HEAD
        time: Joi.array().items(Joi.date().required()),
        likes: Joi.array().items(Joi.objectId()),
        dislikes: Joi.array().items(Joi.objectId()),
        original: Joi.objectId()
    });

    return schema.validate(review);
}

exports.Review = Review;
exports.validateReview = validateReview;
=======
        time: Joi.date().required(),
        likes: Joi.array().items(Joi.objectId()),
        dislikes: Joi.array().items(Joi.objectId()),
    };

    return Joi.validate(review, schema);
}

exports.Review = Review;
<<<<<<< HEAD
exports.validateReview = validateReview;
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
=======
exports.validate = validateReview;
>>>>>>> parent of 42b6f72... Added routes for courses, departments, fixed some bugs, database now works preliminarily
