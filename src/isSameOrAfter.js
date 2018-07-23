const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');
const { normalizeUnit } = require('./internal/normalizeUnit');

exports.isSameOrAfter = (dateA, dateB, unit = 'millisecond') => {
  switch (normalizeUnit(unit)) {
    case 'milliseconds':
      return isSameOrAfterMillisecond(dateA, dateB);
    case 'seconds':
      return isSameOrAfterSecond(dateA, dateB);
    case 'minutes':
      return isSameOrAfterMinute(dateA, dateB);
    case 'hours':
      return isSameOrAfterHour(dateA, dateB);
    case 'days':
      return isSameOrAfterDay(dateA, dateB);
    case 'months':
      return isSameOrAfterMonth(dateA, dateB);
    case 'years':
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

const isSameOrAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() >= dateB.getFullYear();
};
exports.isSameOrAfterYear = isSameOrAfterYear;
