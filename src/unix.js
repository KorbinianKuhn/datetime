const { MILLISECONDS_PER_SECOND } = require('./internal/constants');

exports.unix = date => {
  return Math.floor(date.getTime() / MILLISECONDS_PER_SECOND);
};
