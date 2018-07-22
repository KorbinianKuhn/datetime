const {
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears
} = require('./add');
const { clone } = require('./clone');
const { daysInMonth } = require('./daysInMonth');
const { daysInYear } = require('./daysInYear');
const {
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} = require('./diff');
const {
  endOfSecond,
  endOfMinute,
  endOfHour,
  endOfDay,
  endOfMonth,
  endOfYear
} = require('./endOf');
const {
  isAfter,
  isAfterMillisecond,
  isAfterSecond,
  isAfterMinute,
  isAfterHour,
  isAfterDay,
  isAfterMonth,
  isAfterYear
} = require('./isAfter');
const {
  isBefore,
  isBeforeMillisecond,
  isBeforeSecond,
  isBeforeMinute,
  isBeforeHour,
  isBeforeDay,
  isBeforeMonth,
  isBeforeYear
} = require('./isBefore');
const { isLeapYear } = require('./isLeapYear');
const {
  isSame,
  isSameMillisecond,
  isSameSecond,
  isSameMinute,
  isSameHour,
  isSameDay,
  isSameMonth,
  isSameYear
} = require('./isSame');
const {
  isSameOrAfter,
  isSameOrAfterMillisecond,
  isSameOrAfterSecond,
  isSameOrAfterMinute,
  isSameOrAfterHour,
  isSameOrAfterDay,
  isSameOrAfterMonth,
  isSameOrAfterYear
} = require('./isSameOrAfter');
const {
  isSameOrBefore,
  isSameOrBeforeMillisecond,
  isSameOrBeforeSecond,
  isSameOrBeforeMinute,
  isSameOrBeforeHour,
  isSameOrBeforeDay,
  isSameOrBeforeMonth,
  isSameOrBeforeYear
} = require('./isSameOrBefore');
const { isValid } = require('./isValid');
const {
  startOfSecond,
  startOfMinute,
  startOfHour,
  startOfDay,
  startOfMonth,
  startOfYear
} = require('./startOf');
const {
  subtractMilliseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractMonths,
  subtractYears
} = require('./subtract');
const { toUTC } = require('./toUTC');
const { unix } = require('./unix');

class DateTime extends Date {
  constructor(input) {
    super(input);
  }

  toDate() {
    return new Date(this);
  }

  addMilliseconds(amount) {
    return addMilliseconds(this, amount);
  }

  addSeconds(amount) {
    return addSeconds(this, amount);
  }

  addMinutes(amount) {
    return addMinutes(this, amount);
  }

  addHours(amount) {
    return addHours(this, amount);
  }

  addDays(amount) {
    return addDays(this, amount);
  }

  addMonths(amount) {
    return addMonths(this, amount);
  }

  addYears(amount) {
    return addYears(this, amount);
  }

  clone() {
    return clone(this);
  }

  daysInMonth() {
    return daysInMonth(this);
  }

  daysInYear() {
    return daysInYear(this);
  }

  differenceInMilliseconds(date) {
    return differenceInMilliseconds(this, date);
  }

  differenceInSeconds(date) {
    return differenceInSeconds(this, date);
  }

  differenceInMinutes(date) {
    return differenceInMinutes(this, date);
  }

  differenceInHours(date) {
    return differenceInHours(this, date);
  }

  differenceInDays(date) {
    return differenceInDays(this, date);
  }

  differenceInMonths(date) {
    return differenceInMonths(this, date);
  }

  differenceInYears(date) {
    return differenceInYears(this, date);
  }

  endOfSecond() {
    return endOfSecond(this);
  }

  endOfMinute() {
    return endOfMinute(this);
  }

  endOfHour() {
    return endOfHour(this);
  }

  endOfDay() {
    return endOfDay(this);
  }

  endOfMonth() {
    return endOfMonth(this);
  }

  endOfYear() {
    return endOfYear(this);
  }

  isAfter(date) {
    return isAfter(this, date);
  }

  isAfterMillisecond(date) {
    return isAfterMillisecond(this, date);
  }

  isAfterSecond(date) {
    return isAfterSecond(this, date);
  }

  isAfterMinute(date) {
    return isAfterMinute(this, date);
  }

  isAfterHour(date) {
    return isAfterHour(this, date);
  }

  isAfterDay(date) {
    return isAfterDay(this, date);
  }

  isAfterMonth(date) {
    return isAfterMonth(this, date);
  }

  isAfterYear(date) {
    return isAfterYear(this, date);
  }

  isBefore(date) {
    return isBefore(this, date);
  }

  isBeforeMillisecond(date) {
    return isBeforeMillisecond(this, date);
  }

  isBeforeSecond(date) {
    return isBeforeSecond(this, date);
  }

  isBeforeMinute(date) {
    return isBeforeMinute(this, date);
  }

  isBeforeHour(date) {
    return isBeforeHour(this, date);
  }

  isBeforeDay(date) {
    return isBeforeDay(this, date);
  }

  isBeforeMonth(date) {
    return isBeforeMonth(this, date);
  }

  isBeforeYear(date) {
    return isBeforeYear(this, date);
  }

  isLeapYear() {
    return isLeapYear(this);
  }

  isSame(date) {
    return isSame(this, date);
  }

  isSameMillisecond(date) {
    return isSameMillisecond(this, date);
  }

  isSameSecond(date) {
    return isSameSecond(this, date);
  }

  isSameMinute(date) {
    return isSameMinute(this, date);
  }

  isSameHour(date) {
    return isSameHour(this, date);
  }

  isSameDay(date) {
    return isSameDay(this, date);
  }

  isSameMonth(date) {
    return isSameMonth(this, date);
  }

  isSameYear(date) {
    return isSameYear(this, date);
  }

  isSameOrAfter(date) {
    return isSameOrAfter(this, date);
  }

  isSameOrAfterMillisecond(date) {
    return isSameOrAfterMillisecond(this, date);
  }

  isSameOrAfterSecond(date) {
    return isSameOrAfterSecond(this, date);
  }

  isSameOrAfterMinute(date) {
    return isSameOrAfterMinute(this, date);
  }

  isSameOrAfterHour(date) {
    return isSameOrAfterHour(this, date);
  }

  isSameOrAfterDay(date) {
    return isSameOrAfterDay(this, date);
  }

  isSameOrAfterMonth(date) {
    return isSameOrAfterMonth(this, date);
  }

  isSameOrAfterYear(date) {
    return isSameOrAfterYear(this, date);
  }

  isSameOrBefore(date) {
    return isSameOrBefore(this, date);
  }

  isSameOrBeforeMillisecond(date) {
    return isSameOrBeforeMillisecond(this, date);
  }

  isSameOrBeforeSecond(date) {
    return isSameOrBeforeSecond(this, date);
  }

  isSameOrBeforeMinute(date) {
    return isSameOrBeforeMinute(this, date);
  }

  isSameOrBeforeHour(date) {
    return isSameOrBeforeHour(this, date);
  }

  isSameOrBeforeDay(date) {
    return isSameOrBeforeDay(this, date);
  }

  isSameOrBeforeMonth(date) {
    return isSameOrBeforeMonth(this, date);
  }

  isSameOrBeforeYear(date) {
    return isSameOrBeforeYear(this, date);
  }

  isValid() {
    return isValid(this);
  }

  startOfSecond() {
    return startOfSecond(this);
  }

  startOfMinute() {
    return startOfMinute(this);
  }

  startOfHour() {
    return startOfHour(this);
  }

  startOfDay() {
    return startOfDay(this);
  }

  startOfMonth() {
    return startOfMonth(this);
  }

  startOfYear() {
    return startOfYear(this);
  }

  subtractMilliseconds(amount) {
    return subtractMilliseconds(this, amount);
  }

  subtractSeconds(amount) {
    return subtractSeconds(this, amount);
  }

  subtractMinutes(amount) {
    return subtractMinutes(this, amount);
  }

  subtractHours(amount) {
    return subtractHours(this, amount);
  }

  subtractDays(amount) {
    return subtractDays(this, amount);
  }

  subtractMonths(amount) {
    return subtractMonths(this, amount);
  }

  subtractYears(amount) {
    return subtractYears(this, amount);
  }

  unix() {
    return unix(this);
  }
}

exports.DateTime = DateTime;

exports.local = input => {
  return new DateTime(input);
};

exports.utc = input => {
  return new DateTime(toUTC(input ? new Date(input) : new Date()));
};
