const config = require('config'); // configuration
const jwt = require('jsonwebtoken');
const Joi = require('joi'); // validation
const mongoose = require('mongoose'); // mongoDb

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
        match: /@lawrence.edu$/
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    class: {
        type: Number,
        required: true,
        min: 1900
    },
    major: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email().regex(/@lawrence.edu$/),
        password: Joi.string().min(5).max(255).required(),
        class: Joi.number().min(1900).required(),
        major: Joi.string().min(5).max(255).required(),
        isAdmin: Joi.bool().required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
