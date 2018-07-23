const { normalizeUnit } = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');

exports.isSame = (dateA, dateB, unit = 'millisecond') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return isSameMillisecond(dateA, dateB);
    case 'seconds':
      return isSameSecond(dateA, dateB);
    case 'minutes':
      return isSameMinute(dateA, dateB);
    case 'hours':
      return isSameHour(dateA, dateB);
    case 'days':
      return isSameDay(dateA, dateB);
    case 'months':
      return isSameMonth(dateA, dateB);
    case 'quarters':
      return isSameQuarter(dateA, dateB);
    case 'years':
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
