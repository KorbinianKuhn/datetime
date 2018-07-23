const {
  normalizeUnitWithoutMilliseconds
} = require('./internal/normalizeUnit');

exports.startOf = (date, unit = 'second') => {
  switch (normalizeUnitWithoutMilliseconds(unit)) {
    case 'seconds':
      return startOfSecond(date);
    case 'minutes':
      return startOfMinute(date);
    case 'hours':
      return startOfHour(date);
    case 'days':
      return startOfDay(date);
    case 'months':
      return startOfMonth(date);
    case 'years':
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

const startOfYear = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  date.setMonth(0);
  return date;
};
exports.startOfYear = startOfYear;
