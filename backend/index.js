const winston = require("winston"); // logging
const express = require("express"); // HTTP requests or API
const app = express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`${new Date().toLocaleString()}: Listening on port ${port}...`)
);

module.exports = server;
