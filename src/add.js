const {
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_SECOND
} = require('./internal/constants');

const { normalizeUnit } = require('./internal/normalizeUnit');

exports.add = (date, amount, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return addMilliseconds(date, amount);
    case 'seconds':
      return addSeconds(date, amount);
    case 'minutes':
      return addMinutes(date, amount);
    case 'hours':
      return addHours(date, amount);
    case 'days':
      return addDays(date, amount);
    case 'months':
      return addMonths(date, amount);
    case 'years':
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

const addYears = (date, amount) => {
  date.setFullYear(date.getFullYear() + amount);
  return date;
};
exports.addYears = addYears;
