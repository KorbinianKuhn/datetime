const {
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears
} = require('./add');

exports.subtractMilliseconds = (date, amount) => {
  return addMilliseconds(date, (amount *= -1));
};

exports.subtractSeconds = (date, amount) => {
  return addSeconds(date, (amount *= -1));
};

exports.subtractMinutes = (date, amount) => {
  return addMinutes(date, (amount *= -1));
};

exports.subtractHours = (date, amount) => {
  return addHours(date, (amount *= -1));
};

exports.subtractDays = (date, amount) => {
  return addDays(date, (amount *= -1));
};

exports.subtractMonths = (date, amount) => {
  return addMonths(date, (amount *= -1));
};

exports.subtractYears = (date, amount) => {
  return addYears(date, (amount *= -1));
};
