const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');
const { normalizeUnit } = require('./internal/normalizeUnit');
const { getQuarter } = require('./getQuarter');

exports.isSameOrBefore = (dateA, dateB, unit = 'millisecond') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return isSameOrBeforeMillisecond(dateA, dateB);
    case 'seconds':
      return isSameOrBeforeSecond(dateA, dateB);
    case 'minutes':
      return isSameOrBeforeMinute(dateA, dateB);
    case 'hours':
      return isSameOrBeforeHour(dateA, dateB);
    case 'days':
      return isSameOrBeforeDay(dateA, dateB);
    case 'months':
      return isSameOrBeforeMonth(dateA, dateB);
    case 'quarters':
      return isSameOrBeforeQuarter(dateA, dateB);
    case 'years':
      return isSameOrBeforeYear(dateA, dateB);
  }
};

const isSameOrBeforeMillisecond = (dateA, dateB) => {
  return dateA.getTime() <= dateB.getTime();
};
exports.isSameOrBeforeMillisecond = isSameOrBeforeMillisecond;

const isSameOrBeforeSecond = (dateA, dateB) => {
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

  return dateA.getSeconds() <= dateB.getSeconds();
};
exports.isSameOrBeforeSecond = isSameOrBeforeSecond;

const isSameOrBeforeMinute = (dateA, dateB) => {
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

  return dateA.getMinutes() <= dateB.getMinutes();
};
exports.isSameOrBeforeMinute = isSameOrBeforeMinute;

const isSameOrBeforeHour = (dateA, dateB) => {
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

  return dateA.getHours() <= dateB.getHours();
};
exports.isSameOrBeforeHour = isSameOrBeforeHour;

const isSameOrBeforeDay = (dateA, dateB) => {
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

  return dateA.getDate() <= dateB.getDate();
};
exports.isSameOrBeforeDay = isSameOrBeforeDay;

const isSameOrBeforeMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getMonth() <= dateB.getMonth();
};
exports.isSameOrBeforeMonth = isSameOrBeforeMonth;

const isSameOrBeforeQuarter = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return getQuarter(dateA) <= getQuarter(dateB);
};
exports.isSameOrBeforeQuarter = isSameOrBeforeQuarter;

const isSameOrBeforeYear = (dateA, dateB) => {
  return dateA.getFullYear() <= dateB.getFullYear();
};
exports.isSameOrBeforeYear = isSameOrBeforeYear;
