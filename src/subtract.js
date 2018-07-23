const {
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addQuarters,
  addYears
} = require('./add');

const { normalizeUnit } = require('./internal/normalizeUnit');

exports.subtract = (date, amount, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return subtractMilliseconds(date, amount);
    case 'seconds':
      return subtractSeconds(date, amount);
    case 'minutes':
      return subtractMinutes(date, amount);
    case 'hours':
      return subtractHours(date, amount);
    case 'days':
      return subtractDays(date, amount);
    case 'months':
      return subtractMonths(date, amount);
    case 'quarters':
      return subtractQuarters(date, amount);
    case 'years':
      return subtractYears(date, amount);
  }
};

const subtractMilliseconds = (date, amount) => {
  return addMilliseconds(date, (amount *= -1));
};
exports.subtractMilliseconds = subtractMilliseconds;

const subtractSeconds = (date, amount) => {
  return addSeconds(date, (amount *= -1));
};
exports.subtractSeconds = subtractSeconds;

const subtractMinutes = (date, amount) => {
  return addMinutes(date, (amount *= -1));
};
exports.subtractMinutes = subtractMinutes;

const subtractHours = (date, amount) => {
  return addHours(date, (amount *= -1));
};
exports.subtractHours = subtractHours;

const subtractDays = (date, amount) => {
  return addDays(date, (amount *= -1));
};
exports.subtractDays = subtractDays;

const subtractMonths = (date, amount) => {
  return addMonths(date, (amount *= -1));
};
exports.subtractMonths = subtractMonths;

const subtractQuarters = (date, amount) => {
  return addQuarters(date, (amount *= -1));
};
exports.subtractQuarters = subtractQuarters;

const subtractYears = (date, amount) => {
  return addYears(date, (amount *= -1));
};
exports.subtractYears = subtractYears;
