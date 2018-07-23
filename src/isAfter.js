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

exports.isAfter = (dateA, dateB, unit = 'milliseconds') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return isAfterMillisecond(dateA, dateB);
    case UNIT_SECOND:
      return isAfterSecond(dateA, dateB);
    case UNIT_MINUTE:
      return isAfterMinute(dateA, dateB);
    case UNIT_HOUR:
      return isAfterHour(dateA, dateB);
    case UNIT_DAY:
      return isAfterDay(dateA, dateB);
    case UNIT_MONTH:
      return isAfterMonth(dateA, dateB);
    case UNIT_QUARTER:
      return isAfterQuarter(dateA, dateB);
    case UNIT_YEAR:
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

const isAfterQuarter = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return getQuarter(dateA) > getQuarter(dateB);
};
exports.isAfterQuarter = isAfterQuarter;

const isAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() > dateB.getFullYear();
};
exports.isAfterYear = isAfterYear;
