const { isLeapYear } = require('./isLeapYear');

exports.daysInYear = date => {
  return isLeapYear(date) ? 366 : 365;
};
