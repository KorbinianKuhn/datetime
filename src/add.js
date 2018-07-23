const {
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_SECOND,
  UNIT_MILLISECOND,
  UNIT_SECOND,
  UNIT_MINUTE,
  UNIT_HOUR,
  UNIT_DAY,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_YEAR
} = require('./internal/constants');

const { normalizeUnit } = require('./internal/normalizeUnit');

exports.add = (date, amount, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return addMilliseconds(date, amount);
    case UNIT_SECOND:
      return addSeconds(date, amount);
    case UNIT_MINUTE:
      return addMinutes(date, amount);
    case UNIT_HOUR:
      return addHours(date, amount);
    case UNIT_DAY:
      return addDays(date, amount);
    case UNIT_MONTH:
      return addMonths(date, amount);
    case UNIT_QUARTER:
      return addQuarters(date, amount);
    case UNIT_YEAR:
      return addYears(date, amount);
  }
};

const addMilliseconds = (date, amount) => {
  date.setTime(date.getTime() + amount);
  return date;
};
exports.addMilliseconds = addMilliseconds;

const addSeconds = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_SECOND);
  return date;
};
exports.addSeconds = addSeconds;

const addMinutes = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_MINUTE);
  return date;
};
exports.addMinutes = addMinutes;

const addHours = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_HOUR);
  return date;
};
exports.addHours = addHours;

const addDays = (date, amount) => {
  date.setDate(date.getDate() + amount);
  return date;
};
exports.addDays = addDays;

const addMonths = (date, amount) => {
  date.setMonth(date.getMonth() + amount);
  return date;
};
exports.addMonths = addMonths;

const addQuarters = (date, amount) => {
  date.setMonth(date.getMonth() + amount * 3);
  return date;
};
exports.addQuarters = addQuarters;

const addYears = (date, amount) => {
  date.setFullYear(date.getFullYear() + amount);
  return date;
};
exports.addYears = addYears;
