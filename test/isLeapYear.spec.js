const moment = require('moment');
const datetime = require('./../dist');

describe('isLeapYear()', () => {
  it('should be normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });
});
