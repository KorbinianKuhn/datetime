const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');
const { normalizeUnit } = require('./internal/normalizeUnit');

exports.isAfter = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return isAfterMillisecond(dateA, dateB);
    case 'seconds':
      return isAfterSecond(dateA, dateB);
    case 'minutes':
      return isAfterMinute(dateA, dateB);
    case 'hours':
      return isAfterHour(dateA, dateB);
    case 'days':
      return isAfterDay(dateA, dateB);
    case 'months':
      return isAfterMonth(dateA, dateB);
    case 'years':
      return isAfterYear(dateA, dateB);
  }
};

const isAfterMillisecond = (dateA, dateB) => {
  return dateA.getTime() > dateB.getTime();
};
exports.isAfterMillisecond = isAfterMillisecond;

const isAfterSecond = (dateA, dateB) => {
  if (dateA.getTime() - dateB.getTime() >= MILLISECONDS_PER_SECOND) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getMinutes(), dateB.getMinutes())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getSeconds() > dateB.getSeconds();
};
exports.isAfterSecond = isAfterSecond;

const isAfterMinute = (dateA, dateB) => {
  if (dateA.getTime() - dateB.getTime() >= MILLISECONDS_PER_MINUTE) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getMinutes() > dateB.getMinutes();
};
exports.isAfterMinute = isAfterMinute;

const isAfterHour = (dateA, dateB) => {
  if (dateA.getTime() - dateB.getTime() >= MILLISECONDS_PER_HOUR) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getHours() > dateB.getHours();
};
exports.isAfterHour = isAfterHour;

const isAfterDay = (dateA, dateB) => {
  if (dateA.getTime() - dateB.getTime() >= MILLISECONDS_PER_DAY) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getDate() > dateB.getDate();
};
exports.isAfterDay = isAfterDay;

const isAfterMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getMonth() > dateB.getMonth();
};
exports.isAfterMonth = isAfterMonth;

const isAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() > dateB.getFullYear();
};
exports.isAfterYear = isAfterYear;
