const Joi = require('joi');
const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
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
    time: {
        type: Date,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const Review = mongoose.model('Review', reviewSchema);

function validateReview(review) {
    const schema = {
        content: Joi.string().required(),
        rating: Joi.number().min(0).max(5).required(),
        course: Joi.objectId().required(),
        instructor: Joi.string().max(255).required(),
        term: Joi.string(),
        year: Joi.number().max(currentYear),
        anonymous: Joi.bool(),
        user: Joi.objectId().required(),
        time: Joi.date().required(),
        likes: Joi.array().items(Joi.objectId()),
        dislikes: Joi.array().items(Joi.objectId()),
    };

    return Joi.validate(review, schema);
}

exports.Review = Review;
exports.validate = validateReview;