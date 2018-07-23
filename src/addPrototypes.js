const { addPrototype } = require('./internal/addPrototype');
const {
  add,
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
  difference,
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} = require('./diff');
const {
  endOf,
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
  startOf,
  startOfSecond,
  startOfMinute,
  startOfHour,
  startOfDay,
  startOfMonth,
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
  subtractYears
} = require('./subtract');
const { toUTC } = require('./toUTC');
const { unix } = require('./unix');

exports.addPrototypes = () => {
  addPrototype('add', function(amount, unit = 'milliseconds') {
    return add(this, amount, unit);
  });

  addPrototype('addMilliseconds', function(amount) {
    return addMilliseconds(this, amount);
  });

  addPrototype('addSeconds', function(amount) {
    return addSeconds(this, amount);
  });

  addPrototype('addMinutes', function(amount) {
    return addMinutes(this, amount);
  });

  addPrototype('addHours', function(amount) {
    return addHours(this, amount);
  });

  addPrototype('addDays', function(amount) {
    return addDays(this, amount);
  });

  addPrototype('addMonths', function(amount) {
    return addMonths(this, amount);
  });

  addPrototype('addYears', function(amount) {
    return addYears(this, amount);
  });

  addPrototype('clone', function() {
    return clone(this);
  });

  addPrototype('daysInMonth', function() {
    return daysInMonth(this);
  });

  addPrototype('daysInYear', function() {
    return daysInYear(this);
  });

  addPrototype('difference', function(date, unit = 'milliseconds') {
    return difference(this, date, unit);
  });

  addPrototype('differenceInMilliseconds', function(date) {
    return differenceInMilliseconds(this, date);
  });

  addPrototype('differenceInSeconds', function(date) {
    return differenceInSeconds(this, date);
  });

  addPrototype('differenceInMinutes', function(date) {
    return differenceInMinutes(this, date);
  });

  addPrototype('differenceInHours', function(date) {
    return differenceInHours(this, date);
  });

  addPrototype('differenceInDays', function(date) {
    return differenceInDays(this, date);
  });

  addPrototype('differenceInMonths', function(date) {
    return differenceInMonths(this, date);
  });

  addPrototype('differenceInYears', function(date) {
    return differenceInYears(this, date);
  });

  addPrototype('endOf', function(unit = 'second') {
    return endOf(this, unit);
  });

  addPrototype('endOfSecond', function() {
    return endOfSecond(this);
  });

  addPrototype('endOfMinute', function() {
    return endOfMinute(this);
  });

  addPrototype('endOfHour', function() {
    return endOfHour(this);
  });

  addPrototype('endOfDay', function() {
    return endOfDay(this);
  });

  addPrototype('endOfMonth', function() {
    return endOfMonth(this);
  });

  addPrototype('endOfYear', function() {
    return endOfYear(this);
  });

  addPrototype('isAfter', function(date, unit = 'millisecond') {
    return isAfter(this, date, unit);
  });

  addPrototype('isAfterMillisecond', function(date) {
    return isAfterMillisecond(this, date);
  });

  addPrototype('isAfterSecond', function(date) {
    return isAfterSecond(this, date);
  });

  addPrototype('isAfterMinute', function(date) {
    return isAfterMinute(this, date);
  });

  addPrototype('isAfterHour', function(date) {
    return isAfterHour(this, date);
  });

  addPrototype('isAfterDay', function(date) {
    return isAfterDay(this, date);
  });

  addPrototype('isAfterMonth', function(date) {
    return isAfterMonth(this, date);
  });

  addPrototype('isAfterYear', function(date) {
    return isAfterYear(this, date);
  });

  addPrototype('isBefore', function(date, unit = 'millisecond') {
    return isBefore(this, date, unit);
  });

  addPrototype('isBeforeMillisecond', function(date) {
    return isBeforeMillisecond(this, date);
  });

  addPrototype('isBeforeSecond', function(date) {
    return isBeforeSecond(this, date);
  });

  addPrototype('isBeforeMinute', function(date) {
    return isBeforeMinute(this, date);
  });

  addPrototype('isBeforeHour', function(date) {
    return isBeforeHour(this, date);
  });

  addPrototype('isBeforeDay', function(date) {
    return isBeforeDay(this, date);
  });

  addPrototype('isBeforeMonth', function(date) {
    return isBeforeMonth(this, date);
  });

  addPrototype('isBeforeYear', function(date) {
    return isBeforeYear(this, date);
  });

  addPrototype('isLeapYear', function() {
    return isLeapYear(this);
  });

  addPrototype('isSame', function(date, unit = 'millisecond') {
    return isSame(this, date, unit);
  });

  addPrototype('isSameMillisecond', function(date) {
    return isSameMillisecond(this, date);
  });

  addPrototype('isSameSecond', function(date) {
    return isSameSecond(this, date);
  });

  addPrototype('isSameMinute', function(date) {
    return isSameMinute(this, date);
  });

  addPrototype('isSameHour', function(date) {
    return isSameHour(this, date);
  });

  addPrototype('isSameDay', function(date) {
    return isSameDay(this, date);
  });

  addPrototype('isSameMonth', function(date) {
    return isSameMonth(this, date);
  });

  addPrototype('isSameYear', function(date) {
    return isSameYear(this, date);
  });

  addPrototype('isSameOrAfter', function(date, unit = 'millisecond') {
    return isSameOrAfter(this, date, unit);
  });

  addPrototype('isSameOrAfterMillisecond', function(date) {
    return isSameOrAfterMillisecond(this, date);
  });

  addPrototype('isSameOrAfterSecond', function(date) {
    return isSameOrAfterSecond(this, date);
  });

  addPrototype('isSameOrAfterMinute', function(date) {
    return isSameOrAfterMinute(this, date);
  });

  addPrototype('isSameOrAfterHour', function(date) {
    return isSameOrAfterHour(this, date);
  });

  addPrototype('isSameOrAfterDay', function(date) {
    return isSameOrAfterDay(this, date);
  });

  addPrototype('isSameOrAfterMonth', function(date) {
    return isSameOrAfterMonth(this, date);
  });

  addPrototype('isSameOrAfterYear', function(date) {
    return isSameOrAfterYear(this, date);
  });

  addPrototype('isSameOrBefore', function(date, unit = 'millisecond') {
    return isSameOrBefore(this, date, unit);
  });

  addPrototype('isSameOrBeforeMillisecond', function(date) {
    return isSameOrBeforeMillisecond(this, date);
  });

  addPrototype('isSameOrBeforeSecond', function(date) {
    return isSameOrBeforeSecond(this, date);
  });

  addPrototype('isSameOrBeforeMinute', function(date) {
    return isSameOrBeforeMinute(this, date);
  });

  addPrototype('isSameOrBeforeHour', function(date) {
    return isSameOrBeforeHour(this, date);
  });

  addPrototype('isSameOrBeforeDay', function(date) {
    return isSameOrBeforeDay(this, date);
  });

  addPrototype('isSameOrBeforeMonth', function(date) {
    return isSameOrBeforeMonth(this, date);
  });

  addPrototype('isSameOrBeforeYear', function(date) {
    return isSameOrBeforeYear(this, date);
  });

  addPrototype('isValid', function() {
    return isValid(this);
  });

  addPrototype('startOf', function(unit = 'second') {
    return startOf(this, unit);
  });

  addPrototype('startOfSecond', function() {
    return startOfSecond(this);
  });

  addPrototype('startOfMinute', function() {
    return startOfMinute(this);
  });

  addPrototype('startOfHour', function() {
    return startOfHour(this);
  });

  addPrototype('startOfDay', function() {
    return startOfDay(this);
  });

  addPrototype('startOfMonth', function() {
    return startOfMonth(this);
  });

  addPrototype('startOfYear', function() {
    return startOfYear(this);
  });

  addPrototype('subtract', function(amount, unit = 'milliseconds') {
    return subtract(this, amount, unit);
  });

  addPrototype('subtractMilliseconds', function(amount) {
    return subtractMilliseconds(this, amount);
  });

  addPrototype('subtractSeconds', function(amount) {
    return subtractSeconds(this, amount);
  });

  addPrototype('subtractMinutes', function(amount) {
    return subtractMinutes(this, amount);
  });

  addPrototype('subtractHours', function(amount) {
    return subtractHours(this, amount);
  });

  addPrototype('subtractDays', function(amount) {
    return subtractDays(this, amount);
  });

  addPrototype('subtractMonths', function(amount) {
    return subtractMonths(this, amount);
  });

  addPrototype('subtractYears', function(amount) {
    return subtractYears(this, amount);
  });

  addPrototype('toUTC', function() {
    return toUTC(this);
  });

  addPrototype('unix', function() {
    return unix(this);
  });
};
