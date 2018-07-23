const {
  add,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addQuarters,
  addYears
} = require('./add');
const { clone } = require('./clone');
const { daysInMonth } = require('./daysInMonth');
const { daysInQuarter } = require('./daysInQuarter');
const { daysInYear } = require('./daysInYear');
const {
  difference,
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInQuarters,
  differenceInYears
} = require('./diff');
const {
  endOf,
  endOfSecond,
  endOfMinute,
  endOfHour,
  endOfDay,
  endOfMonth,
  endOfQuarter,
  endOfYear
} = require('./endOf');
const { getQuarter } = require('./getQuarter');
const {
  isAfter,
  isAfterMillisecond,
  isAfterSecond,
  isAfterMinute,
  isAfterHour,
  isAfterDay,
  isAfterMonth,
  isAfterQuarter,
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
  isBeforeQuarter,
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
  isSameQuarter,
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
  isSameOrAfterQuarter,
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
  isSameOrBeforeQuarter,
  isSameOrBeforeYear
} = require('./isSameOrBefore');
const { isValid } = require('./isValid');
const {
  startOf,
  startOfSecond,
  startOfMinute,
  startOfHour,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfYear
} = require('./startOf');
const {
  subtract,
  subtractMilliseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractMonths,
  subtractQuarters,
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

  add(amount, unit = 'milliseconds') {
    return add(this, amount, unit);
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

  addQuarters(amount) {
    return addQuarters(this, amount);
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

  daysInQuarter() {
    return daysInQuarter(this);
  }

  daysInYear() {
    return daysInYear(this);
  }

  difference(date, unit = 'milliseconds') {
    return difference(this, date, unit);
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

  differenceInQuarters(date) {
    return differenceInQuarters(this, date);
  }

  differenceInYears(date) {
    return differenceInYears(this, date);
  }

  endOf(unit = 'second') {
    return endOf(this, unit);
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

  endOfQuarter() {
    return endOfQuarter(this);
  }

  endOfYear() {
    return endOfYear(this);
  }

  getQuarter() {
    return getQuarter(this);
  }

  isAfter(date, unit = 'milliseconds') {
    return isAfter(this, date, unit);
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

  isAfterQuarter(date) {
    return isAfterQuarter(this, date);
  }

  isAfterYear(date) {
    return isAfterYear(this, date);
  }

  isBefore(date, unit = 'milliseconds') {
    return isBefore(this, date, unit);
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

  isBeforeQuarter(date) {
    return isBeforeQuarter(this, date);
  }

  isBeforeYear(date) {
    return isBeforeYear(this, date);
  }

  isLeapYear() {
    return isLeapYear(this);
  }

  isSame(date, unit = 'milliseconds') {
    return isSame(this, date, unit);
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

  isSameQuarter(date) {
    return isSameQuarter(this, date);
  }

  isSameYear(date) {
    return isSameYear(this, date);
  }

  isSameOrAfter(date, unit = 'milliseconds') {
    return isSameOrAfter(this, date, unit);
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

  isSameOrAfterQuarter(date) {
    return isSameOrAfterQuarter(this, date);
  }

  isSameOrAfterYear(date) {
    return isSameOrAfterYear(this, date);
  }

  isSameOrBefore(date, unit = 'milliseconds') {
    return isSameOrBefore(this, date, unit);
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

  isSameOrBeforeQuarter(date) {
    return isSameOrBeforeQuarter(this, date);
  }

  isSameOrBeforeYear(date) {
    return isSameOrBeforeYear(this, date);
  }

  isValid() {
    return isValid(this);
  }

  startOf(unit = 'second') {
    return startOf(this, unit);
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

  startOfQuarter() {
    return startOfQuarter(this);
  }

  startOfYear() {
    return startOfYear(this);
  }

  subtract(amount, unit = 'milliseconds') {
    return subtract(this, amount, unit);
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

  subtractQuarters(amount) {
    return subtractQuarters(this, amount);
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
