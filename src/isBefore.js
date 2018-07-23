const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');
const { normalizeUnit } = require('./internal/normalizeUnit');

exports.isBefore = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return isBeforeMillisecond(dateA, dateB);
    case 'seconds':
      return isBeforeSecond(dateA, dateB);
    case 'minutes':
      return isBeforeMinute(dateA, dateB);
    case 'hours':
      return isBeforeHour(dateA, dateB);
    case 'days':
      return isBeforeDay(dateA, dateB);
    case 'months':
      return isBeforeMonth(dateA, dateB);
    case 'years':
      return isBeforeYear(dateA, dateB);
  }
};

const isBeforeMillisecond = (dateA, dateB) => {
  return dateA.getTime() < dateB.getTime();
};
exports.isBeforeMillisecond = isBeforeMillisecond;

const isBeforeSecond = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_SECOND) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMinutes(), dateB.getMinutes())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getSeconds() < dateB.getSeconds();
};
exports.isBeforeSecond = isBeforeSecond;

const isBeforeMinute = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_MINUTE) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getMinutes() < dateB.getMinutes();
};
exports.isBeforeMinute = isBeforeMinute;

const isBeforeHour = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_HOUR) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getHours() < dateB.getHours();
};
exports.isBeforeHour = isBeforeHour;

const isBeforeDay = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_DAY) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getDate() < dateB.getDate();
};
exports.isBeforeDay = isBeforeDay;

const isBeforeMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getMonth() < dateB.getMonth();
};
exports.isBeforeMonth = isBeforeMonth;

const isBeforeYear = (dateA, dateB) => {
  return dateA.getFullYear() < dateB.getFullYear();
};
exports.isBeforeYear = isBeforeYear;
