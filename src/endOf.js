const { daysInMonth } = require('./daysInMonth');
const {
  normalizeUnitWithoutMilliseconds
} = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');
const {
  UNIT_SECOND,
  UNIT_MINUTE,
  UNIT_HOUR,
  UNIT_DAY,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_YEAR
} = require('./internal/constants');

exports.startOf = (date, unit = 'second') => {
  switch (normalizeUnitWithoutMilliseconds(unit)) {
    case UNIT_SECOND:
      return endOfSecond(date);
    case UNIT_MINUTE:
      return endOfMinute(date);
    case UNIT_HOUR:
      return endOfHour(date);
    case UNIT_DAY:
      return endOfDay(date);
    case UNIT_MONTH:
      return endOfMonth(date);
    case UNIT_QUARTER:
      return endOfQuarter(date);
    case UNIT_YEAR:
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
