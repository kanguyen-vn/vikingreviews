const Joi = require('joi');
const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const reviewSchema = new mongoose.Schema({
    content: [{
        type: String,
        required: true,
        trim: true
    }],
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
    time: [{
        type: Date,
        required: true
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
<<<<<<< HEAD
    }],
    original: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }
=======
    }]
>>>>>>> 2fdb931d0316dcc7e1834b68927bed314e472ba7
});

const Review = mongoose.model('Review', reviewSchema);

function validateReview(review) {
    const schema = Joi.object({
        content: Joi.array().items(Joi.string().required()),
        rating: Joi.number().min(0).max(5).required(),
        course: Joi.objectId().required(),
        instructor: Joi.string().max(255).required(),
        term: Joi.string(),
        year: Joi.number().max(currentYear),
        anonymous: Joi.bool(),
        user: Joi.objectId().required(),
        time: Joi.array().items(Joi.date().required()),
        likes: Joi.array().items(Joi.objectId()),
<<<<<<< HEAD
        dislikes: Joi.array().items(Joi.objectId()),
        original: Joi.objectId()
=======
        dislikes: Joi.array().items(Joi.objectId())
>>>>>>> 2fdb931d0316dcc7e1834b68927bed314e472ba7
    });

    return schema.validate(review);
}

exports.Review = Review;
exports.validateReview = validateReview;
