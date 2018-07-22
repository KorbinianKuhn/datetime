const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY
} = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');

exports.isAfter = (dateA, dateB) => {
  return dateA.getTime() > dateB.getTime();
};

exports.isAfterMillisecond = (dateA, dateB) => {
  return dateA.getTime() > dateB.getTime();
};

exports.isAfterSecond = (dateA, dateB) => {
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

exports.isAfterMinute = (dateA, dateB) => {
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

exports.isAfterHour = (dateA, dateB) => {
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

exports.isAfterDay = (dateA, dateB) => {
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

exports.isAfterMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return false;
    case 1:
      return true;
  }

  return dateA.getMonth() > dateB.getMonth();
};

exports.isAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() > dateB.getFullYear();
};
