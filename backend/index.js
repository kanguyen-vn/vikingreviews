const winston = require("winston"); // logging
const express = require("express"); // HTTP requests or API
const app = express();

require("./startup/logging")();
require("./startup/prod")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`${new Date().toLocaleString()}: Listening on port ${port}...`)
);

module.exports = server;
