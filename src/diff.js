const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_DAY,
  MILLISECONDS_PER_HOUR,
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
const { getQuarter } = require('./getQuarter');

exports.difference = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return differenceInMilliseconds(dateA, dateB);
    case UNIT_SECOND:
      return differenceInSeconds(dateA, dateB);
    case UNIT_MINUTE:
      return differenceInMinutes(dateA, dateB);
    case UNIT_HOUR:
      return differenceInHours(dateA, dateB);
    case UNIT_DAY:
      return differenceInDays(dateA, dateB);
    case UNIT_MONTH:
      return differenceInMonths(dateA, dateB);
    case UNIT_QUARTER:
      return differenceInQuarters(dateA, dateB);
    case UNIT_YEAR:
      return differenceInYears(dateA, dateB);
  }
};

const differenceInMilliseconds = (dateA, dateB) => {
  return dateA.getTime() - dateB.getTime();
};
exports.differenceInMilliseconds = differenceInMilliseconds;

const differenceInSeconds = (dateA, dateB) => {
  return Math.floor(
    (dateA.getTime() - dateB.getTime()) / MILLISECONDS_PER_SECOND
  );
};
exports.differenceInSeconds = differenceInSeconds;

const differenceInMinutes = (dateA, dateB) => {
  return Math.floor(
    (dateA.getTime() - dateB.getTime()) / MILLISECONDS_PER_MINUTE
  );
};
exports.differenceInMinutes = differenceInMinutes;

const differenceInHours = (dateA, dateB) => {
  return Math.floor(
    (Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate()) -
      Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate())) /
      MILLISECONDS_PER_HOUR
  );
};
exports.differenceInHours = differenceInHours;

const differenceInDays = (dateA, dateB) => {
  return Math.floor(
    (Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate()) -
      Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate())) /
      MILLISECONDS_PER_DAY
  );
};
exports.differenceInDays = differenceInDays;

const differenceInMonths = (dateA, dateB) => {
  return (
    (dateA.getFullYear() - dateB.getFullYear()) * 12 +
    dateA.getMonth() -
    dateB.getMonth()
  );
};
exports.differenceInMonths = differenceInMonths;

const differenceInQuarters = (dateA, dateB) => {
  return (
    (dateA.getFullYear() - dateB.getFullYear()) * 4 +
    getQuarter(dateA) -
    getQuarter(dateB)
  );
};
exports.differenceInQuarters = differenceInQuarters;

const differenceInYears = (dateA, dateB) => {
  return dateA.getFullYear() - dateB.getFullYear();
};
exports.differenceInYears = differenceInYears;
