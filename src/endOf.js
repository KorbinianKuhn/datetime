const { daysInMonth } = require('./daysInMonth');
const {
  normalizeUnitWithoutMilliseconds
} = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');

exports.startOf = (date, unit = 'second') => {
  switch (normalizeUnitWithoutMilliseconds(unit)) {
    case 'seconds':
      return endOfSecond(date);
    case 'minutes':
      return endOfMinute(date);
    case 'hours':
      return endOfHour(date);
    case 'days':
      return endOfDay(date);
    case 'months':
      return endOfMonth(date);
    case 'quarters':
      return endOfQuarter(date);
    case 'years':
      return endOfYear(date);
  }
};

const endOfSecond = date => {
  date.setMilliseconds(999);
  return date;
};
exports.endOfSecond = endOfSecond;

const endOfMinute = date => {
  date.setSeconds(59, 999);
  return date;
};
exports.endOfMinute = endOfMinute;

const endOfHour = date => {
  date.setMinutes(59, 59, 999);
  return date;
};
exports.endOfHour = endOfHour;

const endOfDay = date => {
  date.setHours(23, 59, 59, 999);
  return date;
};
exports.endOfDay = endOfDay;

const endOfMonth = date => {
  date.setHours(23, 59, 59, 999);
  date.setDate(daysInMonth(date));
  return date;
};
exports.endOfMonth = endOfMonth;

const endOfQuarter = date => {
  date.setDate(1);
  date.setHours(23, 59, 59, 999);
  date.setMonth(getQuarter(date) * 3 - 1);
  date.setDate(daysInMonth(date));
  return date;
};
exports.endOfQuarter = endOfQuarter;

const endOfYear = date => {
  date.setHours(23, 59, 59, 999);
  date.setDate(31);
  date.setMonth(11);
  return date;
};
exports.endOfYear = endOfYear;
