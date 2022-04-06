import winston , { format } from 'winston';
import moment from 'moment'
import 'moment-timezone';

// winston.emitErrs = true

const appendTimestamp = format((info, opts) => {
    if(opts.tz)
      info.timestamp = moment().tz(opts.tz).format('MMMM Do YYYY, h:mm:ss a');
    return info;
  });
  

const logger = new winston.createLogger({
    datePattern: 'DD-MM-YYYY-HH',
    format: format.combine(
        appendTimestamp({ tz: 'Asia/Kolkata' }),
        // format.timestamp(),
        format.json()
    ),
	transports: [
		new winston.transports.File({
			level: 'info',
			filename: '../logs/all-logs.log',
			handleExceptions: true,
			json: true,
			maxsize: 5242880, // 5MB
			maxFiles: 5, // if log file size is greater than 5MB, logfile2 is generated
			colorize: true,
            timestamp: true,
		}),
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true,
			timestamp: true,
		}),
	],
	exceptionHandlers: [
		new winston.transports.File({
			filename: '../logs/exceptions.log',
			timestamp: true,
			maxsize: 5242880,
			json: true,
			colorize: true,
		}),
	],
	exitOnError: false,
})

module.exports = logger
module.exports.stream = {
	write(message) {
		logger.info(message)
	},
}