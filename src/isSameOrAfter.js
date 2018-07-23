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

exports.isSameOrAfter = (dateA, dateB, unit = 'millisecond') => {
  switch (normalizeUnit(unit)) {
    case UNIT_MILLISECOND:
      return isSameOrAfterMillisecond(dateA, dateB);
    case UNIT_SECOND:
      return isSameOrAfterSecond(dateA, dateB);
    case UNIT_MINUTE:
      return isSameOrAfterMinute(dateA, dateB);
    case UNIT_HOUR:
      return isSameOrAfterHour(dateA, dateB);
    case UNIT_DAY:
      return isSameOrAfterDay(dateA, dateB);
    case UNIT_MONTH:
      return isSameOrAfterMonth(dateA, dateB);
    case UNIT_QUARTER:
      return isSameOrAfterQuarter(dateA, dateB);
    case UNIT_YEAR:
      return isSameOrAfterYear(dateA, dateB);
  }
};

const isSameOrAfterMillisecond = (dateA, dateB) => {
  return dateA.getTime() >= dateB.getTime();
};
exports.isSameOrAfterMillisecond = isSameOrAfterMillisecond;

const isSameOrAfterSecond = (dateA, dateB) => {
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

  return dateA.getSeconds() >= dateB.getSeconds();
};
exports.isSameOrAfterSecond = isSameOrAfterSecond;

const isSameOrAfterMinute = (dateA, dateB) => {
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

  return dateA.getMinutes() >= dateB.getMinutes();
};
exports.isSameOrAfterMinute = isSameOrAfterMinute;

const isSameOrAfterHour = (dateA, dateB) => {
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

  return dateA.getHours() >= dateB.getHours();
};
exports.isSameOrAfterHour = isSameOrAfterHour;

const isSameOrAfterDay = (dateA, dateB) => {
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

  return dateA.getDate() >= dateB.getDate();
};
exports.isSameOrAfterDay = isSameOrAfterDay;

const isSameOrAfterMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getMonth() >= dateB.getMonth();
};
exports.isSameOrAfterMonth = isSameOrAfterMonth;

const isSameOrAfterQuarter = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return getQuarter(dateA) >= getQuarter(dateB);
};
exports.isSameOrAfterQuarter = isSameOrAfterQuarter;

const isSameOrAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() >= dateB.getFullYear();
};
exports.isSameOrAfterYear = isSameOrAfterYear;
