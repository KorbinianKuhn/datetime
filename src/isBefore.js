const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY,
  UNIT_MILLISECOND,
  UNIT_SECOND,
  UNIT_MINUTE,
  UNIT_HOUR,
  UNIT_DAY,
  UNIT_MONTH,
  UNIT_QUARTER,
  UNIT_YEAR
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');
const { normalizeUnit } = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');

exports.isBefore = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return isBeforeMillisecond(dateA, dateB);
    case UNIT_SECOND:
      return isBeforeSecond(dateA, dateB);
    case UNIT_MINUTE:
      return isBeforeMinute(dateA, dateB);
    case UNIT_HOUR:
      return isBeforeHour(dateA, dateB);
    case UNIT_DAY:
      return isBeforeDay(dateA, dateB);
    case UNIT_MONTH:
      return isBeforeMonth(dateA, dateB);
    case UNIT_QUARTER:
      return isBeforeQuarter(dateA, dateB);
    case UNIT_YEAR:
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

const isBeforeQuarter = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return getQuarter(dateA) < getQuarter(dateB);
};
exports.isBeforeQuarter = isBeforeQuarter;

const isBeforeYear = (dateA, dateB) => {
  return dateA.getFullYear() < dateB.getFullYear();
};
exports.isBeforeYear = isBeforeYear;
