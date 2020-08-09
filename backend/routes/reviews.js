const { Review, validateReview } = require('../models/review');
const validate = require('../middleware/validate');
const { Course } = require('../models/course');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

router.post('/', validate(validateReview), async (req, res) => {
    const course = await Course.findById(req.body.course);
    if (!course) return res.status(400).send('Invalid course.');

    const review = new Review({
        content: [ req.body.content ],
        rating: req.body.rating,
        course: req.body.course,
        instructor: req.body.instructor,
        term: req.body.term,
        year: req.body.year,
        anonymous: req.body.anonymous,
        user: req.body.user,
        time: [ req.body.time ],
        likes: [],
        dislikes: [],
        original: null
    });
    await review.save();

    res.send(review);
});

router.put('/:id', validate(validateReview), async (req, res) => {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(400).send('Invalid review.');

    await Review.findByIdAndUpdate(req.params.id,
        {
            $push: {
                content: req.body.content,
                rating: req.body.rating, 
                likes: req.body.likes,
                dislikes: req.body.dislikes,
            }
        }, { new: true });

    res.send(review);
});

router.delete('/:id', async (req, res) => {
    const review = await Review.findByIdAndRemove(req.params.id);

    if (!review) return res.status(404).send('The review with the given ID was not found.');

    res.send(review);
});

router.get('/:id', async (req, res) => {
    const review = await Course.findById(req.params.id);

    if (!review) return res.status(404).send('The review with the given ID was not found.');

    res.send(review);
});

module.exports = router; 