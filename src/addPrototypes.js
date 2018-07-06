const { addPrototype } = require('./internal/addPrototype');

const { addMilliseconds, addSeconds, addMinutes, addHours, addDays, addMonths, addYears } = require('./add');
const { clone } = require('./clone');
const { daysInMonth } = require('./daysInMonth');
const { daysInYear } = require('./daysInYear');
const { differenceInMilliseconds, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } = require('./add');

exports.addPrototypes = () => {
  addPrototype('addMilliseconds', function (amount) {
    return addMilliseconds(this, amount);
  })

  addPrototype('addSeconds', function(amount) {
    return addSeconds(this, amount);
  })

  addPrototype('addMinutes', function(amount) {
    return addMinutes(this, amount);
  })

  addPrototype('addHours', function(amount) {
    return addHours(this, amount);
  })

  addPrototype('addDays', function(amount) {
    return addDays(this, amount);
  })

  addPrototype('addMonths', function(amount) {
    return addMonths(this, amount);
  })

  addPrototype('addYears', function(amount) {
    return addYears(this, amount);
  })

  addPrototype('clone', function() {
    return clone(this);
  })

  addPrototype('daysInMonth', function() {
    return daysInMonth(this);
  })

  addPrototype('daysInYear', function() {
    return daysInYear(this);
  })

  addPrototype('differenceInMilliseconds', function(date) {
    return differenceInMilliseconds(this, date);
  })

  addPrototype('differenceInSeconds', function(date) {
    return differenceInSeconds(this, date);
  })

  addPrototype('differenceInMinutes', function(date) {
    return differenceInMinutes(this, date);
  })

  addPrototype('differenceInHours', function(date) {
    return differenceInHours(this, date);
  })

  addPrototype('differenceInDays', function(date) {
    return differenceInDays(this, date);
  })

  addPrototype('differenceInMonths', function(date) {
    return differenceInMonths(this, date);
  })

  addPrototype('differenceInYears', function(date) {
    return differenceInYears(this, date);
  })
}