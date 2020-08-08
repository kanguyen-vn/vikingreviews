const Joi = require('joi'); // validation

module.exports = function() {
  Joi.objectId = require('joi-objectid')(Joi);
}