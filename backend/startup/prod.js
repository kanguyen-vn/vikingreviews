const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

module.exports = function(app) {
<<<<<<< HEAD
	app.use(helmet()); // encrypt the jwt
    app.use(compression());
    app.use(morgan('dev')); // log HTTP requests
=======
	app.use(helmet());
    app.use(compression());
    app.use(morgan('dev'));
>>>>>>> 4579e3c266e1e4d962386b99d1f6250d363104bf
    app.use(cors())
}