const { isLeapYear } = require('./isLeapYear');
const { getQuarter } = require('./getQuarter');

exports.daysInQuarter = date => {
  switch (getQuarter(date)) {
    case 1:
      return isLeapYear(date) ? 91 : 90;
    case 2:
      return 91;
    case 3:
      return 92;
    case 4:
      return 92;
  }
};
