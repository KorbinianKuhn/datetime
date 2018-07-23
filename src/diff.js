const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_DAY,
  MILLISECONDS_PER_HOUR
} = require('./internal/constants');

const { normalizeUnit } = require('./internal/normalizeUnit');

exports.difference = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return differenceInMilliseconds(dateA, dateB);
    case 'seconds':
      return differenceInSeconds(dateA, dateB);
    case 'minutes':
      return differenceInMinutes(dateA, dateB);
    case 'hours':
      return differenceInHours(dateA, dateB);
    case 'days':
      return differenceInDays(dateA, dateB);
    case 'months':
      return differenceInMonths(dateA, dateB);
    case 'years':
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

const differenceInYears = (dateA, dateB) => {
  return dateA.getFullYear() - dateB.getFullYear();
};
exports.differenceInYears = differenceInYears;
