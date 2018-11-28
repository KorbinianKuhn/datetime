const moment = require('moment');
const datetime = require('./../dist');

describe('daysInMonth()', () => {
  it('should have num days of februar in normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 28;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of februar in leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 29;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of long month', () => {
    const date = new Date('2018-12-01T00:00:00.000Z');
    const expectedDaysInMonth = 31;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of short month', () => {
    const date = new Date('2018-11-01T00:00:00.000Z');
    const expectedDaysInMonth = 30;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });
});
