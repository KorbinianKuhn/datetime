exports.normalizeUnit = unit => {
  switch (unit) {
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return 'milliseconds';
    case 'second':
    case 'seconds':
    case 's':
      return 'seconds';
    case 'minute':
    case 'minutes':
    case 'm':
      return 'minutes';
    case 'hour':
    case 'hours':
    case 'h':
      return 'hours';
    case 'day':
    case 'days':
    case 'd':
      return 'days';
    case 'month':
    case 'months':
    case 'M':
      return 'months';
    case 'year':
    case 'years':
    case 'y':
      return 'years';
  }

  throw new Error(`invalid date unit: ${unit}`);
};

exports.normalizeUnitWithoutMilliseconds = unit => {
  switch (unit) {
    case 'second':
    case 'seconds':
    case 's':
      return 'seconds';
    case 'minute':
    case 'minutes':
    case 'm':
      return 'minutes';
    case 'hour':
    case 'hours':
    case 'h':
      return 'hours';
    case 'day':
    case 'days':
    case 'd':
      return 'days';
    case 'month':
    case 'months':
    case 'M':
      return 'months';
    case 'year':
    case 'years':
    case 'y':
      return 'years';
  }

  throw new Error(`invalid date unit: ${unit}`);
};
