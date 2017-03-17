var log4js = require('log4js');

// logger.debug('Some debug messages');

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/cheese.log'),'cheese');

var logger = log4js.getLogger('cheese');
// logger.setLevel('ERROR');

logger.trace('Entering cheese testing');
logger.debug('Got cheese');
logger.info('Chess is Gouda');
logger.warn('Cheess is to ripe');
logger.error('error');
logger.fatal('fatal');