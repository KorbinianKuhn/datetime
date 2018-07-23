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
      return startOfSecond(date);
    case UNIT_MINUTE:
      return startOfMinute(date);
    case UNIT_HOUR:
      return startOfHour(date);
    case UNIT_DAY:
      return startOfDay(date);
    case UNIT_MONTH:
      return startOfMonth(date);
    case UNIT_QUARTER:
      return startOfQuarter(date);
    case UNIT_YEAR:
      return startOfYear(date);
  }
};

const startOfSecond = date => {
  date.setMilliseconds(0);
  return date;
};
exports.startOfSecond = startOfSecond;

const startOfMinute = date => {
  date.setSeconds(0, 0);
  return date;
};
exports.startOfMinute = startOfMinute;

const startOfHour = date => {
  date.setMinutes(0, 0, 0);
  return date;
};
exports.startOfHour = startOfHour;

const startOfDay = date => {
  date.setHours(0, 0, 0, 0);
  return date;
};
exports.startOfDay = startOfDay;

const startOfMonth = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  return date;
};
exports.startOfMonth = startOfMonth;

const startOfQuarter = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  date.setMonth((getQuarter(date) - 1) * 3);
  return date;
};
exports.startOfQuarter = startOfQuarter;

const startOfYear = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  date.setMonth(0);
  return date;
};
exports.startOfYear = startOfYear;
