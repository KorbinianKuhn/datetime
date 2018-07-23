const { normalizeUnit } = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');
const {
  UNIT_MILLISECOND,
  UNIT_SECOND,
  UNIT_MINUTE,
  UNIT_HOUR,
  UNIT_DAY,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_YEAR
} = require('./internal/constants');

exports.isSame = (dateA, dateB, unit = 'millisecond') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return isSameMillisecond(dateA, dateB);
    case UNIT_SECOND:
      return isSameSecond(dateA, dateB);
    case UNIT_MINUTE:
      return isSameMinute(dateA, dateB);
    case UNIT_HOUR:
      return isSameHour(dateA, dateB);
    case UNIT_DAY:
      return isSameDay(dateA, dateB);
    case UNIT_MONTH:
      return isSameMonth(dateA, dateB);
    case UNIT_QUARTER:
      return isSameQuarter(dateA, dateB);
    case UNIT_YEAR:
      return isSameYear(dateA, dateB);
  }
};

const isSameMillisecond = (dateA, dateB) => {
  return dateA.getTime() === dateB.getTime();
};
exports.isSameMillisecond = isSameMillisecond;

const isSameSecond = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes() &&
    dateA.getSeconds() === dateB.getSeconds()
  );
};
exports.isSameSecond = isSameSecond;

const isSameMinute = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes()
  );
};
exports.isSameMinute = isSameMinute;

const isSameHour = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours()
  );
};
exports.isSameHour = isSameHour;

const isSameDay = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
};
exports.isSameDay = isSameDay;

const isSameMonth = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth()
  );
};
exports.isSameMonth = isSameMonth;

const isSameQuarter = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    getQuarter(dateA) === getQuarter(dateB)
  );
};
exports.isSameQuarter = isSameQuarter;

const isSameYear = (dateA, dateB) => {
  return dateA.getFullYear() === dateB.getFullYear();
};
exports.isSameYear = isSameYear;
