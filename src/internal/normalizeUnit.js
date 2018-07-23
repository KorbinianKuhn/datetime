const {
  UNIT_MILLISECOND,
  UNIT_SECOND,
  UNIT_MINUTE,
  UNIT_HOUR,
  UNIT_DAY,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_YEAR
} = require('./constants');

exports.normalizeUnit = unit => {
  switch (unit) {
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return UNIT_MILLISECOND;
    case 'second':
    case 'seconds':
    case 's':
      return UNIT_SECOND;
    case 'minute':
    case 'minutes':
    case 'm':
      return UNIT_MINUTE;
    case 'hour':
    case 'hours':
    case 'h':
      return UNIT_HOUR;
    case 'day':
    case 'days':
    case 'd':
      return UNIT_DAY;
    case 'month':
    case 'months':
    case 'M':
      return UNIT_MONTH;
    case 'quarter':
    case 'quarters':
    case 'Q':
      return UNIT_QUARTER;
    case 'year':
    case 'years':
    case 'y':
      return UNIT_YEAR;
  }

  throw new Error(`invalid date unit: ${unit}`);
};

exports.normalizeUnitWithoutMilliseconds = unit => {
  switch (unit) {
    case 'second':
    case 'seconds':
    case 's':
      return UNIT_SECOND;
    case 'minute':
    case 'minutes':
    case 'm':
      return UNIT_MINUTE;
    case 'hour':
    case 'hours':
    case 'h':
      return UNIT_HOUR;
    case 'day':
    case 'days':
    case 'd':
      return UNIT_DAY;
    case 'month':
    case 'months':
    case 'M':
      return UNIT_MONTH;
    case 'quarter':
    case 'quarters':
    case 'Q':
      return UNIT_QUARTER;
    case 'year':
    case 'years':
    case 'y':
      return UNIT_YEAR;
  }

  throw new Error(`invalid date unit: ${unit}`);
};
