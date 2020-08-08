const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }), // log exceptions in console
        new winston.transports.File({ filename: 'logs/uncaughtExceptions.log' })); // log exceptions in file

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(new winston.transports.File({ filename: 'logs/logfile.log' }));
    // winston.add(winston.transports.MongoDB, { 
    //   db: 'mongodb://localhost/vidly',
    //   level: 'info'
    // });  
}