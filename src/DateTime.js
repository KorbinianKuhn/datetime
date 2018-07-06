const { addMilliseconds, addSeconds, addMinutes, addHours, addDays, addMonths, addYears } = require('./add');

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
}

exports.DateTime = DateTime;