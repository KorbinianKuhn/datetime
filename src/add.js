const {
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_SECOND
} = require('./internal/constants');

exports.addMilliseconds = (date, amount) => {
  date.setTime(date.getTime() + amount);
  return date;
};

exports.addSeconds = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_SECOND);
  return date;
};

exports.addMinutes = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_MINUTE);
  return date;
};

exports.addHours = (date, amount) => {
  date.setTime(date.getTime() + amount * MILLISECONDS_PER_HOUR);
  return date;
};

exports.addDays = (date, amount) => {
  date.setDate(date.getDate() + amount);
  return date;
};

exports.addMonths = (date, amount) => {
  date.setMonth(date.getMonth() + amount);
  return date;
};

exports.addYears = (date, amount) => {
  date.setFullYear(date.getFullYear() + amount);
  return date;
};
