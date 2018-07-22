const { daysInMonth } = require('./daysInMonth');

exports.endOfSecond = date => {
  date.setMilliseconds(999);
  return date;
};

exports.endOfMinute = date => {
  date.setSeconds(59, 999);
  return date;
};

exports.endOfHour = date => {
  date.setMinutes(59, 59, 999);
  return date;
};

exports.endOfDay = date => {
  date.setHours(23, 59, 59, 999);
  return date;
};

exports.endOfMonth = date => {
  date.setHours(23, 59, 59, 999);
  date.setDate(daysInMonth(date));
  return date;
};

exports.endOfYear = date => {
  date.setHours(23, 59, 59, 999);
  date.setDate(31);
  date.setMonth(11);
  return date;
};
