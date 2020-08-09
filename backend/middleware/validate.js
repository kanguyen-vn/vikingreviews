module.exports = function (validator) {

	const validate = function(req, res, next) {
		const { error } = validator(req.body); 
 		if (error) return res.status(400).send(error.details[0].message);
		next();
	}

	// return function (req, res, next) {
	// 	const { error } = validator(req.body); 
 	// 	if (error) return res.status(400).send(error.details[0].message);
	// 	next();
	// }
	return validate;
}