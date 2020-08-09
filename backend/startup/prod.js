const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

module.exports = function(app) {
	app.use(helmet()); // encrypt the jwt
    app.use(compression());
    app.use(morgan('dev')); // log HTTP requests
    app.use(cors())
}