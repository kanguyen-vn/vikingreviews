const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

module.exports = function(app) {
	app.use(helmet());
    app.use(compression());
    app.use(morgan('dev'));
    app.use(cors())
}