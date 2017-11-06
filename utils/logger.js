var winston = require('winston');
var path = require('path');

const log_file = path.join(__dirname, '..', 'logs', 'debug.log');
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.File)({ filename: log_file })
  ]
});

module.exports = {
  LEVEL: {
    ERROR: 'error',
    DEBUG: 'debug',
    INFO: 'info'
  },
  l: logger
};
